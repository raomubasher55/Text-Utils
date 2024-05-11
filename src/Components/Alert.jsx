import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        if (!word) return ""
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{ height: "50px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">  {/*we use this method also */}
                {/* // <div className={`alert alert-${props.alert.type}`} role="alert">  */}
                <strong>{capitalize(props.alert.type)} </strong>  :  {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert
