const Button = (props) => {
    const onClick = (e) => {
        console.log(e);
    }
    
    return (
        <button
            onClick={onClick}
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
