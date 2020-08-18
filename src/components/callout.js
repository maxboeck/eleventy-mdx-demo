import React from 'react'

const Callout = (props) => {
    return (
        <div className={`callout callout--${props.type}`}>{props.children}</div>
    )
}

Callout.defaultProps = {
    type: 'info'
}

export default Callout
