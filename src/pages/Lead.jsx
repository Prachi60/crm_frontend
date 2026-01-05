// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { FaPlus } from "react-icons/fa6";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";



// const Lead = () => {
//   const [leads, setLeads] = useState([]);
//   const [newLead, setNewLead] = useState({
//     company: "",
//     email: "",
//     phone: "",
//     status: "",
//     employee: "",
//     tags: "",
//     image:null
//   });

//   const [editId, setEditId] = useState("");
//   const [editLead, setEditLead] = useState(newLead);
//   const [employ, setEmploy] = useState([]);


//   const token = localStorage.getItem("token");
 

//   useEffect(() => {
//     fetchLeads();
//     fetchEmployee();

    
//   }, []);
//   const fetchEmployee = async () => {
//   try {
//     const res = await axios.get(
//       `${import.meta.env.VITE_API_URL}/employ/getemploy`,
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     setEmploy(res.data.data || []);
//   } catch (err) {
//     toast.error("Failed to fetch employees");
//   }
// };


//   const fetchLeads = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/lead/getAllLeads`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setLeads(res.data.data|| []);
//     } catch (err) {
//       console.log(err);
//     }
//   };

// // const handleAdd = async () => {
// //   try {
// //     const formData = new FormData();

// //     formData.append("company", newLead.company);
// //     formData.append("email", newLead.email);
// //     formData.append("phone", newLead.phone);
// //     formData.append("status", newLead.status);
// //     formData.append("employee", newLead.employee);
// //     formData.append("tags", JSON.stringify(newLead.tags.split(",")));

// //     if (newLead.image) {
// //       formData.append("Image", newLead.image); // ⚠️ backend expects "Image"
// //     }

// //     await axios.post(
// //       `${import.meta.env.VITE_API_URL}/lead/createLead`,
// //       formData,
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "multipart/form-data",
// //         },
// //       }
// //     );

// //     toast.success("Lead Added Successfully");
// //     fetchLeads();
// //     document.getElementById("closeAddModal").click();

// //   } catch (err) {
// //     toast.error("Failed to add lead");
// //   }
// // };
// const handleAdd = async (e) => {
//   e.preventDefault();

//   try {
//     const formData = new FormData();

//     formData.append("company", newLead.company);
//     formData.append("email", newLead.email);
//     formData.append("phone", newLead.phone);
//     formData.append("status", newLead.status);
//     formData.append("employee", newLead.employee);
//     formData.append("tags", JSON.stringify([newLead.tags]));

//     if (newLead.image) {
//       formData.append("Image", newLead.image); // must match backend
//     }

//     await axios.post(
//       `${import.meta.env.VITE_API_URL}/lead/createLead`,
//       formData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     toast.success("Lead Added Successfully");
//     fetchLeads();

//     setNewLead({
//       company: "",
//       email: "",
//       phone: "",
//       status: "",
//       employee: "",
//       tags: "",
//       image: null,
//     });

//     document.getElementById("closeAddModal")?.click();

//   } catch (err) {
//     toast.error("Failed to add lead");
//     console.log(err);
//   }
// };

//   const openEditModal = (lead) => {
//     setEditId(lead._id);
//     setEditLead(lead);
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.patch(
//         `${import.meta.env.VITE_API_URL}/lead/updatelead/${editId}`,
//         editLead,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       toast.success("Lead Updated");
//       fetchLeads();
//       document.getElementById("closeEditModal").click();
//     } catch (err) {
//       toast.error("Update failed");
//     }
//   };

//   const handleDelete = async (id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "This lead will be deleted!",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       confirmButtonText: "Delete",
//     });

//     if (result.isConfirmed) {
//       await axios.delete(
//         `${import.meta.env.VITE_API_URL}/lead/deletelead/${id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       fetchLeads();
//       Swal.fire("Deleted!", "Lead deleted successfully", "success");
//     }
//   };

//   return (
//     <div className="container-fluid py-4 vh-100 bg-light">
//       <div className="d-flex justify-content-between mb-3">
//         <div>
//           <h2>Leads</h2>
//         </div>
//         <button
//           className="btn text-white d-flex align-items-center gap-2"style={{background:"red"}}
//           data-bs-toggle="modal"
//           data-bs-target="#addLeadModal"
//         >
//           <FaPlus /> New Lead
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
//               <th>Image</th>
//               <th>Tags</th>
//               <th>Status</th>
//               <th>Employee</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leads.length === 0 ? (
//               <tr>
//                 <td colSpan="8" className="text-center fw-bold">
//                   No leads found
//                 </td>
//               </tr>
//             ) : (
//               leads.map((lead, index) => (
//                 <tr key={lead._id}>
//                   <td>{index + 1}</td>
//                   <td className="text-danger fw-semibold">
//                     {lead.company}
//                   </td>
//                   <td>{lead.email}</td>
//                   <td>{lead.phone}</td>
                 
//                   <td>
//   {lead.Image ? (
//     <img
//       src={lead.Image}
//       alt="lead"
//       width="50"
//       height="50"
//       className="rounded"
//     />
//   ) : (
//     "No Image"
//   )}
// </td>


// <td>
//   <div className="d-flex flex-column gap-1">
//     {lead.tags?.map((tag, index) => (
//       <span
//         key={index}
//         className="badge   w-fit"
//         style={{border:" 1px solid red",color:"red"}}
//       >
//         {tag}
//       </span>
//     ))}
//   </div>
// </td>


//                <td>
//   <span
//           className="badge   w-fit"
//         style={{border:" 1px solid red",color:"red"}}
//   >
//     {lead.status}
//   </span>
// </td>

//                   <td>{lead?.employee?.companyName || ""}</td>
//                   <td>
//                     <FaEdit
//                       className="text-danger me-3 cursor-pointer"
//                       data-bs-toggle="modal"
//                       data-bs-target="#editLeadModal"
//                       onClick={() => openEditModal(lead)}
//                     />
//                     <FaTrash
//                       className="text-danger cursor-pointer"
//                       onClick={() => handleDelete(lead._id)}
//                     />
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>


// <div className="modal fade" id="addLeadModal" tabindex="-1" aria-labelledby="addLeadModalLabel" aria-hidden="true">
//   <div className="modal-dialog modal-lg modal-dialog-centered">
//     <div className="modal-content p-4 rounded-4">
//       <h5 className="modal-title fw-bold mb-4" id="addLeadModalLabel">Add Lead</h5>

//       <form onSubmit={handleAdd} >
//         <div className="row g-3">
       
//           <div className="col-12">
//             <div className="mb-3">
//               <label htmlFor="company" className="form-label">Company</label>
//               <input
//   type="text"
//   className="form-control"
//   name="company"
//   value={newLead.company}
//   onChange={(e) =>
//     setNewLead({ ...newLead, company: e.target.value })
//   }
// />

//             </div>
//           </div>

        
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label for="email" className="form-label">Email</label>
             
               
//                <input
//   type="email"
//   className="form-control"
//   name="email"
//   value={newLead.email}
//   onChange={(e) =>
//     setNewLead({ ...newLead, email: e.target.value })
//   }
// />

//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="mb-3">
//               <label htmlFor="phone" className="form-label">Phone Number</label>
           

//                <input
//   type="text"
//   className="form-control"
//   name="phone"
//   value={newLead.phone}
//   onChange={(e) =>
//     setNewLead({ ...newLead, phone: e.target.value })
//   }
// />


//             </div>
//           </div>

//           <div className="col-12">
//             <label className="form-label mb-2 d-block">Upload Image</label>
//             <div className="border rounded p-3 d-flex align-items-center gap-3">
            
//        <input
//   type="file"
//   id="leadImage"
//   accept="image/*"
//   className="d-none"
//   onChange={(e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setNewLead({ ...newLead, image: file });
//     }
//   }}
// />

//      <button
//       type="button"
//       className="btn btn-outline-secondary btn-sm"
//       onClick={() => document.getElementById("leadImage").click()}
//     >
//       Choose from gallery
//     </button>
//             </div>
//           </div>

    
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label htmlFor="tag" className="form-label">Tag</label>
         
//    <select
//   className="form-select"
//   value={newLead.tags}
//   onChange={(e) =>
//     setNewLead({ ...newLead, tags: e.target.value })
//   }
// >
//   <option value="Follow Up">Follow Up</option>
//   <option value="Tomorrow">Tomorrow</option>
//   <option value="Hot">Hot</option>
//   <option value="Cold">Cold</option>
//   <option  value="Interested">Interested</option>
// </select>

              
//             </div>
//           </div>

        
//           <div className="col-md-6">
//             <div className="mb-3">
//               <label htmlFor="status" className="form-label">Status</label>
              
//               <select
//   className="form-select"
//   value={newLead.status}
//   onChange={(e) =>
//     setNewLead({ ...newLead, status: e.target.value })
//   }
// >
//   <option value="Contacted">Contacted</option>
//   <option value="New">New</option>
//   <option value="Qualified">Qualified</option>
//   <option value="Lost">Lost</option>
//   <option  value="Converted">Converted</option>
// </select>

//             </div>
//           </div>

   
//           <div class="col-md-6">
//             <div class="mb-3">
//               <label for="employee" class="form-label">Employee</label>
              
            
// <select
//   className="form-select"
//   value={newLead.employee}
//   onChange={(e) =>
//     setNewLead({ ...newLead, employee: e.target.value })
//   }
// >
//   <option value="">Select Employee</option>
//   {employ.map((emp) => (
//     <option key={emp._id} value={emp._id}>
//       {emp.companyName || emp.name}
//     </option>
//   ))}
// </select>


//             </div>
//           </div>
//         </div>

      
//         <button type="submit" class="btn text-white  w-100 mt-4 py-2 fw-semibold" style={{background:"red"}}>
//           Add Lead
//         </button>
//       </form>
//     </div>
//   </div>
// </div>



   
     
// <div className="modal fade" id="editLeadModal" tabIndex="-1" aria-labelledby="editLeadModalLabel" aria-hidden="true">
//   <div className="modal-dialog modal-lg modal-dialog-centered">
//     <div className="modal-content p-4 rounded-4">
//       <h5 className="modal-title fw-bold mb-4" id="editLeadModalLabel">Edit Lead</h5>

//       <div className="row g-3">
      
//         <div className="col-12">
//           <div className="mb-3">
//             <label htmlFor="editCompany" className="form-label">Company</label>
//             <input
//               type="text"
//               className="form-control"
//               id="editCompany"
//               value={editLead.company}
//               onChange={(e) => setEditLead({ ...editLead, company: e.target.value })}
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
//               value={editLead.email}
//               onChange={(e) => setEditLead({ ...editLead, email: e.target.value })}
//             />
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="mb-3">
//             <label htmlFor="editPhone" className="form-label">Phone Number</label>
//             <input
//               type="text"
//               className="form-control"
//               id="editPhone"
//               value={editLead.phone}
//               onChange={(e) => setEditLead({ ...editLead, phone: e.target.value })}
//             />
//           </div>
//         </div>

       
//         <div className="col-12">
//           <label className="form-label mb-2 d-block">Upload Image</label>
//           <div className="border rounded p-3 d-flex align-items-center gap-3">
//             {editLead.image && (
//               <img
//                 src={editLead.image}
//                 alt="Lead"
//                 className="img-fluid rounded"
//                 style={{ maxHeight: "100px" }}
//               />
//             )}
//             <button
//               type="button"
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => document.getElementById('imageUpload').click()}
//             >
//               Choose from gallery
//             </button>
//             <input
//               type="file"
//               id="imageUpload"
//               accept="image/*"
//               style={{ display: "none" }}
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                   const reader = new FileReader();
//                   reader.onload = (event) => {
//                     setEditLead({ ...editLead, image: event.target.result });
//                   };
//                   reader.readAsDataURL(file);
//                 }
//               }}
//             />
//           </div>
//         </div>

  
//         <div className="col-md-6">
//           <div className="mb-3">
//             <label htmlFor="editTag" className="form-label">Tag</label>
//               <select
//   className="form-select"
//   value={editLead.tags}
//   onChange={(e) =>
//     setEditLead({ ...editLead, tags: e.target.value })
//   }
// >
//   <option value="Follow Up">Follow Up</option>
//   <option value="Tomorrow">Tomorrow</option>
//   <option value="Hot">Hot</option>
//   <option value="Cold">Cold</option>
//   <option  value="Interested">Interested</option>
// </select>
//           </div>
//         </div>

       
//         <div className="col-md-6">
//           <div className="mb-3">
//             <label htmlFor="editStatus" className="form-label">Status</label>
//             <select
//               className="form-select"
//               id="editStatus"
//               value={editLead.status}
//               onChange={(e) => setEditLead({ ...editLead, status: e.target.value })}
//             >
//               <option value="Contacted">Contacted</option>
//   <option value="New">New</option>
//   <option value="Qualified">Qualified</option>
//   <option value="Lost">Lost</option>
//   <option  value="Converted">Converted</option>

          
//             </select>
//           </div>
//         </div>

       
//         <div className="col-md-6">
//           <div className="mb-3">
//             <label htmlFor="editEmployee" className="form-label">Employee</label>
//             {/* <select
//               className="form-select"
//               id="editEmployee"
//               value={editLead.employee}
//               onChange={(e) => setEditLead({ ...editLead, employee: e.target.value })}
//             >
//               <option value="Facebook">Facebook</option>
//               <option value="Google">Google</option>
//               <option value="Instagram">Instagram</option>
//             </select> */}
//             <select
//   className="form-select"
//   value={editLead.employee}
//   onChange={(e) =>
//     setEditLead({ ...editLead, employee: e.target.value })
//   }
// >
//   <option value="">Select Employee</option>
//   {employ.map((emp) => (
//     <option key={emp._id} value={emp._id}>
//       {emp.companyName || emp.name}
//     </option>
//   ))}
// </select>
//           </div>
//         </div>
//       </div>

     
//       <button
//         type="button"
//         className="btn text-white w-100 mt-4 py-2 fw-semibold" style={{background:"red"}}
//         onClick={handleUpdate}
//       >
//         Edit Lead
//       </button>
//     </div>
//   </div>
// </div>


//     </div>
//   );
// };

// export default Lead;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPen, FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Lead = () => {
  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState({
    company: "",
    email: "",
    phone: "",
    status: "",
    employee: "",
    tags: "",
    image: null,
  });

  const [editId, setEditId] = useState("");
  const [editLead, setEditLead] = useState(newLead);
  const [employ, setEmploy] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchLeads();
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/employ/getemploy`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEmploy(res.data.data || []);
    } catch (err) {
      toast.error("Failed to fetch employees");
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/lead/getAllLeads`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setLeads(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("company", newLead.company);
      formData.append("email", newLead.email);
      formData.append("phone", newLead.phone);
      formData.append("status", newLead.status);
      formData.append("employee", newLead.employee);
      formData.append("tags", JSON.stringify([newLead.tags]));
      if (newLead.image) formData.append("Image", newLead.image);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/lead/createLead`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Lead Added Successfully");
      fetchLeads();
      setNewLead({
        company: "",
        email: "",
        phone: "",
        status: "",
        employee: "",
        tags: "",
        image: null,
      });
      document.getElementById("closeAddModal")?.click();
    } catch (err) {
      toast.error("Failed to add lead");
      console.log(err);
    }
  };


  const openEditModal = (lead) => {
    setEditId(lead._id);
    setEditLead({
      company: lead.company,
      email: lead.email,
      phone: lead.phone,
      status: lead.status,
      employee: lead.employee?._id || lead.employee || "",
      tags: lead.tags?.[0] || "",
      image: lead.Image || null, 
    });
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("company", editLead.company);
      formData.append("email", editLead.email);
      formData.append("phone", editLead.phone);
      formData.append("status", editLead.status);
      formData.append("employee", editLead.employee);
      formData.append("tags", JSON.stringify([editLead.tags]));
      if (editLead.image instanceof File) formData.append("Image", editLead.image);

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/lead/updatelead/${editId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Lead Updated Successfully");
      fetchLeads();
      document.getElementById("closeEditModal")?.click();
    } catch (err) {
      toast.error("Update failed");
      console.log(err);
    }
  };


  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This lead will be deleted!",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/lead/deletelead/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchLeads();
      Swal.fire("Deleted!", "Lead deleted successfully", "success");
    }
  };

  return (
    <div className="container-fluid py-4 vh-100 bg-light">
   
      <div className="d-flex justify-content-between mb-3">
        <h2>Leads</h2>
        <button
          className="btn text-white d-flex align-items-center gap-2"
          style={{ background: "red" }}
          data-bs-toggle="modal"
          data-bs-target="#addLeadModal"
        >
          <FaPlus /> New Lead
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
              <th>Image</th>
              <th>Tags</th>
              <th>Status</th>
              <th>Employee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center fw-bold">
                  No leads found
                </td>
              </tr>
            ) : (
              leads.map((lead, index) => (
                <tr key={lead._id}>
                  <td>{index + 1}</td>
                  <td className=" fw-semibold" style={{color:"red"}}>{lead.company}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>
                    {lead.Image ? (
                      <img
                        src={lead.Image}
                        alt="lead"
                        width="50"
                        height="50"
                        className="rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>
                    {lead.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="badge"
                        style={{ border: "1px solid red", color: "red", marginRight:"2px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </td>
                  <td>
                    <span className="badge" style={{ border: "1px solid red", color: "red" }}>
                      {lead.status}
                    </span>
                  </td>
                  <td>{lead?.employee?.companyName || ""}</td>
                  <td>
                    <FaPen
                      className="me-3 cursor-pointer"
                      style={{color:"red"}}
                      data-bs-toggle="modal"
                      data-bs-target="#editLeadModal"
                      onClick={() => openEditModal(lead)}
                    />
                    <FaTrash
                      className=" cursor-pointer"
                      style={{color:"red"}}
                      onClick={() => handleDelete(lead._id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    
      <div
        className="modal fade"
        id="addLeadModal"
        tabIndex="-1"
        aria-labelledby="addLeadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-4 rounded-4">
            <h5 className="modal-title fw-bold mb-4" id="addLeadModalLabel">
              Add Lead
            </h5>
            <form onSubmit={handleAdd}>
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newLead.company}
                    onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={newLead.email}
                    onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                  />
                </div>

          
                <div className="col-12">
                  <label className="form-label mb-2">Upload Image</label>
                  <div className="border rounded p-3 d-flex align-items-center gap-3">
                    <input
                      type="file"
                      id="leadImage"
                      accept="image/*"
                      className="d-none"
                      onChange={(e) => setNewLead({ ...newLead, image: e.target.files[0] })}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => document.getElementById("leadImage").click()}
                    >
                      Choose from gallery
                    </button>
                    {newLead.image && (
                      <span>{newLead.image.name}</span>
                    )}
                  </div>
                </div>

             
                <div className="col-md-6">
                  <label className="form-label">Tag</label>
                  <select
                    className="form-select"
                    value={newLead.tags}
                    onChange={(e) => setNewLead({ ...newLead, tags: e.target.value })}
                    required
                  >
                    <option value="">Select Tag</option>
                    <option value="Follow Up">Follow Up</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="Hot">Hot</option>
                    <option value="Cold">Cold</option>
                    <option value="Interested">Interested</option>
                  </select>
                </div>

             
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={newLead.status}
                    onChange={(e) => setNewLead({ ...newLead, status: e.target.value })}
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="Contacted">Contacted</option>
                    <option value="New">New</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Lost">Lost</option>
                    <option value="Converted">Converted</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Employee</label>
                  <select
                    className="form-select"
                    value={newLead.employee}
                    onChange={(e) => setNewLead({ ...newLead, employee: e.target.value })}
                  >
                    <option value="">Select Employee</option>
                    {employ.map((emp) => (
                      <option key={emp._id} value={emp._id}>
                        {emp.companyName || emp.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn text-white w-100 mt-4 py-2"
                style={{ background: "red" }}
              >
                Add Lead
              </button>
            </form>
          </div>
        </div>
      </div>

     
      <div
        className="modal fade"
        id="editLeadModal"
        tabIndex="-1"
        aria-labelledby="editLeadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-4 rounded-4">
            <h5 className="modal-title fw-bold mb-4" id="editLeadModalLabel">
              Edit Lead
            </h5>
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  value={editLead.company}
                  onChange={(e) => setEditLead({ ...editLead, company: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={editLead.email}
                  onChange={(e) => setEditLead({ ...editLead, email: e.target.value })}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={editLead.phone}
                  onChange={(e) => setEditLead({ ...editLead, phone: e.target.value })}
                />
              </div>

            
              <div className="col-12">
                <label className="form-label mb-2">Upload Image</label>
                <div className="border rounded p-3 d-flex align-items-center gap-3">
                  {editLead.image && (
                    <img
                      src={
                        editLead.image instanceof File
                          ? URL.createObjectURL(editLead.image)
                          : editLead.image
                      }
                      alt="Lead"
                      className="img-fluid rounded"
                      style={{ maxHeight: "100px" }}
                    />
                  )}
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => document.getElementById("editImage").click()}
                  >
                    Choose from gallery
                  </button>
                  <input
                    type="file"
                    id="editImage"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={(e) =>
                      setEditLead({ ...editLead, image: e.target.files[0] })
                    }
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Tag</label>
                <select
                  className="form-select"
                  value={editLead.tags}
                  onChange={(e) => setEditLead({ ...editLead, tags: e.target.value })}
                >
                  <option value="">Select Tag</option>
                  <option value="Follow Up">Follow Up</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="Hot">Hot</option>
                  <option value="Cold">Cold</option>
                  <option value="Interested">Interested</option>
                </select>
              </div>

            
              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  value={editLead.status}
                  onChange={(e) => setEditLead({ ...editLead, status: e.target.value })}
                >
                  <option value="">Select Status</option>
                  <option value="Contacted">Contacted</option>
                  <option value="New">New</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Lost">Lost</option>
                  <option value="Converted">Converted</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Employee</label>
                <select
                  className="form-select"
                  value={editLead.employee}
                  onChange={(e) => setEditLead({ ...editLead, employee: e.target.value })}
                >
                  <option value="">Select Employee</option>
                  {employ.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.companyName || emp.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="button"
              className="btn text-white w-100 mt-4 py-2"
              style={{ background: "red" }}
              onClick={handleUpdate}
            >
              Update Lead
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lead;