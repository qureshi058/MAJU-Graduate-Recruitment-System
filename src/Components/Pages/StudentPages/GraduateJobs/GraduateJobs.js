import React from 'react'

import Navbar from '../StudentNavbar/StudentNavbar'
import GraduateJobsContainer from '../../../Containers/Student_Container/GraduateJobsContainer/GraduateJobsContainer'
import GraduateJobsData from '../../../../StudentWholeData/GraduateJobsData/GraduateJobsData'

import './GraduateJobs.css'


function GraduateJobs(props) {
    return (
        <div className="student__dashboard">
        <Navbar/>
        <h3 className="heading-for-reg-comp">Graduate Jobs</h3>
        {GraduateJobsData.map((student)=>
          (
            <div className="student__containera"  key={student.id}>
            <GraduateJobsContainer 
            image={student.image}
            name={student.name}
            description={student.description}
            description2={student.description2}
            description3={student.description3}
            description4={student.description4}
            button="View Profile"
            />
            
            </div>
        ))}
        
    </div>
    )
}

export default GraduateJobs
