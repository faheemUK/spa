import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../config";
import { IMAGES } from '../images';
import { SidebarData } from "./SideBarData";
import { TiTimes } from "react-icons/ti";
import SubMenu from "./SubMenu";
export default function Sidebar(props) {
    let ref = useRef();
    useEffect(() => {
        function handleClickOutside(event) {
            if (event.target.name === "menu-buttn" || event.target.parentNode.name === "menu-buttn") {
                return;
            }
            if (ref.current && !ref.current.contains(event.target) && (event.target.name !== "menu-buttn" || event.target.parentNode.name !== "menu-buttn")) {
                props.setShow(true)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, props]);
    return (
        <>
            <div ref={ref} className={`sidebar ${props && props.show ? "" : "disappear"}`}>
                <div className=" redhanded-text-set">
                    <Link to={PATH.DASHBOARD} className="d-flex">
                        <div className="brand-logo">
                            <img alt="" className="img-fluid" src={IMAGES.APPLOGO} />
                        </div>
                        <h3>
                            {"REDHANDED"}
                        </h3>
                    </Link>
                    <button className="cross-btn-navadmin" name="menu-buttn" variant="link" bsPrefix="menu-btn"
                        onClick={() => { props.setShow(!props.show) }} >
                        <TiTimes size={"25px"} />
                    </button>
                </div>
                <hr />
                <div className="InfoContainer">
                    <div className="UserImage">
                        {"AD"}
                    </div>
                    <div className="Info">
                        <div className="InfoName" to="#">
                            {"Admin"}
                        </div>
                    </div>
                </div>
                <hr />
                {
                    SidebarData.map((item, index) => {
                        return (
                            <SubMenu
                                key={index}
                                item={item} />
                        )
                    })
                }
            </div>
        </>
    )
}