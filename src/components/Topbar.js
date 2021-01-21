import React from 'react';

export default function Topbar({ topbar }) {
    return <div className="bg-green-800 text-white w-100 topbar">
        <div className="resultMarquee text-nowrap font-weight-600">{topbar}</div>
    </div >
}