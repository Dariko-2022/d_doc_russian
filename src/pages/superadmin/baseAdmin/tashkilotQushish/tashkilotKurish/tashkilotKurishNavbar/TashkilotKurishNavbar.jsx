import React from "react";
import { NavLink } from "react-router-dom";

export default function TashkilotKurishNavbar({ params }) {
  return (
    <>
      <li className="nav-item" style={{ marginLeft: "20px" }}>
        <NavLink exact to={`/super_base_admin_tashkilotlar-tuzilishi/${params}`} className="nav-link" activeClassName='NavLinkLi'>
          <i className="icon-plus2 mr-1"></i> Tashkilot tuzulishi
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={`/super_base_admin-administratsiya/${params}`} className="nav-link" activeClassName='NavLinkLi'>
          <i className="icon-office"></i> Administrator
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={`/super_base_admin_modul-sozlama/${params}`} className="nav-link" activeClassName='NavLinkLi'>
          <i className="icon-stack2"></i> Modullar Sozlamasi
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={`/super_base_admin_card-sozlama/${params}`} className="nav-link" activeClassName='NavLinkLi'>
          <i className="icon-stack2"></i> Karta Sozlamasi
        </NavLink>
      </li>
    </>
  )
}