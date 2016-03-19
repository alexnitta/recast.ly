var VideoListEntry = (props) => {
  // console.log('props: ' + props);
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.entry.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">  
        <div className="video-list-entry-title" onClick={(event) => props.setNewVideo(props.entry)}>{props.entry.snippet.title}</div>
        <div className="video-list-entry-detail">{props.entry.snippet.description}</div>
      </div>
    </div>
  );
};

window.VideoListEntry = VideoListEntry;



