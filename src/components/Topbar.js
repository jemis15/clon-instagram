import MDEditor from '@uiw/react-md-editor';
import React from 'react';

export default function Topbar({ topbar, onRemove }) {

    return <div className="bg-primary topbar">
        <div className="container-lg py-2 d-flex">
            <div className="flex-fill text-white mr-3">
                <MDEditor.Markdown source={topbar} className="text-center" />
            </div>
            <span className="text-white align-self-center cursor-pointer"
                onClick={onRemove}>
                <i className="far fa-times" />
            </span>
        </div>
    </div>
}