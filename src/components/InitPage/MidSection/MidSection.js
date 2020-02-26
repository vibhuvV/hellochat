import React from "react";

class MidSection extends React.Component {
  render() {
    return (
      <section className="sec2">
        <div className="container">
          <h3 className="text-center font-weight-bold">
            Made to transfer stuff locally.
          </h3>
          <div className="text-center">
            Now send files from one hostel to another without any internet
            connection.
          </div>
          <div className="row">
            {this.props.children}
            {/* <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">
                    <i className="fas fa-power-off    "></i> &nbsp; Offline
                  </h3>
                  <p className="card-text">
                    TransferX allows you to transfer the data even when you
                    are
                    offline.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">
                    <i className="fas fa-rocket    "></i> &nbsp; Fast
                  </h3>
                  <p className="card-text">
                    Data transfer rate is very high as it uses your local
                    network.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">
                    <i className="fas fa-user-friends    "></i> &nbsp; Users
                  </h3>
                  <p className="card-text">
                    Send files to particular user and other users can't even
                    see without your
                    permissions.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default MidSection;
