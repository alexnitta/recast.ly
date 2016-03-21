var VideoPlayer = ({entry}) => (
  !entry ? <div>Loading . . .</div> :
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${entry.id.videoId}`}></iframe>
    </div>
    <div className="video-player-details">
      <h3>{entry.snippet.title}</h3>
      <div>{entry.snippet.description}</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;


