import "./Book.css"
export default function Book({ Books }) {
    return (
        <>
            <div>{Books.map(book =>
                <div className="book">
                    <li>id: {book.id}</li>
                    <li>Name{book.title}</li>
                    <li>Price {book.price}</li>
                </div>
            )}</div>
        </>
    )
}

