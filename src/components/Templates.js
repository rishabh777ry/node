import React, { useState } from 'react';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';

const ResumeBuilder = (props) => {
  const [selectedTemplate, setSelectedTemplate] = useState('TemplateOne');



  const handleTemplateSelect = (templateName) => {
    setSelectedTemplate(templateName);
   
  };


  
  function printDiv(divId) {
    var divToPrint = document.getElementById(divId);
    var newWin = window.open('', 'Print-Window');
    newWin.document.open();
    newWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
    newWin.document.close();
    setTimeout(function () {
      newWin.close();
    }, 10);
  }
  return (
    <div>
       <div className='d-flex justify-content-between mx-5 my-4'  >
        <button className='btn btn-primary' onClick={() => handleTemplateSelect('TemplateOne')}>Template One</button>
        <button className='btn btn-success' onClick={() => handleTemplateSelect('TemplateTwo')}>Template Two</button>
      </div>
      <div id="resume-template"  >
        {selectedTemplate === 'TemplateOne' && <TemplateOne {...props} />}
        {selectedTemplate === 'TemplateTwo' && <TemplateTwo {...props} />}
      </div>
      <button
  className="btn btn-info mx-auto d-block"
  onClick={() => printDiv('resume-template')}
  style={{
    width: '150px', // Set a preferred width for the button
    marginTop: '20px', 
    marginBottom:'40px'// Adjust the margin-top as needed
  }}
>
  Print
</button>
    </div>
  );
};

export default ResumeBuilder;
