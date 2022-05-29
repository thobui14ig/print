import React from 'react'
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Nav({setIsLoadding, isLoadding}) {
    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("loadding")
        localStorage.removeItem("token")
        setIsLoadding(!isLoadding)
    }
    const url = "#";
    return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href={url} role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        {/* <a href="../../index3.html" className="nav-link">Home</a> */}
                        <NavLink activeClassName="active" className="nav-link" to="/" exact={true}>Home</NavLink>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <NavLink activeClassName="active" className="nav-link" to="/nhanvien" >Nhân viên</NavLink>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block" onClick={handleLogout}>
                        <NavLink activeClassName="active" className="nav-link"to="/logout" >Đăng xuất</NavLink>
                    </li>
                </ul>


                <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                    <a className="nav-link" data-widget="navbar-search" href={url} role="button">
                    <i className="fas fa-search"></i>
                    </a>
                    <div className="navbar-search-block">
                    <form className="form-inline">
                        <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search"></i>
                            </button>
                            <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                            <i className="fas fa-times"></i>
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </li>



                </ul>
            </nav>
    )
}
