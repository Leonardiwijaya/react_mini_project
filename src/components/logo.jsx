import { Link } from "react-router-dom";
import img from "../assets/img/Logo2.jpg"

export default function Logo(props) {
    const style = {
        display: "flex",
        textDecoration: "none",
    }
    const fontStyle = {
        display: "flex",
        height: "100%",
        color: "black",
        alignItems: "center",
        alignSelf: "center",
        margin: 0,
        padding: 0,
    }
    const imgStyle = {
        height: "50px",
    }
    return (<Link to={props.to} style={style}>
    <img src={img} style={imgStyle} height={50} alt="logo"/>
    <h5 style={fontStyle}>Fuku</h5>
    </Link>);
}