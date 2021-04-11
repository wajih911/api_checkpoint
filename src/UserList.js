import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function UserList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          setData(response.data);
        })
        .catch(function (error) {
          setError(error);
        });
    }
    fetchData();
  }, []);
  return (
    <div>
      {data.map((e, i) => (
        <UserCard user={e} key={i} />
      ))}
    </div>
  );
}

export default UserList;
