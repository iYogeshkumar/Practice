
import React, { useState, useEffect } from "react";


const Fetchgituser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        });
    }, []);
  
    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <span>
              <img src={user.avatar_url} width={"100px"} alt={user.avatar_url} />
            </span>
            <span> {user.login.toUpperCase()}</span>
          </div>
        ))}
      </div>
    );
}

export default Fetchgituser;
