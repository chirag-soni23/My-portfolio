import React, { useState } from 'react';
import swal from 'sweetalert';
import '../Stylesheet/Home.css';

const Home = () => {
  const [resumeFile, setResumeFile] = useState(null);

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeFile(file);
  };

  // Function to handle the resume download
  const handleDownloadResume = () => {
    if (resumeFile) {
      const fileUrl = URL.createObjectURL(resumeFile);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      swal('Oops!', 'Please select a file before downloading.', 'error');
    }
  };

  return (
    <div>
      <section className="home-section">
        <div className="home-container">
          <div className="home-content animated-fade-in">
            <h1 className="home-title">Welcome to My Portfolio</h1>
            <p className="home-description">
              I am a passionate web developer dedicated to creating innovative
              and user-friendly websites.
            </p>
            {/* Use input type="file" for resume upload */}
            <input type="file" onChange={handleFileChange} className="file-input" />
            {/* Add an onClick event to trigger the download */}
            <button onClick={handleDownloadResume} className="download-btn">
              Download Resume
            </button>
          </div>
         
        </div>
      </section>

     <div className="additional-content">
            <h2>My Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              {/* Add more skills as needed */}
            </ul>
          </div>

          <div className="additional-content">
            <h2>Projects</h2>
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of Project 1.</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of Project 2.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
    </div>
  );
};

export default Home;
