import React, { useState } from 'react';
import Swal from 'sweetalert2';

const EmpForm = ({ addEmployee, emaildup }) => {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    pwd: ''
  });

  var handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  var handleSubmit = () => {
    const { fName, lName, email, pwd } = formData;

    if (!fName || !lName || !email || !pwd) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All Fields are mandatory..',
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }

    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emaildup.includes(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The email you entered is already registered'
      });
      return;
    }

    if (pattern.test(email)) {
      addEmployee(formData);
      setFormData({ fName: '', lName: '', email: '', pwd: '' });
      Swal.fire({
        title: 'Employee Data has been stored',
        text: 'You clicked the button!',
        icon: 'success'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Sorry..',
        text: 'please enter a valid email .',
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <div className="col-4 mt-lg-5" id="first">
      <input type="text" className="form-control my-4 border border-primary font-weight-normal form-control-lg" id="fName" value={formData.fName} onChange={handleChange} placeholder="Enter Your First Name" />
      <input type="text" className="form-control my-4 border border-primary font-weight-normal form-control-lg" id="lName" value={formData.lName} onChange={handleChange} placeholder="Enter Your Last Name" />
      <input type="email" className="form-control my-4 border border-primary font-weight-normal form-control-lg" id="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
      <input type="password" className="form-control my-4 border border-primary font-weight-normal form-control-lg" id="pwd" value={formData.pwd} onChange={handleChange} placeholder="Enter Your Password" />
      <button type="submit" className="btn btn-primary btn-lg my-2" onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default EmpForm;
