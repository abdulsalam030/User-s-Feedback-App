import React from 'react'
import Card from '../components/shared/Card';
import {Link} from 'react-router-dom'


function About() {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>This is a Project for users to leave feedback about our product</p>
            <p>Version 1.0.0</p>
            <p>Powered By React</p>
            <p>
                <Link to='/'>Back To Home</Link>
            </p>

        </div>
    </Card>
  )
}

export default About;