import React from "react";
import Sound from "react-sound";

const MusicDIno = React.memo(function MusicDino() {
  console.log("sound");
  return (
    <Sound
      url="./../music/yoshishort.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={300}
      // onLoading={this.handleSongLoading}
      //onPlaying={this.handleSongPlaying}
      //onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  );
});

export default MusicDIno;
// }
