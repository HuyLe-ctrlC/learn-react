import React, { useState } from "react";

const courses = [
  { id: 1, name: "HTML, CSS" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "ReactJS" },
];

function RadioSubmitCourses() {
  const [checked, setChecked] = useState(1);
  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div style={{ padding: 32 }} className="">
      <hr />
    <h3>Radio Course</h3>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            checked={checked === course.id}
            type="radio"
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Course</button>
    </div>
  );
}

export default RadioSubmitCourses;
