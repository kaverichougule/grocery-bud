import "./DisplayInfo.css";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function DisplayInfo(props) {
  function remove(ele) {
    props.deleteItem(ele.target.id);
    toast.success("Item Deleted !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  return (
    <div>
      <ToastContainer />
      <div className="display" id="singleItem">
        <div className="info">
          <input type="checkbox" name="" id="checked" />
          <label htmlFor="">{props.input}</label>
        </div>
        <div className="btnContainer">
          <button onClick={remove} className="delete" id={props.id}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
