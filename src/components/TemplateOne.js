import React from 'react';
import './Templateone.css'; // Import your CSS file for styling

const Resume = ({
  name ,
  expertise ,
  experience ,
  education ,
  achievements ,
  languages ,
  contact ,
  email ,
  companies  ,
  linkedin ,
  instagram,
  facebook ,
  twitter ,
  github ,
  about  ,
  programmingLanguages 
}) => {
 

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="resume-form p-5 shadow">
            <h2 className="text-center mb-10 fs-50" style={{ fontSize: '42px' }}>
              <strong style={{ fontWeight: 'bold' }}>{name}</strong>
            </h2>
            {/* <div className="mb-4"> */}
            <h2 className="text-center mb-5 fs-50" style={{ fontSize: '30px' }}>
              <strong style={{ fontWeight: 'italics' }}>{expertise}</strong>
            </h2>
            <div className="mb-4">
            <h2>About</h2>
        <p>{about}</p>
            </div>
            <div className="mb-4">
            <h2>Education</h2>
        <p>{education}</p>
            </div>
            <div className="mb-4">
              <h1>Expertise</h1>
              <p>{expertise}</p>
            </div>
            <div className="mb-4">
              <h1>experience</h1>
              <p>{experience}</p>
            </div>
            <div className="mb-4">
            <h2> Languages</h2>
        <p>{languages}</p>
            </div>
            <div className="mb-4">
            <h2>Programming Languages</h2>
        <p>{programmingLanguages}</p>
            </div>
            
            <div className="mb-4">
            <h2>Achievements</h2>
        <p>{achievements}</p>
            </div>
            <div className="mb-4">
            <h2>Companies </h2>
        <p>{companies}</p>
            </div>
            <div className="mb-4">
            <h2>Contact Number</h2>
        <p>{contact}</p>
            </div>
            <div className="mb-4">
            <h2>Email Id:</h2>
        <p>{email}</p>
            </div>
          
            <div className="mb-4">
            <h2>Linkdin Id:</h2>
        <p>{linkedin}</p>
            </div>
            <div className="mb-4">
            <h2>Instagram Id:</h2>
        <p>{instagram}</p>
            </div>
            <div className="mb-4">
            <h2>facebook Id:</h2>
        <p>{facebook}</p>
            </div>
            <div className="mb-4">
            <h2>Twitter Id;</h2>
        <p>{twitter}</p>
            </div>
            <div className="mb-4">
            <h2>Github Id:</h2>
        <p>{github}</p>
            </div>
           
            
            {/* <div className="text-center">
              <button className="btn btn-primary">Generate Resume</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Resume;
