var VideoList = (props) => {
  var videoListEntries = props.entries.map((entry) => 
    <VideoListEntry 
      entry={entry} 
      setNewVideo={props.setNewVideo}
    />    
  );  

  return (
    <div className="video-list media">
    {videoListEntries}
    </div>
  );
};  

window.VideoList = VideoList;
