import React from 'react'
import { useLocation } from 'react-router'

function ReloadingLink({ to, children, ...props }) {
    const location = useLocation()
    const hdlLinkReload = (e) => {
        if (location.pathname !== to) {
            // Navigate to a different route — reload the page
            window.location.href = to
        }
    }
    return (
        <button onClick={hdlLinkReload} {...props}>{children}</button>
    )
}

export default ReloadingLink