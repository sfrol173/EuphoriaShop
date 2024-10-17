import React from "react";
import PropTypes from "prop-types";



const HeaderBox = ({children}) => {

    return (
        <header className={'header'}>{children}</header>
    )
}

HeaderBox.propTypes = {
    children : PropTypes.any
}

export default HeaderBox