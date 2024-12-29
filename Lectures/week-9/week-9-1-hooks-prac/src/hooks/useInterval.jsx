import React, { useEffect } from 'react'

function useInterval(fn, timer) {

    useEffect(() => {
        const interval = setInterval(() => {
            fn()
        }, timer)

        return() => {
            clearInterval(interval)
        }
    }, [fn,timer])

}

export default useInterval
