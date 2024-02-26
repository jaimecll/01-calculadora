import './button.css'
function Button({name, color, buttonClick}){

    const handleClick = () => buttonClick(name);

    return(
        <>
                    <button className={'calculator-button ' +  color} onClick={handleClick}> {name} </button>
        </>
    )
}
export default Button