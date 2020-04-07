import React, { useState } from "react";
import "./App.scss";
import { Bricks } from "./Bricks/index";

function App() {
  // data,
  // columns = 4,
  // gap = 0,
  // minWidth = 200,
  // backgroundColor = "white",
  const [columns, setColumns] = useState(4);
  const [gap, setGap] = useState(0);
  const [minWidth, setMinWidth] = useState(200);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [data, setData] = useState([
    {
      imgSrc: "https://source.unsplash.com/random/1",
    },
    {
      imgSrc: "https://source.unsplash.com/random/2",
    },
    {
      imgSrc: "https://source.unsplash.com/random/3",
    },
    {
      imgSrc: "https://source.unsplash.com/random/4",
    },
    {
      imgSrc: "https://source.unsplash.com/random/5",
    },
    {
      imgSrc: "https://source.unsplash.com/random/6",
    },
    {
      imgSrc: "https://source.unsplash.com/random/7",
    },
    {
      imgSrc: "https://source.unsplash.com/random/8",
    },
    {
      imgSrc: "https://source.unsplash.com/random/9",
    },
    {
      imgSrc: "https://source.unsplash.com/random/10",
    },
    {
      imgSrc: "https://source.unsplash.com/random/11",
    },
    {
      imgSrc: "https://source.unsplash.com/random/12",
    },
    {
      imgSrc: "https://source.unsplash.com/random/13",
    },
    {
      imgSrc: "https://source.unsplash.com/random/14",
    },
    {
      imgSrc: "https://source.unsplash.com/random/15",
    },
    {
      imgSrc: "https://source.unsplash.com/random/16",
    },
    {
      imgSrc: "https://source.unsplash.com/random/17",
    },
    {
      imgSrc: "https://source.unsplash.com/random/18",
    },
    {
      imgSrc: "https://source.unsplash.com/random/19",
    },
    {
      imgSrc: "https://source.unsplash.com/random/20",
    },
    {
      imgSrc: "https://source.unsplash.com/random/21",
    },
    {
      imgSrc: "https://source.unsplash.com/random/22",
    },
    {
      imgSrc: "https://source.unsplash.com/random/23",
    },
    {
      imgSrc: "https://source.unsplash.com/random/24",
    },
    {
      imgSrc: "https://source.unsplash.com/random/25",
    },
    {
      imgSrc: "https://source.unsplash.com/random/26",
    },
    {
      imgSrc: "https://source.unsplash.com/random/27",
    },
    {
      imgSrc: "https://source.unsplash.com/random/28",
    },
    {
      imgSrc: "https://source.unsplash.com/random/29",
    },
    {
      imgSrc: "https://source.unsplash.com/random/30",
    },
  ]);

  const handleChange = ({ target }) => {
    let value = target.value;
    switch (target.name) {
      case "columns":
        if (value < 1) value = 1;
        setColumns(parseInt(value) || 4);
        break;
      case "gap":
        if (value < 0) value = 0;
        setGap(parseInt(value) || 0);
        break;
      case "minWidth":
        if (value < 1) value = 1;
        setMinWidth(parseInt(value) || 200);
        break;
      case "color":
        setBackgroundColor(value);
        break;
      default:
        console.log("Invalid target");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="col form">
          <p>
            <label htmlFor="columns">Columns</label>
            <input
              type="number"
              name="columns"
              value={columns}
              onChange={handleChange}
            />
            <span>Default: 4 Minimum: 1</span>
          </p>
          <p>
            <label htmlFor="gap">Gap</label>
            <input
              type="number"
              name="gap"
              value={gap}
              onChange={handleChange}
            />
            <span>Default: 0 Minimum: 0</span>
          </p>
          <p>
            <label htmlFor="minWidth">Min Width</label>
            <input
              type="number"
              name="minWidth"
              value={minWidth}
              onChange={handleChange}
            />
            <span>Default: 200 Minimum: 1</span>
          </p>
          <p>
            <label htmlFor="color">Background Color</label>
            <input
              type="text"
              name="color"
              value={backgroundColor}
              onChange={handleChange}
            />
            <span>
              Supports named colors (e.g. red, green, blue etc) or hex value
              (e.g. #ffffff)
            </span>
          </p>
        </div>
        <div className="col">
          <p>The below code snippet shows the component in use</p>
          <p>{`<Bricks data={data} columns={${columns}} gap={${gap}} minWidth={${minWidth}} backgroundColor={${backgroundColor}} />`}</p>
          <p>
            Photos from{" "}
            <a href="https://source.unsplash.com/" target="blank">
              Unsplash Source
            </a>
          </p>
        </div>
      </div>
      <Bricks
        data={data}
        columns={columns}
        gap={gap}
        minWidth={minWidth}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}

export default App;
