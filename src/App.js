import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id != id));
    };

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => 
            task.id === id 
            ? {...task, reminder: !task.reminder}
            : task
        ))
    }

    return (
        <div className="container">
            <Header title="Task tracker" />
            <AddTask onAdd={addTask}/>
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                'No tasks to show.'
            )}
        </div>
    );
}

export default App;
