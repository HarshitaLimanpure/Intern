import React from 'react';

const EmpTable = ({ empDataArray, onDelete }) => {
  return (
    <div className="col-8 mt-lg-5" id="second ">
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
          {empDataArray.map((a) => (
            <tr key={a.email}>
              <td>{a.fName}</td>
              <td>{a.lName}</td>
              <td>{a.email}</td>
              <td>{a.pwd}</td>
              <td>
                <button className="btn btn-delete btn-danger fa fa-trash-o" onClick={() => onDelete(a.email)}>
                  {/* Pass email as a parameter to onDelete */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
