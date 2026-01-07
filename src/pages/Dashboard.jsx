

import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalEmployees: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardStats = async () => {
    try {
          const token = localStorage.getItem("token"); 
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/dashboard/stats`,
        {
          headers: {
          Authorization: `Bearer ${token}`,
        },
        }
      );

      if (res.data.status === 200) {
        setStats(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching dashboard stats", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  return (
    <div className="container-fluid bg-light min-vh-100 px-5">
      <div className="mb-4">
        <h2 className="fs-3 fw-semibold mb-1">CRM Admin Dashboard</h2>
        <span className="text-muted">
          Total number of subadmin in CRM.
        </span>
      </div>

      <div className="row g-4 align-items-stretch">
       
        <div className="col-md-3 col-sm-6">
          <div className="border border-2 bg-white rounded-4 h-100">
            <div className="px-3 py-4 d-flex flex-column">
              <h5 className="fw-semibold">Leads</h5>
              <p className="text-muted mb-2">
                Total number of leads in CRM.
              </p>
              <h2 className="fw-bold mt-auto">
                {loading ? "Loading..." : stats.totalLeads}
              </h2>
            </div>
          </div>
        </div>

      
        <div className="col-md-3 col-sm-6">
          <div className="border border-2 bg-white rounded-4 h-100">
            <div className="px-3 py-4 d-flex flex-column">
              <h5 className="fw-semibold">Employees</h5>
              <p className="text-muted mb-2">
                Total number of employees in CRM.
              </p>
              <h2 className="fw-bold mt-auto">
                {loading ? "Loading..." : stats.totalEmployees}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
