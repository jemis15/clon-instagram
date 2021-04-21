import React from 'react';

const CheckBox = (props) => {
    return <div className={`check-box ${props.checked && 'checked'} cursor-pointer`}>
        {props.checked && (
            <>
                {props.type === 'indeterminate'
                    ? <div className="check-icon-indeterminate"></div>
                    : <div className="check-icon"></div> // predeterminado
                }
            </>
        )}
    </div>
}

export default CheckBox;