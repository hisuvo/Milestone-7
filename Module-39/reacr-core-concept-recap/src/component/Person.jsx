import "./person.css";
export default function Person({ person }) {
    console.log(person)
    const { title, id, userId, body } = person
    return (
        <div className="person">
            <h4>Title: {title} </h4>
            <p><small>Id: {id} </small></p>
            <p><small>UserId: {userId} </small></p>
            <p><small>body: {body} </small></p>
        </div>
    )
}