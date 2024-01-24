import React, { useState } from 'react';

const EmpForm = ({ onSubmit }) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = () => {
    if (fName === '' || lName === '' || email === '' || pwd === '') {
      alert('All fields are mandatory.');
    } else {
      onSubmit({ fName, lName, email, pwd });
      clearFields();
    }
  };

  const clearFields = () => {
    setFName('');
    setLName('');
    setEmail('');
    setPwd('');
  };

  return (
    <div className="col-4 mt-lg-5" id="first">
      <input
        type="text"
        className="form-control my-4 border border-primary font-weight-normal form-control-lg"
        value={fName}
        onChange={(e) => setFName(e.target.value)}
        placeholder="Enter Your First Name"
      />
      <input
        type="text"
        className="form-control my-4 border border-primary font-weight-normal form-control-lg"
        value={lName}
        onChange={(e) => setLName(e.target.value)}
        placeholder="Enter Your Last Name"
      />
      <input
        type="email"
        className="form-control my-4 border border-primary font-weight-normal form-control-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
      />
      <input
        type="password"
        className="form-control my-4 border border-primary font-weight-normal form-control-lg"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="Enter Your Password"
      />
      <button type="button" className="btn btn-primary btn-lg my-2" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default EmpForm;
