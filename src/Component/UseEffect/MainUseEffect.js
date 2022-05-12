//!useEffect
import UseEffectDependency from "./EffectDependency";
import UpdateDOM from "./UpdateDOM";
import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import FakeChatApp from "./FakeChatApp";

function MainCourseState() {
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <h3>Welcome to Course useState</h3>
      <button onClick={() => setShow(!show)}>Click me!</button>
      {!show || <FakeChatApp />}
      <ListGroup>
        <ListGroup.Item className="bg-danger text-white">
          Các bài tập
        </ListGroup.Item>
        <ListGroup.Item variant="primary">
          <Link className="style-link" to="/use-effect/update-dom">
            1. UpdateDOM
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="secondary">
          <Link className="style-link" to="/use-effect/dependency">
            2. UseEffectDependency
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          <Link className="style-link" to="/use-effect/timer-function">
            3. Timer Function
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          <Link className="style-link" to="/use-effect/preview-avatar">
            4. Preview Avatar
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          <Link className="style-link" to="/use-effect/fake-chat-app">
            5. Fake Chat App
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          Info
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light
        </ListGroup.Item>
        <ListGroup.Item action variant="style-link">
          None
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default MainCourseState;
