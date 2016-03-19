class VideoPlayer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + this.props.entry.id.videoId + '?autoplay=1'} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.entry.snippet.title}</h3>
          <div>{this.props.entry.snippet.description}</div>
        </div>
      </div>
    ); 
  }
}

window.VideoPlayer = VideoPlayer;
