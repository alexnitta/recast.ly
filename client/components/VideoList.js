class VideoList extends React.Component {

  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <div className="video-list media">
        {/* maps elements from exampleVideoData to VideoList props */} 
        {this.props.entries.map(entry => 
          <VideoListEntry entries={entry} />    
        )}
      </div>
    );
  }

}

window.VideoList = VideoList;
