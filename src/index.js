import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//!useEffect
import MainUseEffect from "./Component/UseEffect/MainUseEffect";

//!useEffect
import MainCourseState from "./Component/TowWayBinding/MainCourseState";
import UpdateDom from "./Component/UseEffect/UpdateDOM";
import UseEffectDependency from "./Component/UseEffect/EffectDependency";
import TimerFunction from "./Component/UseEffect/TimerFunction";
import PreviewAvatar from "./Component/UseEffect/PreviewAvatar";
import FakeChatApp from "./Component/UseEffect/FakeChatApp";
import UseRef from "./Component/UseRef/UseRef.tsx";
import JSX from "./Component/JSX/JSX.tsx";

//? Fake Comments

function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung comment cua lesson ${id}`,
      })
    );
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* UseState */}
      <Route path="/" element={<App />} />
      <Route path="use-state" element={<MainCourseState />} />
      {/* UseEffect */}
      <Route path="use-effect" element={<MainUseEffect />} />
      <Route path="use-effect/update-dom" element={<UpdateDom />} />
      <Route path="use-effect/dependency" element={<UseEffectDependency />} />
      <Route path="use-effect/timer-function" element={<TimerFunction />} />
      <Route path="use-effect/preview-avatar" element={<PreviewAvatar />} />
      <Route path="use-effect/fake-chat-app" element={<FakeChatApp />} />
      {/* useRef */}
      <Route path="useref" element={<UseRef />} />
      {/* JSX */}
      <Route path="jsx" element={<JSX />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
