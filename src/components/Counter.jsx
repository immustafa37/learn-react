import { useState } from "react"

const Counter = ()=>{
    const [count, setCount] = useState(0);
    const [reverseCount, setReverse]= useState(10);
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>{
                setCount(count + 1)
            }}>Update Count</button>
            <h1>Reverse Count:{reverseCount}</h1>
            <button onClick={()=>{
                setReverse(reverseCount - 1)
            }}>Reverse Counte</button>
        </div>
    )
}
export default Counter;