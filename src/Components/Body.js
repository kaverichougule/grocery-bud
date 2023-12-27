import { useState } from "react";
import "./Body.css";
import DisplayInfo from "./DisplayInfo";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Book() {
let [userInput,setUserInupt]=useState("");
let [arr,setArray]=useState([]);
  function InputUser(ele){
    setUserInupt(ele.target.value);
  }
  function AddItem(){
    if(userInput!=""){
        setArray([...arr,{userInput}])
    }
    setUserInupt("");
    toast.success("Item added to the list !", {
        position: toast.POSITION.TOP_CENTER,
    });
  }
  function deleteItem(IdToDelete){
    let filteredList=arr.filter((ele,index)=>{
        return index!=IdToDelete; 
    });
    setArray(filteredList)
  }
  
  return (
    <div className="MainContainer">
      <main className="searchBar">
        <input type="text" onChange={InputUser} value={userInput} className="inputValue"/>
        <button className="add" onClick={AddItem}>Add</button>
        <ToastContainer />
      </main>
      <div className="container">
        {
            arr.map((ele,index)=>{
                return(
                    <DisplayInfo id={index} key={index} input={ele.userInput} deleteItem={deleteItem} />
                )
            })
        }
      </div>
    </div>
  );
}
