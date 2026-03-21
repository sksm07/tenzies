
export default function Btn(props) {
    
    const styles= {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <button 
            style={styles} 
            className="btns" 
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label= {`button with value ${props.value},
                ${props.isHeld ? "held" : "not held"}
            }`}
        >{props.value}</button>
    )
}