class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData
    };
  }

  setNewVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() { 
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer entry={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList 
            entries={this.state.allVideos} 
            setNewVideo={this.setNewVideo.bind(this)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));