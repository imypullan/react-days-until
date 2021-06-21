import React from 'react'
import SidebarItem from "./SidebarItem";
import List from "@material-ui/core/List";

function Sidebar({ dates, depthStep, depth }) {
    return (
        <div className="sidebar">
            <List disablePadding dense>
                {dates.map((sidebarItem, index) => (
                    <SidebarItem
                        key={`${sidebarItem.name}${index}`}
                        depthStep={depthStep}
                        depth={depth}
                        {...sidebarItem}
                    />
                ))}
            </List>
        </div>
    )
}

export default Sidebar