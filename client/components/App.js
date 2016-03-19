class App extends React.Component {
  render() { 
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer/>
        </div>
        <div className="col-md-5">
          <VideoList entries={this.props.entries} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App entries={window.exampleVideoData}/>, document.getElementById('app'));