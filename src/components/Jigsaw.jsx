import React, { useState, useEffect } from "react";
import "./Jigsaw.css";
import jigsawImage from "../assets/jigsaw.jpg";
import nb from "../assets/nb.png";
import nbhover from "../assets/hovernb.png";

const gridSize = 3;
const totalTiles = gridSize * gridSize;
const correctOrder = [...Array(totalTiles).keys()];

function Jigsaw() {
  const [tiles, setTiles] = useState([]);
  const [dragIndex, setDragIndex] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
    setTiles(shuffled);
  }, []);

  useEffect(() => {
    if (
      tiles.length === totalTiles &&
      tiles.every((tile, index) => tile === correctOrder[index])
    ) {
      setShowNextButton(true);
    }
  }, [tiles]);

  const handleDrop = (toIndex) => {
    if (dragIndex === null) return;
    const newTiles = [...tiles];
    [newTiles[dragIndex], newTiles[toIndex]] = [
      newTiles[toIndex],
      newTiles[dragIndex],
    ];
    setTiles(newTiles);
    setDragIndex(null);
  };

  const isCompleted = tiles.every(
    (tile, index) => tile === correctOrder[index]
  );

  return (
    <div className="jigsaw-grid">
      {tiles.map((tile, index) => {
        const row = Math.floor(tile / gridSize);
        const col = tile % gridSize;
        return (
          <div
            key={index}
            className="tile"
            draggable
            onDragStart={() => setDragIndex(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            style={{
              backgroundImage: `url(${jigsawImage})`,
              backgroundPosition: `${-col * 100}px ${-row * 100}px`,
            }}
          />
        );
      })}

      {/* ปุ่มที่จะแสดงเมื่อจิ๊กซอว์เสร็จ */}
      {showNextButton && (
        <div
          className="next-button-container"
          onClick={() => (window.location.href = "/next-page")}
        >
          <img
            src={isHovered ? nbhover : nb}
            alt="Next"
            className="next-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Jigsaw;
