import { useEffect, useState } from "react"
import Person from "./Person"

export default function Persons() {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    return (
        <div>
            <h2>Persons: {persons.length}</h2>
            {persons.map(person => <Person person={person} />)}
        </div>
    )
}