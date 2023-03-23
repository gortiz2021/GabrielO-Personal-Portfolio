import React from 'react'
import Image from 'react-bootstrap/Image'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills-container'> 

      <h1>Skills</h1>

      <div className='skills-images'>
        <Image className='logos' src={require('../../images/java-logo.png')} alt='' width={100} height={100} />
        <Image className='logos' src={require('../../images/react-logo.png')} alt='' width={100} height={100} />
        <Image className='logos' src={require('../../images/springboot-logo.png')} alt='' width={100} height={100} />
        <Image className='logos' src={require('../../images/aws-logo.png')} alt='' width={100} height={100} />
        <Image className='logos' src={require('../../images/mysql-logo.png')} alt='' width={100} height={100} />
        <Image className='logos' src={require('../../images/html-logo.png')} alt='' width={100} height={100} />
        <Image className='logos' src={require('../../images/css-logo.png')} alt='' width={100} height={100} />
        <Image className='logos' src={require('../../images/js-logo.png')} alt='' width={80} height={80} />
        <Image className='logos' src={require('../../images/git-logo.png')} alt='' width={85} height={85} />
      </div>
      
      
    </div>
  )
}

export default Skills