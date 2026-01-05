
import React from "react";
import { MdOutlineSegment } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import { ImUser } from "react-icons/im";


const Header = () => {
 

  return (
    <>
 
      <nav className="navbar bg-light px-3 py-4">
        <div className="container-fluid d-flex align-items-center gap-3">

         
          <button
            className="btn btn-light p-2 d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
          >
            <MdOutlineSegment size={22} />
          </button>

     
        
          <div className="flex-grow-1 d-none d-lg-flex ">
  <div className="input-group" style={{ maxWidth: "520px" }}>
    <input
      type="text"
      className="form-control border-end-0  px-4"
      placeholder="Search"
    />
    <span className="input-group-text bg-white border-start-0  pe-3">
      <FiSearch size={18} className="text-muted" />
    </span>
  </div>
</div>


         
          <div className="d-flex align-items-center gap-2 border bg-white rounded px-3 py-1">
            <span className="fw-semibold">Admin </span>
            <div
              className="rounded-circle text-white bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center"
      
            >
              <ImUser size={30}/> 
            </div>
          </div>

        </div>
      </nav>


      

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body p-0">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Header;
