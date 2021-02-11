import React from 'react';

export default function Topbar({ topbar }) {
    return <div className="bg-green-100 text-success w-100 topbar" style={{borderBottom: '1px solid var(--green-200)'}}>
        <div className="resultMarquee text-nowrap font-weight-600">{topbar}</div>
    </div >
}