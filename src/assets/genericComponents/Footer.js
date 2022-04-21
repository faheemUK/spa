import React from "react";
import { Link } from 'react-router-dom';

export function FooterBar() {
    return (
        <footer>
            <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-3 col-xs-3 mt-2">
                    <div className="footer-left-menu">
                        <Link to={"#"}>
                            {'PRICING'}
                        </Link>
                        <Link to={"#"}>
                            {'CONTACT US'}
                        </Link>
                    </div>
                    <span className="footer-aside pl-1 pt-3">
                        {'© 2021 REDHANDED'}
                    </span>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-3 col-xs-3 mt-2 pr-3">
                    <div className="footer-bside">
                        <div className="bside-links">

                            <a rel="noreferrer" target="_blank" href="http://resources.redhandedco.com/">
                                {'BLOG'}
                            </a>
                            <Link to={"#"}>
                                {'CAREERS'}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}