import React, {useState} from "react";

function Todoform ({getTask}) {
    const [Task, setTask] = useState("")
    const [Category, setCategory] = useState("")
    const [DueDate, setDate] = useState("")

    function handleTaskInput (e) {
        let task = e.target.value
        setTask((Task) => task)
    
    }

    function handleCategory (e) {
        let category = e.target.value
        setCategory((Category) => category)

    }
 
    function handleDueDate (e) {
        let duedate = e.target.value
        setDate((DueDate) => duedate)
    }
    
    function handleSubmit (e) {
        e.preventDefault()
        let newQuote = {
            tasks: Task,
            category: Category,
            duedate: DueDate
        }

        getTask(newQuote)
        setTask("")
    }

    

    return (
        <form onSubmit={handleSubmit} >
            <label>
                <strong>Task:</strong> 
                <input onBlur={handleTaskInput} type="text" name="tasks" />
             </label>
             <label>
                <strong> category:</strong>
                <input onBlur={handleCategory} type="text" name="category" />
             </label>
             <label>
                <strong> Due date:</strong>
                <input onBlur={handleDueDate} type="date" name="duedate" />
             </label>
        <input type="submit" value="Submit" />
       </form>
    )
}

export default Todoform