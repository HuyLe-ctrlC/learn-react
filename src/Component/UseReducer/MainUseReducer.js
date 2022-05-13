import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseReducer from "./UseReducer";

function MainCourseState() {
  return (
    <div className="container">
      <h3>Welcome to Course useReducer</h3>
      <ListGroup>
        <ListGroup.Item className="bg-danger text-white">
          Các bài tập UseReducer
        </ListGroup.Item>
        <ListGroup.Item variant="primary">
          <Link className="style-link" to="/use-reducer/easy">
            1. Bài tập Easy
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          <Link className="style-link" to="/use-reducer/normal">
            2. Bài tập Normal
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MainCourseState;
