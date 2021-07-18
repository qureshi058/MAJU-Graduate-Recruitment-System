import React from 'react'
import StudentContainer from '../../Containers/StudentContainer/StudentContainer'
import StudentData from '../../../Data/StudentData'
import './StudentDashoboard.css'


function StudentDashboard(props) {
    return (
        <div className="student__dashboard">
        {StudentData.map((student)=>
        (
            <div className="student__containera"  key={student.id}>
            <StudentContainer
            image={student.image}
            name={student.name}
            description={student.description}
            button="View Details"
            />
            
            </div>
        ))}
        
    </div>
    )
}

export default StudentDashboard
