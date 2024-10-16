
// export default function Todo({ task, isDone }) {
//     return (
//         <h2> Task Done : {task} </h2>
//     )
// }


// Condition Randering Option 1:
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <h3>Finised : {task} </h3>
//     }
//     return <h3>Work on : {task} </h3>
// }


// Condition Rendaring Options 2:
// export default function Todo({ task, isDone }) {
//     return isDone ? <h3>Finised : {task} </h3> : <h3>Work on : {task} </h3>
// }


// Condition Rendering Options 3: (Ternary Operator)
// export default function Todo({ task, isDone }) {
//     return (
//         <h2> {isDone ? 'Filised' : 'Work on'} : {task} </h2>
//     )
// }

// Conditional Rendering Options 4: (&& operator)
// export default function Todo({ task, isDone }) {
//     return (
//         <h2> {task} : {isDone && "Done"} </h2>
//     )
// }


// Conditional Rendering Options 4: (|| operator)
// export default function Todo({ task, isDone }) {
//     return (
//         <h2> {task} {isDone || "(Do it)"} </h2>
//     )
// }


// Conitional Rendering Options 5: (if else)
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return null
//     }
//     return (
//         <h2> {task} </h2>
//     )
// }

// Conitional Rendering Options 6: (let variable)
export default function Todo({ task, isDone }) {
    let listitem;
    if (isDone) {
        listitem = <h2> Done : {task} </h2>
    } else {
        listitem = <h2> Do it : {task} </h2>
    }

    return listitem
}
