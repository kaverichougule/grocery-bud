import { useState } from "react";
import "./Body.css";
export default function Book() {
let [userInput,setUserInupt]=useState("");
let [arr,setArray]=useState("");
  function InputUser(ele){
    setUserInupt(ele.target.value)
  }
  function AddItem(){
    if(userInput!=""){
        setArray([...arr,{userInput}])
    }
    setUserInupt("");
  }
  return (
    <div>
      <main className="searchBar">
        <input type="text" onChange={InputUser} value={userInput} />
        <button className="add" onClick={AddItem}>Add</button>
      </main>
      <div className="container">
      </div>
    </div>
  );
}
