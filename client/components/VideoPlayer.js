var VideoPlayer = (props) => {
  console.dir('props: ' + JSON.stringify(props.entry.id.videoId));
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.entry.id.videoId}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.entry.snippet.title}</h3>
        <div>{props.entry.snippet.description}</div>
      </div>
    </div>
  );
}; 


window.VideoPlayer = VideoPlayer;


