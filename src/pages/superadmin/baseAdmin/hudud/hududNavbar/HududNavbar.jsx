import React from "react";
import { NavLink } from 'react-router-dom';

const HududNavbar = () => {
  return (
    <>
      <li className="nav-item" style={{ marginLeft: "20px" }}>
        <NavLink to="/super_base_admin_hudud-viloyatlar" className="nav-link" activeClassName='NavLinkLi'>
          Viloyatlar
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to="/super_base_admin_hudud-shahar-tuman" className="nav-link" activeClassName='NavLinkLi'>
          Shahar va tumanlar
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink exact to="/super_base_admin_hudud" className="nav-link" activeClassName='NavLinkLi'>
          Mahalla
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/super_base_admin_journals_tasnif1" className="nav-link" activeClassName='NavLinkLi'>
          Tasnif1
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to="/super_base_admin_journals_tasnif2" className="nav-link" activeClassName='NavLinkLi'>
          Tasnif2
        </NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to="/super_base_admin_journals_tasnif3" className="nav-link" activeClassName='NavLinkLi'>
          Tasnif3
        </NavLink>
      </li>
    </>
  )
}

export default React.memo(HududNavbar);