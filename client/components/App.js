class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: exampleVideoData
    };
  }
  
  componentDidMount() {
    this.getYouTubeVideos('ida red');
  }
  
  getYouTubeVideos(query) {  
    var options = {
      query: query,
      max: 8,
      key: YOUTUBE_API_KEY
    };
    
    searchYouTube(options, videos => 
      this.setState({
        currentVideo: videos[0],
        allVideos: videos
      })
    ); 
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
