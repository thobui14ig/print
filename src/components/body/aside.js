import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getCategoryByRole } from '../../api/methods/aside';
import { useAuth } from '../../context/auth.context';


export default function Aside() {
    const url = "#"
    const [category, setCategory] = useState(null);
    const {user} = useAuth()
    const [valueActive, setValueActive] = useState(0)


    useEffect(() => {
        const fetchData = async() => {
            const data = await getCategoryByRole()
            setCategory(data)
        }

        fetchData()

    }, []);


    const handleActive = (value) => {
        setValueActive(value)
    }

    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <a href={url} className="brand-link">
                    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
                    <span className="brand-text font-weight-light">Admin</span>
                </a>


                <div className="sidebar">

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={"../../dist/img/user2-160x160.jpg"} className="img-circle elevation-2" alt={"logo"}/> 
                        </div>
                        <div className="info">
                            <a href={url} className="d-block">{user}</a>
                        </div>
                    </div>




                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        

                            <li className="nav-item menu-open">
                                <a href={url} className="nav-link active">
                                <i className="nav-icon fas fa-table"></i>
                                <p>
                                    Tables
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                                </a>
                                <ul className="nav nav-treeview" style={{textAlign: "left"}}>
                                    {category &&
                                        category.map((item, index) => {
                                            return(
                                                <li onClick={() => handleActive(index)} key={index}>
                                                     <NavLink  to={"/" + item.category.key} exact={true}>
                                                    <a href={url} className={"nav-link " + (valueActive === index ? "active" : "")}  >
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>{item.category.name}</p>
                                                    </a>
                                                    </NavLink>
                                                </li>                                                
                                            )
                                        })

                                    }

                                </ul>
                            </li>

                         
                        
                        </ul>
                    </nav>

                </div>

            </aside>        
        </>

    )
}
