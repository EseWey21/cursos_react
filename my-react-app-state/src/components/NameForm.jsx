import { useState } from "react"; 

const NameForm = () => {
    const [name, setCount] = useState("");

    return (
        <div>
            <input 
            type="text" 
            placeholder="Escribe tu nombre"
            value={name}
            onChange={(event) => setCount(event.target.value)}
            />
            <p>Hola, {name || "visitante"}</p>
        </div>
    )
};

export default NameForm;
