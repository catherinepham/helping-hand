import React from "react";
import styled from "styled-components";
import Item from "./item";
export {default as useStudentQueue } from "./provider";

const StyledStudentQueue = styled.div`

    marginTop: '0%',
    marginLeft: '25%',
    marginRight: '20%',
    borderRadius: '5px'
    position: fixed;
//   //top: 6000;
//   //right: 3000;
//    width: 700px;
//   //height: 700px;
   //display: flex;
   flex-direction: column;
//   padding-top: 100px;
   padding-left: 250px;
   padding-right: 200px;
    //max-width: 200;
// //   min-width:
   //align-items: center;

  `;

const StudentQueue = ({
    students = [
        {id: "1", type: "info", message: "Student Name", class: "CEN3031"},
        {id: "2", type: "info", message: "Student Name", class: "CEN3031"},
        {id: "3", type: "info", message: "Student Name", class: "CEN3031"},
    ],
    removestudent

 }) => {
     
     return (
         <StyledStudentQueue>
         {students.map((stu) => (
             <Item key={stu.id} student={stu} removestudent={removestudent}/>
         ))}
     </StyledStudentQueue>
     );
};

export default StudentQueue;
