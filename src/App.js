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
    return (
        <div className="container">
            <Header title="Task tracker" />
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default App;
