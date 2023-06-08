import React from "react";
import { NavLink } from 'react-router-dom';

export default function SozlamalarNavbar() {
  return (
    <>
      <li className="nav-item" style={{ marginLeft: "30px" }}>
        <NavLink exact to="/super_base_admin_murojaat_formasi" className="nav-link" activeClassName='NavLinkLi'>
          Murojaat Formasi
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink exact to="/super_base_admin_murojaat_maqsadi" className="nav-link" activeClassName='NavLinkLi'>
          Murojaat Maqsadi
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink exact to="/super_base_admin_murojaat_turi" className="nav-link" activeClassName='NavLinkLi'>
          Murojaat Turi
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/super_base_admin_qabulxona" className="nav-link" activeClassName='NavLinkLi'>
          Qabulxona
        </NavLink>
      </li>
    </>
  )
}