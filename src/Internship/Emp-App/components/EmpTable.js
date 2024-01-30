import React from 'react';
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js';

const EmpTable = ({ empDataArray, deleteEmployee }) => {
  const secret = "@*%12%^%";

  const handleDelete = email => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(email);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your Data has been deleted.',
          icon: 'success'
        });
      }
    });
  };

  return (
    <div className="col-8 mt-lg-5" id="second">
      <table className="table ml-2">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th className="fa fa-trash-o"></th>
          </tr>
        </thead>
        <tbody>
          {empDataArray.map((emp, index) => (
            <tr key={index}>
              <td>{emp.fName}</td>
              <td>{emp.lName}</td>
              <td>{emp.email}</td>
              <td>{CryptoJS.AES.encrypt(emp.pwd, secret).toString()}</td>
              <td><button className="btn btn-delete btn-danger fa fa-trash-o" onClick={() => handleDelete(emp.email)}> </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
