import React from 'react'

import CompnayNavbar from '../CompnayNavbar/CompnayNavbar'
import CompanyContainer from '../../../Containers/CompanyContainer/Company_Container/CompanyContainer'
import Student_Data from '../../../CompanyWholeData/StudentData'

import './Students.css'


function Students(props) {
    return (
        <div className="company__dashboard">
        <CompnayNavbar/>
        <h3 className="heading-for-reg-comp">Students</h3>
        <div className="company-whole-container">
        {Student_Data.map((student)=>
          (
              <div className="company-container"  key={student.id}>
              <CompanyContainer
              image={student.image}
              name={student.name}
              description={student.description}
              button="View Profile"
              />
              
              </div>
              ))}
              </div>
        
    </div>
    )
}

export default Students


