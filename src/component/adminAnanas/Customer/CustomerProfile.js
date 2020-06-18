import React from "react";

const CustomerProfile = () => {
  return (
    <div
      className="modal fade"
      id="customerprofile"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
