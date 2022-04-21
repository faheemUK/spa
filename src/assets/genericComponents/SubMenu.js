import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowDownShort } from "react-icons/bs";
import { useHistory, Link } from "react-router-dom";

export default function SubMenu(props) {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => {
        setSubnav(!subnav)
    }
    let history = useHistory();
    return (
        <>
            <Link
                onClick={showSubnav}
                className={`SidebarLink d-flex justify-content-between
                 ${history.location.pathname === props.item.path ? "active" : ""}`}
                to={props.item.path}>
                <div className="AnchorContent">
                    {props.item.icon}
                    <div className="SidebarLabel">
                        {props.item.title}
                    </div>
                </div>
                <div>
                    {
                        props.item.subNav
                            &&
                            subnav
                            ?
                            <BsArrowDownShort size={20} />
                            :
                            props.item.subNav
                                ?
                                <BsArrowLeftShort size={20} />
                                :
                                null
                    }
                </div>
            </Link>
            {
                subnav
                &&
                props.item.subNav
                &&
                props.item.subNav.map((navItem, idx) => {
                    return (
                        <Link className={`subnav-link ${history.location.pathname === navItem.path ? "active" : ""}`}
                            key={idx} to={navItem.path}>
                            <div className="d-flex align-items-center justiy-content-center">
                                {navItem.icon}
                                <div className="SubnavLabel">
                                    {navItem.title}
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}