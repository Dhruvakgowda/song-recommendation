import "./styles.css";
import { useState } from "react";

const Songs = {
  Pop: [
    { songName: "Get Into it", Singer: "Doja Cat" },
    { songName: "Cradles", Singer: "Sub Urban" }
  ],

  Rock: [
    { songName: "Sky is the limit", Singer: "Supreme Devices" },
    { songName: "Run free", Singer: "Deep chills" }
  ],

  Vocal: [
    { songName: "Dont know why", Singer: "We are fury" },
    { songName: "Let me down slowly", Singer: "Alec Benjamin" }
  ]
};

var Pop2 = [
  { songName: "Get into it", Singer: "Singer1" },
  { songName: "Cradles", Singer: "Singer2" }
];

export default function App() {
  const [songGenre, setSongGenre] = useState([]);

  function clickHandler(event) {
    setSongGenre(Songs[event.target.name]);
    //console.log(songGenre);
  }

  return (
    <div className="App">
      <h1>🎵Song Recommendation🎵</h1>
      <hr></hr>

      <p>Select songs by genre for my recommendations </p>
      <div id="buttons">
        <button onClick={clickHandler} name="Pop">
          Pop
        </button>
        <button onClick={clickHandler} name="Rock">
          Rock
        </button>
        <button onClick={clickHandler} name="Vocal">
          Vocal
        </button>
      </div>
      <div className="list">
        <hr></hr>
        {songGenre.map((item) => (
          <ul>
            <li key={item} className="li">
              {item.songName}
            </li>
            <i>
              <small>
                <li key={item}>-{item.Singer}</li>
              </small>
            </i>
          </ul>
        ))}
      </div>
    </div>
  );
}
