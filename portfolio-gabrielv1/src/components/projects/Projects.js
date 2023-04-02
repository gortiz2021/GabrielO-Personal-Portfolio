import React from 'react'
import './Projects.css'
import Image from 'react-bootstrap/esm/Image'

const Projects = () => {
  return (
    <div className='project-container'>
      <h1>Projects</h1>

      <div className='project-block'>

        <div className='project-item project-item-1'>
          <h3>Movie Review App</h3>
          
          <div className='project-detail project-detail-1'>
            <Image className='project-image' src={require('../../images/MovieReviewApp-img.png')} alt='' />

            <p className='project-text'> A website used to watch movie trailers. Users can leave a review about the movie and see previous reviews. Built with HTML/CSS/JS, React, MongoDB and Springboot.</p>
          </div>
          
        </div>
        
        <div className='project-item project-item-2'>
          <h3>Dollars Bank App</h3>

          <div className='project-detail project-detail-2'>
            <Image className='project-image' src={require('../../images/DollarsBank-Fullstack-img.png')} alt='' />

            <p className='project-text'> A banking application that uses REST APIs. The APIs wre created using Springboot and tested with Postman. Data was stored in a MySQL database. The UI was built with React, Bootstrap, and HTMl/CSS/JS. </p>
          </div>
        </div>

        {/* <div className='project-item project-item-3'>
          <h3 className='project3-header'>Virtual Reality Game Room</h3>

          <div className='project-detail project-detail-3'>
            <Image className='project-image' src={require('../../images/java-logo.png')} alt='' width={100} height={100} />

            <p className='project-text'> An VR website that has various rooms the user can interact with. Built with MERN stack.</p>
          </div>
        </div> */}

      </div>

    </div>

    
  )
}

export default Projects