import React, { useMemo, useState } from 'react'

function Sum() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState(1)

    let sum = useMemo(() => {
        let finalSum = 0
        for(let i = 1; i <= input; i++) {
            finalSum = finalSum+i
        }

        return finalSum;
    }, [input])

    return(
        <div>
            <input 
            type='text' 
            placeholder='Enter a Number'
            onChange={(e) => {
                setInput(e.target.value)
            }}
            ></input>

            <br></br>

            <h3>{`Sum from 1 to ${input} is ${sum}`}</h3>
            
            <button onClick={() => {
                setCount(count+1)
            }}>{`Counter(${count})`}</button>
        </div>
    )
}

export default Sum
