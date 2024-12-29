import React, { useEffect, useState } from 'react'

function useDimensions() {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    const updateDimensions = () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions)
    })

    return {height, width}
}

export default useDimensions
