import React from 'react'

import Navbar from '../StudentNavbar/StudentNavbar'
import StudentContainer from '../../../Containers/Student_Container/StudentContainer/StudentContainer'
import Student_Data from '../../../../StudentWholeData/Companies/CompaniesData'

import './Companies.css'


function Companies(props) {
    return (
        <div className="student__dashboard">
        <Navbar/>
        <h3 className="heading-for-reg-comp">Registered Companies</h3>
        {Student_Data.map((student)=>
          (
            <div className="student__containera"  key={student.id}>
            <StudentContainer
            image={student.image}
            name={student.name}
            description={student.description}
            button="View Profile"
            />
            
            </div>
        ))}
        
    </div>
    )
}

export default Companies
