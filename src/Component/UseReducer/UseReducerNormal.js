import { useReducer } from "react";

//! 1. Set state
const initState = {
  job: "",
  jobs: [],
};
//! 2. Action
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";
//! 3. Reducer
const reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);

  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    default:
      throw new Error("Invalid Action");
  }

  return newState;
};
//! 4. Dispatch

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

export default function UseReducerNormal() {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        placeholder="Enter todo..."
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>{item} &times;</li>
        ))}
      </ul>
    </div>
  );
}
