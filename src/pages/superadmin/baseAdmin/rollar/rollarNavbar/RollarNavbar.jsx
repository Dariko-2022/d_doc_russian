import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RollarNavbar() {
  return (
    <>
      <li className="nav-item" >
        <NavLink exact to="/super_base_admin_rollar" className="nav-link" activeClassName='NavLinkLi'>
          Tashkilot rollari
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/super_base_admin_xodim-rollari" className="nav-link" activeClassName='NavLinkLi'>
          <i className="icon-office"></i> Xodim rollari
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/super_base_admin_boshqa-rollar" className="nav-link" activeClassName='NavLinkLi'>
          <i className="icon-stack2"></i> Boshqa rollar
        </NavLink>
      </li>
    </>
  )
}