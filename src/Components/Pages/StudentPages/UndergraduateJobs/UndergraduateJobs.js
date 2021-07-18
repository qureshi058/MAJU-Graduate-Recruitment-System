import React from 'react'

import Navbar from '../StudentNavbar/StudentNavbar'
import UndergraduateContainer from '../../../Containers/Student_Container/UndergraduateContainer/UndergraduateContainer'
import GraduateJobsData from '../../../../StudentWholeData/GraduateJobsData/GraduateJobsData'

import './UndergraduateJobs.css'


function UndergraduateJobs(props) {
    return (
        <div className="student__dashboard">
        <Navbar/>
        <h3 className="heading-for-reg-comp">Undergraduate Jobs</h3>
        {GraduateJobsData.map((student)=>
          (
            <div className="student__containera"  key={student.id}>
            <UndergraduateContainer 
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

export default UndergraduateJobs
