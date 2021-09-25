import { useState } from "react";
import uuid from "uuid/v4";

function App() {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [name, setName] = useState("");
  const [DUMMY_DATA, setDUMMY_DATA] = useState([]);

  const getCoordinate = (e) => {
    setX(e.clientX);
    setY(e.clientY);

    const newPoint = {
      id: uuid(),
      x: e.clientX,
      y: e.clientY,
      name: name
    };

    setDUMMY_DATA([...DUMMY_DATA, newPoint]);
  };

  const removeHandler = (e) => {
    const newDummyData = [...DUMMY_DATA].filter(
      (item) => item.id !== e.target.id
    );
    setDUMMY_DATA(newDummyData);
  };

  const starts = DUMMY_DATA.map((each) => {
    return (
      <div
        id={each.id}
        key={each.id}
        onClick={removeHandler}
        style={{
          position: "absolute",
          left: each.x,
          top: each.y,
          color: "red",
          cursor: "pointer"
        }}
      >
        {each.name}
      </div>
    );
  });

  return (
    <div>
      <div className="container">
        <img
          onClick={getCoordinate}
          src="https://img.khan.co.kr/news/2020/05/15/l_2020051401001770900136491.webp"
          alt=""
          className="png"
        />
        {starts}
      </div>
      <div className="text">
        <label htmlFor="anything">Please enter anything here</label>
        <input
          type="text"
          name="anything"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>This is a dummy app to demonstrate.</p>
        <p>input any value you want to show on the picture, and click anywhere on the picture to show the value and click again to remove. </p>
        <nav>X: {x}</nav>
        <nav>Y: {y}</nav>
      </div>
    </div>
  );
}

export default App;
