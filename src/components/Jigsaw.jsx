import React, { useState, useEffect } from "react"; 
import "./Jigsaw.css";
import jigsawImage from "../assets/jigsaw.jpg";
import nb from "../assets/nb.png";
import nbhover from "../assets/hovernb.png";
import Loading from "./Load";

const gridSize = 3;
const totalTiles = gridSize * gridSize;
const correctOrder = [...Array(totalTiles).keys()];

function Jigsaw({ setPage }) {
  const [tiles, setTiles] = useState([]);
  const [dragIndex, setDragIndex] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [goNext, setGoNext] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

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

  useEffect(() => {
    if (goNext) {
      const timeout = setTimeout(() => {
        setPage("load");
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [goNext]);

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

  const handleNextButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);
    setTimeout(() => {
      setGoNext(true);
    }, 3000); // ต้องให้เวลาพอหลัง fade-out ค่อยไปหน้าใหม่
  };

  return (
    <>
      {goNext ? (
        <Loading />
      ) : (
        <>
          <div className={`jigsaw-grid ${isFadingOut ? "fade-out" : ""}`}>
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

          {showNextButton && (
            <div
              className={`next-button-container ${isClicked ? "slide-up" : ""}`}
              onClick={handleNextButtonClick}
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
        </>
      )}
    </>
  );
}

export default Jigsaw;
