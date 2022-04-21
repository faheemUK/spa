import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GoReport, GoDash } from "react-icons/go";
import { PATH } from "../../config";

export const SidebarData = [
    {
        title: "Dashboard",
        path: PATH.DASHBOARD,
        icon: <AiOutlineDashboard />
    },
    {
        title: "Tenants",
        path: PATH.TENANTDASHBOARD,
        icon: <BsFillPersonFill />
    },
    {
        title: "Landloard",
        path: PATH.LANDLORDDASHBOARD,
        icon: <BsFillPersonFill />
    },
    {
        title: "Reports",
        path: "#",
        icon: <GoReport />,
        subNav: [
            {
                title: "Space",
                path: PATH.REPORTSDASHBOARD,
                icon: <GoDash />
            },
            {
                title: "Subscriptions",
                path: PATH.SUBSCRIPTIONREPORT,
                icon: <GoDash />
            },
            {
                title: "New Landlords",
                path: PATH.LANDLORDREPORTS,
                icon: <GoDash />
            },
            {
                title: "New Tenants",
                path: PATH.TENANTSREPORTS,
                icon: <GoDash />
            },
        ]
    },
    {
        title: "Social Media Marketing",
        path: PATH.SOCIALMEDIAMARKETING,
        icon: <BsFillPersonFill />
    }
]