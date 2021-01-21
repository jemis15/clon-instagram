import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export function PortalContent({ children, className }) {
    return <div className={`my-portal ${className}`}>
        {children}
    </div>
}

export function PortalHeader({ onHide, className }) {
    return <div className={`${className} px-3 py-2 myportal-header shadown-sm`}>
        <button type="button" className="close-my-portal" onClick={onHide}>
            <i className="far fa-times fa-lg" />
        </button>
    </div>
}

export default function MyPortal({ show, children }) {
    const containClass = document.body.classList.contains('portal-open');

    useEffect(() => {
        const element = document.getElementById('myportal');
        if (containClass && !show) {
            document.body.classList.remove('portal-open');
        }
        if (element && !show) {
            document.body.removeChild(element);
        }
    }, [show]);

    if (!show) {
        return null;
    }

    if (!containClass) {
        document.body.classList.add('portal-open');
    }

    var elementMyPortal = document.getElementById('myportal');

    if (!elementMyPortal) {
        elementMyPortal = document.createElement("div");
        elementMyPortal.setAttribute('id', 'myportal');
        document.body.appendChild(elementMyPortal);
    }

    return ReactDOM.createPortal(<React.Fragment>{children}</React.Fragment>, elementMyPortal);
}

