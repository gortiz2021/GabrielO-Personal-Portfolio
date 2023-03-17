import React from 'react'
import Image from 'react-bootstrap/Image'

const Skills = () => {
  return (
    <div>

      <h1>Skills</h1>

      <Image src={require('../../images/java-logo.png')} alt='' width={100} height={100} />
      <Image src={require('../../images/react-logo.png')} alt='' width={100} height={100} />
      <Image src={require('../../images/springboot-logo.png')} alt='' width={100} height={100} />
      <Image src={require('../../images/aws-logo.png')} alt='' width={100} height={100} />
      <Image src={require('../../images/mysql-logo.png')} alt='' width={100} height={100} />
      <Image src={require('../../images/html-logo.png')} alt='' width={100} height={100} />
      <Image src={require('../../images/css-logo.png')} alt='' width={100} height={100} />
      <Image src={require('../../images/js-logo.png')} alt='' width={100} height={100} />
      <Image src={require('../../images/git-logo.png')} alt='' width={100} height={100} />
      
    </div>
  )
}

export default Skills