import './ToolbarButton.css';


const ToolbarButton = props => {

    const clickHandler = () => {
        props.btnClick();
    };    

    return (
        <button onClick={clickHandler} className='collection-toolbar-btn' >
            {props.children}
        </button>
    );
};


export default ToolbarButton;