var VideoList = ({entries, setNewVideo}) => {
  console.log(entries);
  var videoListEntries = entries.map((entry) => 
    <VideoListEntry 
      entry={entry} 
      setNewVideo={setNewVideo}
    />    
  );  

  return (
    <div className="video-list media">
      {videoListEntries}
    </div>
  );
};  

window.VideoList = VideoList;
