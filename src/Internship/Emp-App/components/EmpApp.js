import React, { useState } from 'react';
import EmpForm from './EmpForm';
import EmpTable from './EmpTable';

const EmpApp = () => {
  const [empDataArray, setEmpDataArray] = useState([]);
  const [emaildup, setEmaildup] = useState([]);

  const addEmployee = (empData) => {
    setEmpDataArray([...empDataArray, empData]);
    setEmaildup([...emaildup, empData.email]);
  };

  const deleteEmployee = (email) => {
    setEmpDataArray(empDataArray.filter(emp => emp.email !== email));
    setEmaildup(emaildup.filter(e => e !== email));
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <EmpForm addEmployee={addEmployee} emaildup={emaildup} />
        <EmpTable empDataArray={empDataArray} deleteEmployee={deleteEmployee} />
      </div>
    </div>
  );
};

export default EmpApp;
