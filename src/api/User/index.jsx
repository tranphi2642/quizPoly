import React, { useState, useEffect } from "react";
import instance from "../instance.jsx";

export default function User() {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance({
      url: "/USERS.json",
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {Object.values(data).map((user, index) => (
        <li key={index}>
          {user.fullname} & {Object.keys(data)[index]}
        </li>
      ))}
    </ul>
  );
}
