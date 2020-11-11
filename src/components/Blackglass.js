import React from 'react';

export default function Blackglass({active, toggle}) {
    if (!active) {
        return null;
    }

    return <div className="blackglass" onClick={toggle}></div>
}