import React from 'react';

export default function DropdownMenu({ className, active, toggle, children }) {
    return <div className={`c_dropdown-menu ${active && 'active'}`} onClick={toggle}>
        <div className={`shadow-sm rounded ${className}`}>
            {children}
        </div>
    </div>
}