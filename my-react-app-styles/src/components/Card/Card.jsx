//import "./styles.css"
//import styles from "./Card.module.scss";

import { text } from "framer-motion/client";

const Card = ()=> {
    const textStyles = {
        color: "blue",
        fontSize: "2rem",
        textAlign: "center",
    }

    return(
        <div style={textStyles}>
            Soy una card !
        </div>
    )

}

export default Card;