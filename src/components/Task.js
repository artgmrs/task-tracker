import { FaTimes } from "react-icons/fa";

const Task = (props) => {
    return (
        //se precisar passar um parâmetro para alguma função, é preciso usar arrow function
        <div
            className={`task ${props.task.reminder ? "reminder" : ''}`}
            onDoubleClick={() => props.onToggle(props.task.id)}
        >
            <h3>
                {props.task.text}{" "}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => props.onDelete(props.task.id)}
                />
            </h3>
            <p>{props.task.day}</p>
        </div>
    );
};

export default Task;
