import React from "react";
import Sound from "react-sound";

const MusicWin = React.memo(function MusicW1n() {
  console.log("sound");
  return (
    <Sound
      url="./../music/game.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={300}
      // onLoading={this.handleSongLoading}
      //onPlaying={this.handleSongPlaying}
      //onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  );
});

export default MusicWin;
// }
