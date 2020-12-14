import React from 'react';
import ReactDOM from 'react-dom';

export function PortalContent({ children, className }) {
    return <div className={`my-portal ${className}`}>
        {children}
    </div>
}

export function PortalHeader({ onHide, className }) {
    const onClick = () => {
        const doc = document.getElementById('myportal');
        if (doc) {
            document.body.removeChild(doc);
        }
        document.body.style.removeProperty('overflow');
        onHide();
    }
    return <div className={`${className} px-3 py-2 myportal-header shadown-sm`}>
        <button type="button" className="close-my-portal" onClick={onClick}>
            <i className="far fa-times fa-lg" />
        </button>
    </div>
}

export default function MyPortal({ show, children }) {
    if (!show) {
        return null;
    }

    var elementMyPortal = document.getElementById('myportal');

    if (!elementMyPortal) {
        elementMyPortal = document.createElement("div");
        elementMyPortal.setAttribute('id', 'myportal');
        document.body.appendChild(elementMyPortal);
        document.body.style = 'overflow: hidden';
    }

    return ReactDOM.createPortal(<React.Fragment>{children}</React.Fragment>, elementMyPortal);
}

