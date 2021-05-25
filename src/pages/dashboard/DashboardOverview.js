import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faNetworkWired,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Button,
  Dropdown,
  ButtonGroup,
} from "@themesberg/react-bootstrap";

import "./DashboardOverview.css";

// import {
//   CounterWidget,
//   CircleChartWidget,
//   BarChartWidget,
//   TeamMembersWidget,
//   ProgressTrackWidget,
//   RankingWidget,
//   SalesValueWidget,
//   SalesValueWidgetPhone,
//   AcquisitionWidget,
// } from "../../components/Widgets";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <p style={{ fontSize: "30px", color: "#1e90ff", fontWeight: "bold" }}>
          Overview
        </p>
        {/* <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
            </Dropdown.Item>
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview Security
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Upgrade to Pro
            </Dropdown.Item>
          </Dropdown.Menu>
        */}

        <button
          className="btn btn-primary btn-sm"
          style={{
            borderRadius: "25px",
            backgroundColor: "#1e90ff",
            border: "1px solid #1e90ff",
          }}
        >
          Create New Project
        </button>
        {/* <Button variant="outline-primary" size="sm">
            Export
          </Button> */}
      </div>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        {" "}
        <div
          className="row"
          style={{
            backgroundColor: "#202020",
            paddingBottom: "0.7rem",
            paddingTop: "10px",
            borderRadius: "10px",
            marginTop: "-1.5rem",
          }}
        >
          <p style={{ color: "#87cefa", fontWeight: "bold" }}>
            All Projects (3)
          </p>
          <div className="col-sm-3">
            <div
              className="card"
              style={{
                backgroundColor: "#202020",
                borderRadius: "3px",
                border: "dotted #383838 3px",
                height: "90%",
              }}
            >
              <div className="card-body">
                <div
                  style={{
                    marginTop: "20%",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="bell-shake"
                      style={{ color: "#A8A8A8" }}
                    />
                  </div>

                  {/* <h5 className="card-title">Special</h5> */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ color: "#A8A8A8" }} className="card-text">
                      Create New Project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="card"
              style={{
                backgroundColor: "#383838",
                borderRadius: "3px",
                height: "90%",
              }}
            >
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faNetworkWired}
                  // className="bell-shake"
                  style={{ color: "#A8A8A8", fontSize: "30px" }}
                />
                <p className="card-title" style={{ color: "white" }}>
                  Education <br />
                  <span style={{ color: "#A8A8A8", fontSize: "12px" }}>
                    Created Date: 24 Jan 2021
                  </span>
                </p>
                <hr style={{ color: "#A8A8A8" }}></hr>
                <p style={{ color: "#87cefa", fontWeight: "bold" }}>
                  Total Apps
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{
                    color: "#A8A8A8",
                    float: "right",
                    marginTop: "-2.3rem",
                  }}
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>

                {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="card"
              style={{
                backgroundColor: "#383838",
                borderRadius: "3px",
                height: "90%",
              }}
            >
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faNetworkWired}
                  // className="bell-shake"
                  style={{ color: "#A8A8A8", fontSize: "30px" }}
                />
                <p className="card-title" style={{ color: "white" }}>
                  Project Name <br />
                  <span style={{ color: "#A8A8A8", fontSize: "12px" }}>
                    Created Date: 24 Jan 2021
                  </span>
                </p>
                <hr style={{ color: "#A8A8A8" }}></hr>
                <p style={{ color: "#F67B50", fontWeight: "bold" }}>
                  Upload DEA file
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{
                    color: "#A8A8A8",
                    float: "right",
                    marginTop: "-2.3rem",
                  }}
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="card"
              style={{
                backgroundColor: "#383838",
                borderRadius: "3px",
                height: "90%",
              }}
            >
              <div className="card-body">
                <FontAwesomeIcon
                  icon={faNetworkWired}
                  // className="bell-shake"
                  style={{ color: "#A8A8A8", fontSize: "30px" }}
                />
                <p className="card-title" style={{ color: "white" }}>
                  New Project <br />
                  <span style={{ color: "#A8A8A8", fontSize: "12px" }}>
                    Created Date: 18 Feb 2021
                  </span>
                </p>
                <hr style={{ color: "#A8A8A8" }}></hr>
                <p style={{ color: "#F67B50", fontWeight: "bold" }}>
                  Approval pending
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{
                    color: "#A8A8A8",
                    float: "right",
                    marginTop: "-2.3rem",
                  }}
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        {" "}
        <div
          className="row"
          style={{
            backgroundColor: "#202020",
            paddingBottom: "1.4rem",
            paddingTop: "10px",
            borderRadius: "10px",
            marginTop: "-1.5rem",
            width: "50%",
          }}
        >
          <p style={{ color: "#87cefa", fontWeight: "bold" }}>
            Pending App Approvals (2)
          </p>

          <div className="col-sm-6">
            <div
              className="card"
              style={{ backgroundColor: "#383838", borderRadius: "3px" }}
            >
              <div className="card-body">
                <img
                  style={{ width: "40px" }}
                  src={process.env.PUBLIC_URL + "/greyicon.png"}
                  alt="image"
                />

                <p
                  style={{
                    backgroundColor: "#1e90ff",
                    width: "fit-content",
                    fontSize: "11px",
                    color: "black",
                    fontWeight: "bold",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    float: "right",
                    marginTop: "-0.5rem",
                  }}
                >
                  LEARNING
                </p>
                <p className="card-title" style={{ color: "white" }}>
                  App Name <br />
                  <span style={{ color: "#A8A8A8", fontSize: "12px" }}>
                    Submitted on: 24 Jan 2020
                  </span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{
                    color: "#A8A8A8",
                    float: "right",
                    marginTop: "-2.3rem",
                  }}
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div
              className="card"
              style={{ backgroundColor: "#383838", borderRadius: "3px" }}
            >
              <div className="card-body">
                <img
                  style={{ width: "40px" }}
                  src={process.env.PUBLIC_URL + "/greyicon.png"}
                  alt="image"
                />
                <p
                  style={{
                    backgroundColor: "#4FFFB0",
                    width: "fit-content",
                    fontSize: "11px",
                    color: "black",
                    fontWeight: "bold",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    float: "right",
                    marginTop: "-0.5rem",
                  }}
                >
                  LEARNING
                </p>
                <p className="card-title" style={{ color: "white" }}>
                  App Name <br />
                  <span style={{ color: "#A8A8A8", fontSize: "12px" }}>
                    Submitted on: 24 Jan 2020
                  </span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  style={{
                    color: "#A8A8A8",
                    float: "right",
                    marginTop: "-2.3rem",
                  }}
                  class="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
