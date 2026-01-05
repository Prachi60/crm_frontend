
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaPen, FaTrash } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";

// const Employ = () => {
//   const [employ, setEmploy] = useState([]);

//   const [newEmploy, setNewEmploy] = useState({
//     companyName: "",
//     email: "",
//     phone: "",
//     position: "",
//     status: "Active",
//     leadsCount: "",
//   });

//   const [editId, setEditId] = useState("");
//   const [editEmploy, setEditEmploy] = useState({});

//   const token = localStorage.getItem("token");


//   const fetchEmployee = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/employ/getemploy`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setEmploy(res.data.data || []);
//     } catch (err) {
//       toast.error("Failed to fetch employees");
//     }
//   };

//   useEffect(() => {
//     fetchEmployee();
//   }, []);

  
//   const handleAdd = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         `${import.meta.env.VITE_API_URL}/employ/registeremploy`,
//         newEmploy,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       toast.success("Employee Added Successfully");
//       setNewEmploy({
//         companyName: "",
//         email: "",
//         phone: "",
//         position: "",
//         status: "Active",
//         leadsCount: "",
//       });

//       fetchEmployee();
//       document.getElementById("closeAddModal").click();
//     } catch (error) {
//       toast.error("Failed to add employee");
//     }
//   };


//   const openEditModal = (employ) => {
//     setEditId(employ._id);
//     setEditEmploy(employ);
//   };

 

 

// const handleUpdate = async (editId) => {
//   try {
//     const payload = {
//       companyName: editEmploy.companyName,
//       email: editEmploy.email,
//       phone: editEmploy.phone,
//       position: editEmploy.position,
//       status: editEmploy.status,
//       leadsCount: Number(editEmploy.leadsCount),
//     };

//     await axios.patch(
//       `${import.meta.env.VITE_API_URL}/employ/updateemploy/${editId}`,
//       payload,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     toast.success("Employee Updated Successfully");
//     fetchEmployee();
//     document.getElementById("closeEditModal")?.click();
//   } catch (err) {
//     console.error(err.response?.data || err);
//     toast.error(err.response?.data?.message || "Update failed");
//   }
// };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure  you want to delete Employee?",
//       // text: "This employee will be deleted!",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       confirmButtonText: "Delete",
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.delete(
//           `${import.meta.env.VITE_API_URL}/employ/deleteemploy/${id}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         fetchEmployee();
//         Swal.fire("Deleted!", "Employee deleted successfully", "success");
//       } catch (err) {
//         toast.error("Delete failed");
//       }
//     }
//   };

//   return (
//     <div className="container-fluid py-4 bg-light vh-100">
//       <div className="d-flex justify-content-between mb-3">
//         <h2>Employee List</h2>
//         <button
//           className="btn text-white d-flex align-items-center gap-2"
//           style={{ background: "red" }}
//           data-bs-toggle="modal"
//           data-bs-target="#addEmployModal"
//         >
//           <FaPlus /> Add Employee
//         </button>
//       </div>

//       <div className="table-responsive bg-white shadow rounded p-3">
//         <table className="table align-middle">
//           <thead className="table-danger">
//             <tr>
//               <th>Sno</th>
//               <th>Company</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Position</th>
//               <th>Number of Leads</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employ.length === 0 ? (
//               <tr>
//                 <td colSpan="8" className="text-center fw-bold">
//                   No Employee found
//                 </td>
//               </tr>
//             ) : (
//               employ.map((employ, index) => (
//                 <tr key={employ._id}>
//                   <td>{index + 1}</td>
//                   <td className=" fw-semibold" style={{color:"red"}}>{employ.companyName}</td>
//                   <td>{employ.email}</td>
//                   <td>{employ.phone}</td>

//                   <td>
//   <span className="">
//     {employ.position}
//   </span>
// </td>

//                   <td>{employ.leadsCount}</td>
//                   {/* <td>{employ.status}</td> */}
//                   <td>
//   <span
//     className={`badge ${
//       employ.status === "Active"
//         ? "bg-success-subtle text-success"
//         : "bg-danger-subtle text-danger"
//     }`}
//   >
//     {employ.status}
//   </span>
// </td>

//                   <td>
//                     <FaPen
//                       className=" me-3 cursor-pointer"
//                       style={{color:"red"}}
//                       data-bs-toggle="modal"
//                       data-bs-target="#editEmployModal"
//                       onClick={() => openEditModal(employ)}
//                     />
//                     <FaTrash
//                       className=" cursor-pointer"
//                       style={{color:"red"}}
//                       onClick={() => handleDelete(employ._id)}
//                     />
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

      
//       <div
//         className="modal fade"
//         id="addEmployModal"
//         tabIndex="-1"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg modal-dialog-centered">
//           <div className="modal-content p-4 rounded-4">
//             <h5 className="fw-bold mb-4">Add Employee</h5>

       
            
//  <form onSubmit={handleAdd}>
//   <div className="row g-3">

//     <div className="col-12">
//       <div className="mb-3">
//         <label htmlFor="companyName" className="form-label">Company</label>
//         <input
//           type="text"
//           className="form-control"
//           id="companyName"
//           placeholder="Enter Company Name"
//           value={newEmploy.companyName}
//           onChange={(e) =>
//             setNewEmploy({ ...newEmploy, companyName: e.target.value })
//           }
//         />
//       </div>
//     </div>

//     <div className="col-md-6">
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           placeholder="Enter email"
//           value={newEmploy.email}
//           onChange={(e) =>
//             setNewEmploy({ ...newEmploy, email: e.target.value })
//           }
//         />
//       </div>
//     </div>

//     <div className="col-md-6">
//       <div className="mb-3">
//         <label htmlFor="phone" className="form-label">Phone Number</label>
//         <input
//           type="text"
//           className="form-control"
//           id="phone"
//           placeholder="Enter phone number"
//           value={newEmploy.phone}
//           onChange={(e) =>
//             setNewEmploy({ ...newEmploy, phone: e.target.value })
//           }
//         />
//       </div>
//     </div>

//     <div className="col-md-6">
//       <div className="mb-3">
//         <label htmlFor="tag" className="form-label">Position</label>
//         <input
//           type="text"
//           className="form-control"
//           id="tag"
//           placeholder="Provide a Position"
//           value={newEmploy.position}
//           onChange={(e) =>
//             setNewEmploy({ ...newEmploy, position: e.target.value })
//           }
//         />
//       </div>
//     </div>

//     <div className="col-md-6">
//       <div className="mb-3">
//         <label htmlFor="status" className="form-label">Status</label>
//         <select
//           className="form-select"
//           id="status"
//           value={newEmploy.status}
//           onChange={(e) =>
//             setNewEmploy({ ...newEmploy, status: e.target.value })
//           }
//         >
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>
//       </div>
//     </div>

//     <div className="col-md-6">
//       <div className="mb-3">
//         <label className="form-label">Number of Leads</label>
//         <input
//           type="leadsCount"
//           className="form-control"
//           value={newEmploy.leadsCount}
//           onChange={(e) =>
//             setNewEmploy({ ...newEmploy, leadsCount: e.target.value })
//           }
//         />
//       </div>
//     </div>

//   </div>

//   <button
//     type="submit"
//     className="btn text-white w-100 mt-4 py-2 fw-semibold"
//     style={{ background: "red" }}
//   >
//     Add Employee
//   </button>
// </form>

   

//      </div>
//    </div>
 

         
//       </div>

//      <div className="modal fade" id="editEmployModal" tabIndex="-1" aria-labelledby="editEmployModalLabel" aria-hidden="true">  <div className="modal-dialog modal-lg modal-dialog-centered">
//     <div className="modal-content p-4 rounded-4">
//       <h5 className="modal-title fw-bold mb-4" id="editEmployModalLabel">Edit Employee</h5>

//       <div className="row g-3">
      
//         <div className="col-12">
          
//           <div className="mb-3">
//             <label htmlFor="editCompany" className="form-label">Company</label>
//             <input
//               type="text"
//               className="form-control"
//               id="editCompany"
//               value={editEmploy.companyName}
//               onChange={(e) => setEditEmploy({ ...editEmploy, companyName: e.target.value })}
//             />
//           </div>
//         </div>

       
//         <div className="col-md-6">
//           <div className="mb-3">
//             <label htmlFor="editEmail" className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="editEmail"
//               value={editEmploy.email}
//                onChange={(e) => setEditEmploy({ ...editEmploy, email: e.target.value })}
//             />
//           </div>
//        </div>

//          <div className="col-md-6">
//            <div className="mb-3">
//              <label htmlFor="editPhone" className="form-label">Phone Number</label>
//              <input
//                type="text"
//                className="form-control"
//                id="editPhone"
//                value={editEmploy.phone}
//                onChange={(e) => setEditEmploy({ ...editEmploy, phone: e.target.value })}
//              />
//            </div>
//         </div>

     

  
//         <div className="col-md-6">
//           <div className="mb-3">
//             <label htmlFor="editTag" className="form-label">Position</label>
//             <input
//               type="text"
//               className="form-control"
//               id="editTag"
//                value={editEmploy.position}
//               onChange={(e) => setEditEmploy({ ...editEmploy, position: e.target.value })}
// />
//           </div>
//         </div>

       
//         <div className="col-md-6">
//            <div className="mb-3">
//             <label htmlFor="editStatus" className="form-label">Status</label>
//             <select
//                className="form-select"
//               id="editStatus"
//         value={editEmploy.status}
//               onChange={(e) => setEditEmploy({ ...editEmploy, status: e.target.value })}
//             >
//               <option value="Active">Active</option>
//                <option value="Inactive">Inactive</option>
          
//              </select>
//           </div>
//         </div>

       
//          <div className="col-md-6">
//          <div className="mb-3">
//              <label htmlFor="editEmployee" className="form-label">No of Leads</label>
           
//              <input
//                type="text"
//                className="form-control"
//               id="editTag"
//               value={editEmploy.leadsCount}
//                onChange={(e) => setEditEmploy({ ...editEmploy, leadsCount: Number(e.target.value) })}
//             />
//            </div>
//         </div>
//        </div>

     
//       <button
//          type="button"
//          className="btn text-white w-100 mt-4 py-2 fw-semibold" style={{background:"red"}}
//         //  onClick={handleUpdate}
//           onClick={() => handleUpdate(editId)}
//        >
//          Edit Employee 
//        </button>
//      </div>
//    </div>
//  </div>

//    </div>
//   );
// };

// export default Employ;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPen, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Employ = () => {
  const [employ, setEmploy] = useState([]);

  const [newEmploy, setNewEmploy] = useState({
    companyName: "",
    email: "",
    phone: "",
    position: "",
    status: "Active",
    leadsCount: "",
  });

  const [editId, setEditId] = useState("");
  const [editEmploy, setEditEmploy] = useState({
    companyName: "",
    email: "",
    phone: "",
    position: "",
    status: "Active",
    leadsCount: "",
  });

  const token = localStorage.getItem("token");

  // Fetch employees
  const fetchEmployee = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/employ/getemploy`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEmploy(res.data.data || []);
    } catch (err) {
      console.error("Fetch Employee Error:", err.response || err.message);
      toast.error("Failed to fetch employees");
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  // Add employee
  const handleAdd = async (e) => {
    e.preventDefault();

    const payload = {
      ...newEmploy,
      leadsCount: Number(newEmploy.leadsCount) || 0,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/employ/registeremploy`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Employee Added Successfully");

      setNewEmploy({
        companyName: "",
        email: "",
        phone: "",
        position: "",
        status: "Active",
        leadsCount: "",
      });

      fetchEmployee();
      document.getElementById("closeAddModal")?.click();
    } catch (error) {
      console.error("Add Employee Error:", error.response || error.message);
      toast.error(error.response?.data?.message || "Failed to add employee");
    }
  };

  // Open edit modal
  const openEditModal = (emp) => {
    setEditId(emp._id);
    setEditEmploy({
      companyName: emp.companyName || "",
      email: emp.email || "",
      phone: emp.phone || "",
      position: emp.position || "",
      status: emp.status || "Active",
      leadsCount: emp.leadsCount?.toString() || "",
    });
  };

  // Update employee
  const handleUpdate = async (id) => {
    const payload = {
      companyName: editEmploy.companyName,
      email: editEmploy.email,
      phone: editEmploy.phone,
      position: editEmploy.position,
      status: editEmploy.status,
      leadsCount: Number(editEmploy.leadsCount) || 0,
    };

    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/employ/updateemploy/${id}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Employee Updated Successfully");
      fetchEmployee();
      document.getElementById("closeEditModal")?.click();
    } catch (error) {
      console.error("Update Employee Error:", error.response || error.message);
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  // Delete employee
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure you want to delete this employee?",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/employ/deleteemploy/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        fetchEmployee();
        Swal.fire("Deleted!", "Employee deleted successfully", "success");
      } catch (error) {
        console.error("Delete Employee Error:", error.response || error.message);
        toast.error("Delete failed");
      }
    }
  };

  return (
    <div className="container-fluid py-4 bg-light vh-100">
      <div className="d-flex justify-content-between mb-3">
        <h2>Employee List</h2>
        <button
          className="btn text-white d-flex align-items-center gap-2"
          style={{ background: "red" }}
          data-bs-toggle="modal"
          data-bs-target="#addEmployModal"
        >
          <FaPlus /> Add Employee
        </button>
      </div>

      <div className="table-responsive bg-white shadow rounded p-3">
        <table className="table align-middle">
          <thead className="table-danger">
            <tr>
              <th>Sno</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>
              <th>Number of Leads</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employ.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center fw-bold">
                  No Employee found
                </td>
              </tr>
            ) : (
              employ.map((emp, index) => (
                <tr key={emp._id}>
                  <td>{index + 1}</td>
                  <td className="fw-semibold " style={{color:"red"}}>{emp.companyName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.position}</td>
                  <td>{emp.leadsCount}</td>
                  <td>
                    <span
                      className={`badge ${
                        emp.status === "Active"
                          ? "bg-success-subtle text-success"
                          : "bg-danger-subtle text-danger"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td>
                    <FaPen
                      className="me-3 cursor-pointer"
                      style={{color:"red"}}
                      data-bs-toggle="modal"
                      data-bs-target="#editEmployModal"
                      onClick={() => openEditModal(emp)}
                    />
                    <FaTrash
                      className="cursor-pointer"
                      style={{color:"red"}}
                      onClick={() => handleDelete(emp._id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Employee Modal */}
      <div className="modal fade" id="addEmployModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-4 rounded-4">
            <h5 className="fw-bold mb-4">Add Employee</h5>
            <form onSubmit={handleAdd}>
              <div className="row g-3">
                <div className="col-12">
                  <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyName"
                      placeholder="Enter Company Name"
                      value={newEmploy.companyName}
                      onChange={(e) =>
                        setNewEmploy({ ...newEmploy, companyName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={newEmploy.email}
                      onChange={(e) =>
                        setNewEmploy({ ...newEmploy, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone number"
                      value={newEmploy.phone}
                      onChange={(e) =>
                        setNewEmploy({ ...newEmploy, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="position" className="form-label">Position</label>
                    <input
                      type="text"
                      className="form-control"
                      id="position"
                      placeholder="Provide a Position"
                      value={newEmploy.position}
                      onChange={(e) =>
                        setNewEmploy({ ...newEmploy, position: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                      className="form-select"
                      id="status"
                      value={newEmploy.status}
                      onChange={(e) =>
                        setNewEmploy({ ...newEmploy, status: e.target.value })
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Number of Leads</label>
                    <input
                      type="number"
                      className="form-control"
                      value={newEmploy.leadsCount}
                      onChange={(e) =>
                        setNewEmploy({ ...newEmploy, leadsCount: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn text-white w-100 mt-4 py-2 fw-semibold"
                style={{ background: "red" }}
              >
                Add Employee
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Edit Employee Modal */}
      <div className="modal fade" id="editEmployModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-4 rounded-4">
            <h5 className="modal-title fw-bold mb-4">Edit Employee</h5>

            <div className="row g-3">
              <div className="col-12">
                <div className="mb-3">
                  <label htmlFor="editCompany" className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editCompany"
                    value={editEmploy.companyName}
                    onChange={(e) =>
                      setEditEmploy({ ...editEmploy, companyName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="editEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="editEmail"
                    value={editEmploy.email}
                    onChange={(e) =>
                      setEditEmploy({ ...editEmploy, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="editPhone" className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editPhone"
                    value={editEmploy.phone}
                    onChange={(e) =>
                      setEditEmploy({ ...editEmploy, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="editPosition" className="form-label">Position</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editPosition"
                    value={editEmploy.position}
                    onChange={(e) =>
                      setEditEmploy({ ...editEmploy, position: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="editStatus" className="form-label">Status</label>
                  <select
                    className="form-select"
                    id="editStatus"
                    value={editEmploy.status}
                    onChange={(e) =>
                      setEditEmploy({ ...editEmploy, status: e.target.value })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="editLeads" className="form-label">No of Leads</label>
                  <input
                    type="number"
                    className="form-control"
                    id="editLeads"
                    value={editEmploy.leadsCount}
                    onChange={(e) =>
                      setEditEmploy({ ...editEmploy, leadsCount: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn text-white w-100 mt-4 py-2 fw-semibold"
              style={{ background: "red" }}
              onClick={() => handleUpdate(editId)}
            >
              Edit Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employ;