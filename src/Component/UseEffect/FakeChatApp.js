import React, { useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    name: "ReactJS là gì? Tại sao nên học ReactJS?",
  },
  {
    id: 2,
    name: "SPA/MPA là gì?",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];

export default function FakeChatApp() {
  const [lessonID, setLessonID] = useState(1);

  useEffect(() => {
    const hanleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonID}`, hanleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonID}`, hanleComment);
    };
  }, [lessonID]);

  return (
    <div className="container mt-4">
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonID === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonID(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
