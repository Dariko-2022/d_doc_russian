import React from "react";
import { NavLink } from "react-router-dom";

const AdminContentNavbar = () => {
  return (
    <>
      <li className="nav-item" style={{ marginLeft: "20px" }}>
        <NavLink exact to="/super_admin_sozlamalar" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
          <i className="icon-stack2 mr-1"></i> Bo'lim
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/super_admin_lavozim" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
          <i className="icon-user-tie mr-1"></i> Lavozim
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/super_admin_foydalanuvchi" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
          <i className="icon-user mr-1"></i> Foydalanuvchi
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/super_admin_ish-stoli" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
          <i className="icon-laptop mr-1"></i> Ish Stoli
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/super_admin_fishka" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
          <i className="icon-laptop mr-1"></i> Fishka
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/super_admin_asosiy-banner" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
          <i className="icon-laptop mr-1"></i> Asosiy Banner
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/super_admin_buyruq-banner" className="nav-link ml-2d-flex align-items-center" activeClassName="NavLinkLi">
          <i className="icon-laptop mr-1"></i> Buyruq Banner
        </NavLink>
      </li>
    </>
  )
}

export default React.memo(AdminContentNavbar);