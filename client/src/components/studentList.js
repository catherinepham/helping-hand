import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Student = (props) => (
  <tr>
    <td>{props.student.name}</td>
    <td>{props.student.classcode}</td>
    <td>{props.student.teacher}</td>
    <td>{props.student.time}</td>
    <td>
      {/* <Link className="btn btn-link" to={`/edit/${props.student._id}`}>Edit</Link> | */}
      <button className="btn btn-link"
        onClick={() => {
          props.deleteStudent(props.student._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function StudentList() {
  const [students, setStudents] = useState([]);

  // This method fetches the students from the database.
  useEffect(() => {
    async function getStudents() {
      const response = await fetch(`http://localhost:5000/student/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const students = await response.json();
      setStudents(students);
    }

    getStudents();

    return; 
  }, [students.length]);

  // This method will delete a student
  async function deleteStudent(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE"
    });

    const newStudents = students.filter((el) => el._id !== id);
    setStudents(newStudents);
  }

  // This method will map out the students on the table
  function studentList() {
    return students.map((student) => {
      return (
        <Student
          student={student}
          deleteStudent={() => deleteStudent(student._id)}
          key={student._id}
        />
      );
    });
  }

  // This following section will display the table with the students of individuals.
  return (
    <div>
      <h3 style={StyleT}>Student Queue</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class Code</th>
            <th>Teacher</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{studentList()}</tbody>
      </table>
    </div>
  );
}

const StyleT = {
  
  fontSize: '25px',
  marginTop: '3%',
  marginLeft: '40%',
  marginRight: '40%',
  borderRadius: '5px'

}