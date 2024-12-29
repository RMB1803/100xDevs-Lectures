import React, { useEffect, useState } from 'react'

function useDebounce(value, timeout) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncedValue(value)
        }, timeout)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    return debouncedValue
}

export default useDebounce
