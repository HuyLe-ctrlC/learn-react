
//!useState
import Gift from "./Gifts";
import TowWay from "./TowWayBinding";
import RadioSubmitCourses from "./RadioSubmitCourses";
import CheckboxSubmitCourse from "./CheckboxSubmitCourse";
import ToDoList from "./ToDoList";
import React, { useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";


function MainCourseState() {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <h3>Welcome to Course useState</h3>
      
      <TowWay />
      <RadioSubmitCourses />
      <CheckboxSubmitCourse />
      <ToDoList />
      {show && <Gift />}
      <Button onClick={() => setShow(!show)}>Toggle Show</Button>
    </div>
  );
}

export default MainCourseState;
