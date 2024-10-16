
export default function Singer({ id, name, age }) {
    return (
        <div key={id}>
            <h2>Id : {id} </h2>
            <h2>Singer : {name} </h2>
            <h3>Age : {age} </h3>
        </div>
    )
}