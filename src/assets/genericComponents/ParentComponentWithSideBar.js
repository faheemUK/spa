import React from "react";

export function ParentComponentWithSideBar({ children, ...rest }) {
    return (
        <div className="page-height pb-1 admin-margin-left">
            {children}
        </div>
    )
}