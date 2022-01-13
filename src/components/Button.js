const Button = (props) => {
    return (
        <button
            onClick={props.onAdd}
            style={{
                backgroundColor: props.color,
            }}
            className="btn"
        >
            {props.text}
        </button>
    );
};

Button.defaultProps = {
    color: "steelBlue",
};

export default Button;
