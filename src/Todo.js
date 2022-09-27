import React from "react";

function Todo ({tasks,category,duedate}) {

    return (
        <>
            <h1>Welcome</h1>
            <p><strong>Your task:</strong> {tasks}</p>
            <p><strong>Due date:</strong> {duedate}</p>
            <p><strong>category:</strong> {category}</p>
        </>
    )
}

export default Todo