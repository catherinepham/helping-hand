import React, { useState} from "react";


export default function useStudentQueue() {
    const [students, setStudents] = useState([]);

    function addstudent(message, type = 'info'){
        setStudents([{id: " ", type, message}]);
    }
    function removestudent(id){
        setStudents(students.filter((stu) => stu.id != id));
    }
    return { addstudent, removestudent, students};
}