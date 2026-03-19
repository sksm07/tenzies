
export default function Btn(props) {
    
    const styles= {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <button style={styles} className="btns" onClick={props.hold}>{props.value}</button>
    )
}