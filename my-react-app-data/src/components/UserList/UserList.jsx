import { useEffect } from 'react';
import { useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <p>{user.name} </p>
                            <p>Calle: {user.address.street}</p>
                            <p>Ciudad: {user.address.city}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserList;


