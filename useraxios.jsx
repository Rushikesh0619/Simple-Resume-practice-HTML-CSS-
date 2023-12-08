import React, { useState,useEffect } from "react";
import axios from "axios";
export const UserAxios =()=>{
    const [data,setData]  = useState([])
    const [singleData,setSingleData] = useState([])
    const [userCreate,setCreate] = useState({
        userName:"",
        password:""
    });
    const [userUpdate,setUserUpdate]  = useState({
        userName:"",
        password:""
    });
    const [id,setId] = useState({
        updateId:0,
        deleteId:0,
        getId:0
    });
    const User = {
        userName :userCreate.userName,
        password : userCreate.password
    }
    useEffect(() => {
        axios
          .get("http://localhost:8080/users/getAll",{headers : {
            "Content-Type" :"application/json",
            "Access-Control-Allow-Headers":"Context-type",
            "Access-Control-Allow-Origin" : "+",
            Accept: "application/json"
        }}) 
          .then((response) => setData(response.data)); 
      }, []); 
    const handlePost=()=>{
        axios
        .post("http://localhost:8080/users/post",User,{headers: {'X-Requested-With': 'XMLHttpRequest'}})
        .then((response) => {
          alert("User added successfully!");
          setData([...data, response.data]);
          console.log(response.data)
        })
        .catch((error) => {
      
          alert("Something went wrong!");
        });
    }
    const handleUpdate = ()=>{
        axios
        .put(`http://localhost:8080/users/${id.updateId}`,User,{headers: {'X-Requested-With': 'XMLHttpRequest'}})
        .then((response) => {
          alert("Product updated successfully!");
          setData(data.map(user => user.id === id ? response.data : user));
          console.log(response.data)
        })
        .catch((error) => {
         
          alert("Something went wrong!");
        });
    }
    const handleDelete = () => {
        axios
          .delete(`http://localhost:8080/users/delete/${id.deleteId}`,{headers: {'X-Requested-With': 'XMLHttpRequest'}})
          .then((response) => {
            alert("User deleted successfully!");
            setData(data.filter(user => user.id !== id));
            console.log(response.data)
          })
          .catch((error) => {  
            alert("Something went wrong!");
          });
      };

    function handleChange(event) {
        setCreate({ ...userCreate, [event.target.name]: event.target.value });
      }
      function handleUpdateChange(event) {
        setUserUpdate({ ...userUpdate, [event.target.name]: event.target.value });
      }
      const handleIdChange = (event) => {
        setId({ ...id, [event.target.name]: event.target.value });
      };
      function handleGet() {
        axios.get(`http://localhost:8080/users/get/${id.getId}`, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
          .then((response) => {
            setSingleData(response.data);
          })
          .catch((error) => {
            alert("Something went wrong!");
          });
      }
      
    return(
        <>
         <div>
      <h1>Data from the URL</h1>
      <ul>
        {data.map((user, id) => (
          <li key={id}>
            <p>{user.userId}</p>
            <p>{user.userName}</p>
            <p>{user.password}</p>
          </li>
        ))}
      </ul>
      <h1>Add a new User</h1>
      <div>
        <label>Name:</label>
        <input type="text" name="userName"value={userCreate.userName} onChange={handleChange} /> 
      </div>
      <div>
        <label>Password:</label>
        <input type="text" name="password" value={userCreate.password} onChange={handleChange} />
      </div>
      <button onClick={handlePost}>Submit</button> 
      <h1>Update an existing user</h1>
      <div>
        <label>User ID:</label>
        <input type="number" name="updateId" value={id.updateId} onChange={handleIdChange} /> 
      </div>
      <div>
        <label>New Name:</label>
        <input type="text" name="userName" value={userUpdate.userName} onChange={handleUpdateChange} /> 
      </div>
      <div>
        <label>New Password:</label>
        <input type="text" name="password" value={userUpdate.password} onChange={handleUpdateChange} />
      </div>
      <button onClick={handleUpdate}>Update</button> 
      <h1>Delete a user</h1>
      <div>
        <label>User ID:</label>
        <input type="number" name="deleteId" value={id.deleteId} onChange={handleIdChange} /> 
      </div>
      <button onClick={handleDelete}>Delete</button> 
    </div>
    <div>
      <div>
        <label>User ID:</label>
        <input type="number" name="getId" value={id.getId} onChange={handleIdChange} />
        <button onClick={handleGet}>Get User</button>
      </div>
      <div>
        <p>User Name: {singleData.userName}</p>
        <p>Password: {singleData.password}</p>
      </div>
    </div>
        </>
    )
}
