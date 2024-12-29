import React, { useEffect, useState } from 'react'

function useMousePointer() {

    const [pointer, setPointer] = useState({x: 0, y: 0})

    const handleMouse = (e) => {
        setPointer({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouse)
    })

    return pointer
}

export default useMousePointer
