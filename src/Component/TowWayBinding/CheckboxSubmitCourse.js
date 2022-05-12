import React, { useState } from "react";

const courses = [
  { id: 1, name: "HTML, CSS" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "ReactJS" },
];

function CheckboxSubmitCourse() {
  const [checked, setChecked] = useState([]);
  const handleSubmit = () => {
    console.log({ id: checked });
  };

  const handleCheckbox = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div style={{ padding: 32 }} className="">
      <hr />
      <h3>Checkbox Course</h3>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            checked={checked.includes(course.id)}
            type="checkbox"
            onChange={() => handleCheckbox(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Course</button>
    </div>
  );
}

export default CheckboxSubmitCourse;
