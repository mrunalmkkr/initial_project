import React, { useEffect, useState } from 'react';
import API from '../api/api';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const res = await API.get('/admin/reports'); // protected admin-only route
      setReports(res.data);
    };
    fetchReports();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Reported Content</h2>
      {reports.map((report, index) => (
        <div key={index} className="border p-3 mb-2 rounded">
          <p><strong>Reason:</strong> {report.reason}</p>
          <a href={report.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Reported URL</a>
          <p className="text-sm text-gray-500">By user: {report.reportedBy.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Reports;
