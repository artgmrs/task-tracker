import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Teste 1",
            day: "15 de janeiro",
            reminder: false,
        },
        {
            id: 2,
            text: "Teste 2",
            day: "12 de janeiro",
            reminder: true,
        },
        {
            id: 3,
            text: "Teste 3",
            day: "11 de janeiro",
            reminder: false,
        },
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id != id));
    };

    const toggleReminder = (id) => {
        // const newTasks = [...tasks];
        // newTasks[id - 1] = { reminder: reminder === true ? false : true }
        // setTasks(newTasks);
        setTasks(tasks.map((task) => 
            task.id === id 
            ? {...task, reminder: !task.reminder}
            : task
        ))

        // let task = tasks.findIndex((task => task.id === id));
        // console.log(id);
    }

    return (
        <div className="container">
            <Header title="Task tracker" />
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                'No tasks to show.'
            )}
        </div>
    );
}

export default App;
