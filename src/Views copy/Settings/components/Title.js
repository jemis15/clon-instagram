import React from 'react';

const Title = ({children, className}) => {
    return <h3 className={`mb-3 font-weight-600 ${className}`}>{children}</h3>;
};

export default Title;