import React, { useState } from 'react'

export default function ChnageBgColor() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(0);

  const [catHeight, setCatHeight] = useState(120);
  const [catWidth, setCatWidth] = useState(120);
  const [rotation, setRotation] = useState(0);

  function setColor() {
    setRed(Math.floor(Math.random() * 255));
    setGreen(Math.floor(Math.random() * 255));
    setBlue(Math.floor(Math.random() * 255));

    alert("bg color changed");
  }

  // Height
  function enhancedHeight() {
    setCatHeight(catHeight + 10);
  }

  function reducedHeight() {
    setCatHeight(Math.max(20, catHeight - 10));
  }

  // Width
  function enhancedWidth() {
    setCatWidth(catWidth + 10);
  }

  function reducedWidth() {
    setCatWidth(Math.max(20, catWidth - 10));
  }

  // Rotation
  function rotateCat() {
    setRotation(rotation + 45);
  }

  return (
    <div>
      <h2>Change Background Color</h2>

      {/* Box */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh"
        }}
      >
        <div
          style={{
            backgroundColor: `rgb(${red},${green},${blue})`,
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/060/264/913/small_2x/tabby-cat-lying-down-looking-up-with-curiosity-and-charm-png.png"
            alt="cat"
            style={{
              width: catWidth,
              height: catHeight,
              transform: `rotate(${rotation}deg)`
            }}
          />
        </div>
      </div>

      {/* Color */}
      <div style={{ textAlign: "center" }}>
        <button onClick={setColor}>
          Change Background Color
        </button>

        <p>
          Color Code: rgb({red}, {green}, {blue})
        </p>
      </div>

      {/* Height */}
      <div style={{ textAlign: "center" }}>
        <button onClick={enhancedHeight}>
          Increase Height
        </button>

        <button onClick={reducedHeight}>
          Decrease Height
        </button>
      </div>

      <br />

      {/* Width */}
      <div style={{ textAlign: "center" }}>
        <button onClick={enhancedWidth}>
          Increase Width
        </button>

        <button onClick={reducedWidth}>
          Decrease Width
        </button>
      </div>

      <br />

      {/* Rotation */}
      <div style={{ textAlign: "center" }}>
        <button onClick={rotateCat}>
          Rotate Cat
        </button>

        <p>Rotation: {rotation}°</p>
      </div>

    </div>
  )
}