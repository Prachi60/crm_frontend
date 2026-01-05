

import { AiOutlineAppstore } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { ImPhoneHangUp } from "react-icons/im";
import { FaWpforms } from "react-icons/fa6";
import { Link,useLocation } from "react-router-dom";
import Image from "../assets/button_img.png"


const Sidebar = () => {
    const location =useLocation();
  const menuItems = [
    {
      id: "dashboard",
      icon: <AiOutlineAppstore size={25} className="me-2" />,
      label: "Dashboard",
      path:"/dashboard"
      
    },
    {
      id: "Leads",
      icon: <ImPhoneHangUp className="me-2" />,
      label: "Leads",
      path:"/lead"
     
    },
    {
      id: "Employee",
      icon: <FaWpforms className="me-2" />,
      label: "Employee",
      path:"/employee"
      
    },
    {
      id: "Logout",
      icon: <FaGears className="me-2" />,
      label: "Logout",
      path:"/logout"
    },
   
  ];









 const ButtonMenu = ({ item }) => {
  const isActive = location.pathname === item.path;

  return (
    <div className="mb-2">
      <Link to={item.path} className="text-decoration-none">
        <button
          className={`btn w-100 text-start fw-semibold d-flex align-items-center gap-2 ${
            isActive ? "bg-danger bg-opacity-25 text-danger" : ""
          }`}
        >
          {item.icon}
          <span className={isActive ? "text-danger" : "text-muted"}>
            {item.label}
          </span>
        </button>
      </Link>
    </div>
  );
};

  return (
    <div className="container-fluid p-0 w-100 sidebar_section">
      
      <div className="row g-0 w-100">
        <div
          className="col-lg-3 col-xl-2 bg-white vh-100 d-none d-lg-block border-end  w-100"
          style={{ overflowY: "auto" }}
        >
          <div className="p-3">
           
             <div className="side_menu">
    <button
      className="btn text-white fw-semibold rounded-3 mt-4 mb-3 fs-5 d-flex align-items-center gap-2"style={{background:"red"}}
    >
      <img
        src={Image}
        alt="CRM"
        className="img-fluid object-fit-cover"
        width="25"
        height="25"
      />
      Connect CRM
    </button>
  </div>
           
            <div>
  {menuItems.map((item) => (
    <ButtonMenu key={item.id} item={item} />
  ))}
</div>

          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start d-lg-none mt-5"
        id="mobileSidebar"
      >
        <div className="offcanvas-header flex-column align-items-start">
         
          <div className="side_menu">
    <button
      className="btn text-white fw-semibold rounded-3 mt-4 mb-3 fs-5 d-flex align-items-center gap-2"style={{background:"red"}}
    >
      <img
        src={Image}
        alt="CRM"
        className="img-fluid object-fit-cover"
        width="25"
        height="25"
      />
      Connect CRM
    </button>
  </div>
        </div>
        <div className="offcanvas-body p-0 sidebar_section">
          {/* <div className="accordion" id="mobileAccordion">
            {menuItems.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                parentId="mobileAccordion"
              />
            ))}
          </div> */}
          <div>
  {menuItems.map((item) => (
    <ButtonMenu key={item.id} item={item} />
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
