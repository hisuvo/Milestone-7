import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleRemove = () => {
        // const newCount = count - 1;
        // setCount(newCount)

        setCount(count - 1)
    }

    return (
        <div style={{ border: '2px solid tomato', marginTop: "2rem" }}>
            <h2>Counter : {count > 0 ? count : 0}</h2>
            <button onClick={handleAdd}>Add Number</button>
            <button onClick={handleRemove}>Remove Number</button>
        </div>
    )
}

/**
 * 
 * UseState 5 UseCase Is:
 * 
 * 1.Conditional Rendering
 * 2.Count
 * 3.Store API Form state
 * 4.State ManageMent
 * 5.Toggle Flags(true/false)
 * 
 */