import React, { useState } from "react";
import "./App.css";

function App() {

  const [currentMood, setCurrentMood] = useState("");

  const moodData = {
    Happy: {
      emoji: "😊",
      color: "#ffc0cb",
      text: "Feeling great today!"
    },
    Neutral: {
      emoji: "😐",
      color: "#d3d3d3",
      text: "Just a regular day."
    },
    Sad: {
      emoji: "😢",
      color: "#fff176",
      text: "Hope things get better."
    },
    Angry: {
      emoji: "😡",
      color: "#ff6b6b",
      text: "Take a deep breath."
    }
  };

  const selectMood = (mood) => {
    setCurrentMood(mood);
  };

  return (

    <div
      className="page"
      style={{
        backgroundColor: currentMood
          ? moodData[currentMood].color
          : "#f4f6f9"
      }}
    >

      <div className="box">

        <h1>Mood Selector</h1>

        {currentMood && (
          <>
            <div className="emoji">
              {moodData[currentMood].emoji}
            </div>

            <p className="text">
              {moodData[currentMood].text}
            </p>
          </>
        )}

        <div className="mood-buttons">

          {Object.keys(moodData).map((m) => (

            <button
              key={m}
              onClick={() => selectMood(m)}
            >
              {moodData[m].emoji} {m}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}

export default App;