import React, { useState } from "react";
import "../css/thomas.css";
import { Link } from "react-router-dom";

function Thomas() {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const result = () => {
    if (answer == "5") {
      setMessage("Good answer!");
    } else {
      document.getElementById("audio").play();
    }
  };

  return (
    <div>
      <Link to="/">
        <button className="button buttonHome">Home</button>
      </Link>
      <h2>Für dich lieber Thomas</h2>
      <div className="thomasFlex">
        <img src="./IMG_8825.jpg" alt="thomas" id="thomasBild" />
        <div className="thomasText">
          <h3>Weihnachtsrätsel:</h3>
          <p>
            Wenn die fünf Elfen des Weihnachtsmanns fünf Minuten brauchen, um
            fünf Puppen herzustellen, wie lange brauchen dann wohl 100 Elfen, um
            100 Puppen herzustellen?
          </p>
          <input
            onChange={(e) => setAnswer(e.target.value)}
            type="text"
            placeholder="Antwort"
            id="input"
            value={answer}
          />
          <button onClick={result} className="button">
            Antwort senden
          </button>
          <div className="antwortRichtig">
            <p>{message}</p>
          </div>
          <div className="antwortFalsch">
            <audio controls autoplay id="audio">
              <source
                src="https://www.w3schools.com/html/horse.mp3"
                type="audio/mp3"
              />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thomas;
