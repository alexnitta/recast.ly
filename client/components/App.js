class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      {/*current state has video ID, and exampleVideoData*/}
      currentVideo: '4ZAEBxGipoA',
      allVideos: {exampleVideoData}
    }
  }

  handleClick() {
    this.setState({
      currentVideo: {/*get video somehow*/}
    });
  }

  render() { 
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer entry={exampleVideoData[0]} />
        </div>
        <div className="col-md-5">
          <VideoList entries={exampleVideoData} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));