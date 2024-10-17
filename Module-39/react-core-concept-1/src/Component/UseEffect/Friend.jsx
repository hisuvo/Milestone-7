const Friend = ({ friend }) => {
    const friendStyle = {
        padding: "1rem",
        margin: "1rem",
        border: "2px solid pink",
        borderRadius: "1rem"
    }

    console.log(friend)
    const { name, phone, email } = friend

    return (
        <div style={friendStyle}>
            <h2>Name:{name}</h2>
            <h3>Emain:{phone}</h3>
            <h3>Phone:{email}</h3>
        </div>
    )

}

export default Friend