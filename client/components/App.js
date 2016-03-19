class App extends React.Component {
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