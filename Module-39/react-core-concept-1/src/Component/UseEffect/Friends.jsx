/**
 * 1.state to hold data
 * 2. use effect With defendance array
 * 
 */

import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends() {
    const [friends, setFrinds] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setFrinds(data)
        })();

    }, [])



    return (
        <div>
            <h2>Hello Friend</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    )
}

