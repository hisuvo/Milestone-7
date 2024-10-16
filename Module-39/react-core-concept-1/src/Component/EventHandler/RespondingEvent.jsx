
const Button = () => {

    function handleClick() {
        alert("Event Resonding Reguler Function");
    }

    const handleClick1 = () => alert("Event Resonding Arroe Function");

    const handleClick2 = (num) => alert(num + 5)

    return (
        <div>
            <button onClick={handleClick}>Click-1</button>
            <button onClick={handleClick1}>Click=2</button>
            <button onClick={() => handleClick2(5)}>Click-3</button>
            <button onClick={() => alert("Event Resonding Inline")}>Click-4</button>
        </div >
    )
}

export default Button