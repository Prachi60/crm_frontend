import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/", { replace: true });
  };

  const handleCancel = () => {
    setShow(false);
    navigate(-1);
  };

  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-4 rounded-4">

            <div className="modal-body">
              <h5 className="fw-semibold mb-4">
                Are You Sure Want To <br /> Log Out?
              </h5>

              <button
                className="btn text-white w-100 mb-3" style={{background:"red"}}
                onClick={handleLogout}
              >
                Log Out
              </button>

              <button
                className="btn btn-dark w-100"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default Logout;
