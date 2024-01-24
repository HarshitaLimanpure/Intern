import React, { useState } from 'react';
import EmpForm from './EmpForm';
import EmpTable from './EmpTable';

const EmpApp = () => {
  const [empDataArray, setEmpDataArray] = useState([]);
  const [emaildup, setEmailDup] = useState([]);

  const handleFormSubmit = (empData) => {
    if (emaildup.includes(empData.email)) {
      alert('The email you entered is already registered.');
    } else {
      setEmailDup((prevEmailDup) => [...prevEmailDup, empData.email]);
      setEmpDataArray((prevEmpDataArray) => [...prevEmpDataArray, empData]);
    }
  };

  const handleDelete = (email) => {
    const updatedEmpDataArray = empDataArray.filter((a) => a.email !== email);
    const updatedEmailDup = emaildup.filter((e) => e !== email);
    setEmpDataArray(updatedEmpDataArray);
    setEmailDup(updatedEmailDup);
  };

  return (
    <div className="row">
      <EmpForm onSubmit={handleFormSubmit} />
      <EmpTable empDataArray={empDataArray} onDelete={handleDelete} />
    </div>
  );
};

export default EmpApp;
