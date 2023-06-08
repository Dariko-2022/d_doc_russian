import React from "react";
import { NavLink } from 'react-router-dom';

const MonitoringNavbar = () => {
    return (
        <>
            <li className="nav-item" style={{ marginLeft: "20px" }}>
                <NavLink to={`/monitoring_kiruvchi_2`} activeClassName="NavLinkLi"
                    className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Kiruvchi
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={`/monitoring_nazorat-kartochka_2`} activeClassName="NavLinkLi"
                    className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Nazorat kartochkasi
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={`/monitoring_nazorat-kartochka-malumot_2`} activeClassName="NavLinkLi"
                    className="nav-link d-flex align-items-center">
                    <i className="icon-newspaper mr-1"></i> Nazorat Kartochkasi ma'lumot
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={`/monitoring_yuqori_tashkilot_1a_2`} activeClassName="NavLinkLi"
                    className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Yuqori tashkilot 1
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={`/monitoring_umumiy-hisobot_2`} activeClassName="NavLinkLi"
                    className="nav-link d-flex align-items-center">
                    <i className="icon-user-plus mr-1"></i> Hisobot
                </NavLink>
            </li>
        </>
    )
}

export default React.memo(MonitoringNavbar);