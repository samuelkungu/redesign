import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import moment from "moment";
import Button from "../components/Button";
import { registerTask } from "../redux/actions/tasks";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Add.css";

function Tasks(id) {
  console.log(id);
  const projectid = id.location.state;
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector((state) => state.task);
  const history = useHistory();
  const [data, setData] = useState({
    projectId: projectid,
    taskTitle: "",
    taskStartdate: "",
    taskEnddate: "",
  });

  const handleChange = (e) => {
    const taskDetails = { ...data };

    taskDetails[e.target.id] = e.target.value;

    setData(taskDetails);
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(registerTask(data));
  };
  const style = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    width: "200px",
    marginTop: "10px",
    marginLeft: "5px",
    border: "none",
    borderRadius: "5px",
  };
  return (
    <>
      <Navbar />

      <div className="add">
        <p>Add task</p>
        {error && <h4 style={{ color: "red" }}>{error}</h4>}
        {message && <h4 style={{ color: "green" }}>{message}</h4>}
        <form onSubmit={(e) => submit(e)} className="form">
          <label>Task title:</label>
          <input
            id="taskTitle"
            onChange={(e) => handleChange(e)}
            value={data.taskTitle}
            type="text"
            placeholder="enter task title"
            required
          />
          <label>Start date:</label>
          <input
            id="taskStartdate"
            onChange={(e) => handleChange(e)}
            value={data.taskStartdate}
            type="date"
            required
            min={moment().format("YYYY-MM-DD")}
          />
          <label>End date:</label>
          <input
            id="taskEnddate"
            onChange={(e) => handleChange(e)}
            value={data.taskEnddate}
            type="date"
            required
            min={data.taskStartdate}
          />
          <Button text="Create task" style={style} />
        </form>
        {/* {message ? history.goBack() : <p>joan</p>} */}
      </div>
    </>
  );
}

export default Tasks;
