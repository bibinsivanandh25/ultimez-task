import React from 'react';

const Main = () => {
  const user = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className="bg-[#08295e] p-[50px] flex flex-col items-center gap-5 rounded-[10px] w-full">
      <h1 className="text-center text-2xl text-[#f5f5f5]">Details</h1>
      <table className="border-collapse w-full max-w-full mx-auto">
        <thead className="bg-[#153973] text-white text-center">
          <tr>
            <th className="py-3">Full Name</th>
            <th>Username</th>
            <th>Country</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Referral ID</th>
          </tr>
        </thead>
        <tbody className="bg-[#f5f5f5] text-center">
          <tr>
            <td className="py-3">{user.full_name || 'N/A'}</td>
            <td>{user.username || 'N/A'}</td>
            <td>{user.country_row_id || 'N/A'}</td>
            <td>{user.email_id || 'N/A'}</td>
            <td>{user.mobile_number || 'N/A'}</td>
            <td>{user.referral_id || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
