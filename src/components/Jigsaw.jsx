import React, { useState, useEffect } from "react";
import "./Jigsaw.css";
import jigsawImage from "../assets/jigsaw.jpg"; 

const gridSize = 3;
const totalTiles = gridSize * gridSize;
const correctOrder = [...Array(totalTiles).keys()];

function Jigsaw() {
  const [tiles, setTiles] = useState([]);
  const [dragIndex, setDragIndex] = useState(null);

  useEffect(() => {
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
    setTiles(shuffled);
  }, []);

  const handleDrop = (toIndex) => {
    if (dragIndex === null) return;
    const newTiles = [...tiles];
    [newTiles[dragIndex], newTiles[toIndex]] = [newTiles[toIndex], newTiles[dragIndex]];
    setTiles(newTiles);
    setDragIndex(null);
  };

  const isCompleted = tiles.every((tile, index) => tile === correctOrder[index]);

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
     
    </div>
  );
}

export default Jigsaw;
