class VideoList extends React.Component {

  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <div className="video-list media">
        {props.entries.map(entry => 
          <VideoListEntry entries={entry}/>    
        )}
      </div>
    );
  }

}

window.VideoList = VideoList;
