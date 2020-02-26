import React from "react";

const MidCard = props => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body" style={{ textAlign: "center" }}>
          <h3 className="card-title">
            {/* <i className="fas fa-lock"></i> &nbsp; Secure */}
            {props.title}
          </h3>
          <p
            className="card-text"
            style={{ height: "150px", overflowY: "hidden" }}
          >
            {props.children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidCard;
