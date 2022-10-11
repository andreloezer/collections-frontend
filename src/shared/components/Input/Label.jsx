const Label = props => {
    return (
        <label
            className={props.className}
            title={props.title}
        >
            {props.children}
        </label>
    );
};


export default Label;