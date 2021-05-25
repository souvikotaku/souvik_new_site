import React, { useState } from "react";
import { Divider } from "antd";
import SimpleBar from "simplebar-react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBoxOpen,
  faChartPie,
  faCog,
  faFileAlt,
  faHandHoldingUsd,
  faSignOutAlt,
  faTable,
  faTimes,
  faUsers,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  Badge,
  Image,
  Button,
  Dropdown,
  Accordion,
  Navbar,
} from "@themesberg/react-bootstrap";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { Routes } from "../routes";
import ThemesbergLogo from "../assets/img/themesberg.svg";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button
            as={Nav.Link}
            className="d-flex justify-content-between align-items-center"
          >
            <span>
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">{children}</Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const {
      title,
      link,
      external,
      target,
      icon,
      image,
      badgeText,
      badgeBg = "secondary",
      badgeColor = "primary",
    } = props;
    const classNames = badgeText
      ? "d-flex justify-content-start align-items-center justify-content-between"
      : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? (
              <span className="sidebar-icon">
                <FontAwesomeIcon icon={icon} />{" "}
              </span>
            ) : null}
            {image ? (
              <Image
                src={image}
                width={20}
                height={20}
                className="sidebar-icon svg-icon"
              />
            ) : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge
              pill
              bg={badgeBg}
              text={badgeColor}
              className="badge-md notification-count ms-2"
            >
              {badgeText}
            </Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar
        expand={false}
        collapseOnSelect
        // variant="dark"
        className="navbar-theme-primary px-4 d-md-none"
      >
        <Navbar.Brand
          className="me-lg-5"
          as={Link}
          to={Routes.DashboardOverview.path}
        >
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle
          as={Button}
          aria-controls="main-navbar"
          onClick={onCollapse}
        >
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar
          className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}
        >
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image
                    src={ProfilePicture}
                    className="card-img-top rounded-circle border-white"
                  />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button
                    as={Link}
                    variant="secondary"
                    size="xs"
                    to={Routes.Signin.path}
                    className="text-dark"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />{" "}
                    Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link
                className="collapse-close d-md-none"
                onClick={onCollapse}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              {/* <NavItem
                title="Volt React"
                link={Routes.Presentation.path}
                image={ReactHero}
              /> */}

              {/* <NavItem
                title="Overview"
                link={Routes.DashboardOverview.path}
                icon={faChartPie}
              />
              <NavItem
                title="Transactions"
                icon={faHandHoldingUsd}
                link={Routes.Transactions.path}
              />
              <NavItem
                title="Settings"
                icon={faCog}
                link={Routes.Settings.path}
              /> */}
              <div>
                <img
                  style={{ width: "40px", marginTop: "-0.9rem" }}
                  src={process.env.PUBLIC_URL + "/jiologo.png"}
                  alt="image"
                />
                &nbsp;&nbsp;
                <span
                  style={{
                    color: "grey",
                    fontSize: "40px",
                  }}
                >
                  |
                </span>
                &nbsp;&nbsp;
                <p
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                    marginTop: "-2.5rem",
                    marginLeft: "5rem",
                  }}
                >
                  DEVELOPERS
                </p>
              </div>

              <hr></hr>
              <div>
                <FontAwesomeIcon icon={faUsers} style={{ color: "#1e90ff" }} />{" "}
                <span style={{ color: "#1e90ff" }}>Hello! Tushar</span>
              </div>
              <CollapsableNavItem
                eventKey="dashboard/"
                title="All Projects (3)"
                // icon={faTable}
              >
                {/* <NavItem
                  title="Summary Dashboard"
                  link={Routes.SummaryDashboard.path}
                />
                <NavItem
                  title="Admin Dashboard"
                  link={Routes.AdminDashboard.path}
                />
                <NavItem
                  title="User Dashboard"
                  link={Routes.UserDashboard.path}
                /> */}
              </CollapsableNavItem>
              <hr></hr>

              {/* <CollapsableNavItem
                eventKey="inventory/"
                title="Inventory"
                icon={faTable}
              >
                <NavItem title="Stock Update" link={Routes.StockUpdate.path} />
                <NavItem title="Add Product" link={Routes.AddProduct.path} />
                <NavItem title="Category" link={Routes.Category.path} />
                <NavItem title="Subcategory" link={Routes.Subcategory.path} />
                <NavItem
                  title="Locality Products"
                  link={Routes.LocalityProducts.path}
                />
                <NavItem
                  title="Product Brand"
                  link={Routes.ProductBrand.path}
                />
              </CollapsableNavItem> */}

              <NavItem
                title="Overview"
                icon={faTable}
                link={Routes.Overview.path}
              />

              <NavItem
                title="My Team"
                icon={faUsers}
                link={Routes.Customer.path}
              />

              {/* <NavItem
                title="Order Sheet"
                icon={faCog}
                link={Routes.OrderSheet.path}
              />

              <NavItem title="Offers" icon={faCog} link={Routes.Offers.path} />

              <NavItem
                title="Delivery Status"
                icon={faCog}
                link={Routes.DeliveryStatus.path}
              />

              <NavItem
                title="Payments"
                icon={faCog}
                link={Routes.Payments.path}
              /> */}

              {/* <NavItem
                title="Building Locality"
                icon={faCog}
                link={Routes.BuildingLocality.path}
              />

              <NavItem
                title="Vendor Delivery Boy"
                icon={faCog}
                link={Routes.VendorDeliveryBoy.path}
              /> */}

              {/* <CollapsableNavItem
                eventKey="tables/"
                title="Tables"
                icon={faTable}
              >
                <NavItem
                  title="Bootstrap Table"
                  link={Routes.BootstrapTables.path}
                />
              </CollapsableNavItem>

              <CollapsableNavItem
                eventKey="examples/"
                title="Page Examples"
                icon={faFileAlt}
              >
                <NavItem title="Sign In" link={Routes.Signin.path} />
                <NavItem title="Sign Up" link={Routes.Signup.path} />
                <NavItem
                  title="Forgot password"
                  link={Routes.ForgotPassword.path}
                />
                <NavItem
                  title="Reset password"
                  link={Routes.ResetPassword.path}
                />
                <NavItem title="Lock" link={Routes.Lock.path} />
                <NavItem title="404 Not Found" link={Routes.NotFound.path} />
                <NavItem
                  title="500 Server Error"
                  link={Routes.ServerError.path}
                />
              </CollapsableNavItem> */}

              {/* <NavItem
                external
                title="Plugins"
                link="https://demo.themesberg.com/volt-pro-react/#/plugins/charts"
                target="_blank"
                badgeText="Pro"
                icon={faChartPie}
              />

              <Dropdown.Divider className="my-3 border-indigo" />

              <CollapsableNavItem
                eventKey="documentation/"
                title="Getting Started"
                icon={faBook}
              >
                <NavItem title="Overview" link={Routes.DocsOverview.path} />
                <NavItem title="Download" link={Routes.DocsDownload.path} />
                <NavItem
                  title="Quick Start"
                  link={Routes.DocsQuickStart.path}
                />
                <NavItem title="License" link={Routes.DocsLicense.path} />
                <NavItem
                  title="Folder Structure"
                  link={Routes.DocsFolderStructure.path}
                />
                <NavItem title="Build Tools" link={Routes.DocsBuild.path} />
                <NavItem title="Changelog" link={Routes.DocsChangelog.path} />
              </CollapsableNavItem>
              <CollapsableNavItem
                eventKey="components/"
                title="Components"
                icon={faBoxOpen}
              >
                <NavItem title="Accordion" link={Routes.Accordions.path} />
                <NavItem title="Alerts" link={Routes.Alerts.path} />
                <NavItem title="Badges" link={Routes.Badges.path} />
                <NavItem
                  external
                  title="Widgets"
                  link="https://demo.themesberg.com/volt-pro-react/#/components/widgets"
                  target="_blank"
                  badgeText="Pro"
                />
                <NavItem title="Breadcrumbs" link={Routes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={Routes.Buttons.path} />
                <NavItem title="Forms" link={Routes.Forms.path} />
                <NavItem title="Modals" link={Routes.Modals.path} />
                <NavItem title="Navbars" link={Routes.Navbars.path} />
                <NavItem title="Navs" link={Routes.Navs.path} />
                <NavItem title="Pagination" link={Routes.Pagination.path} />
                <NavItem title="Popovers" link={Routes.Popovers.path} />
                <NavItem title="Progress" link={Routes.Progress.path} />
                <NavItem title="Tables" link={Routes.Tables.path} />
                <NavItem title="Tabs" link={Routes.Tabs.path} />
                <NavItem title="Toasts" link={Routes.Toasts.path} />
                <NavItem title="Tooltips" link={Routes.Tooltips.path} />
              </CollapsableNavItem> */}
              {/* <NavItem
                external
                title="Themesberg"
                link="https://themesberg.com"
                target="_blank"
                image={ThemesbergLogo}
              /> */}
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
