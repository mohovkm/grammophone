import React from 'react';
import ReactPlayer from "react-player";
 
function App() {
  return (
    <div>
      <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
      <ReactPlayer
        url="https://kmokhov.ams3.digitaloceanspaces.com/player/05_18_03.mp3"
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}
 
export default App;