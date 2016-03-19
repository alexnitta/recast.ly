//props. entries = window.exampleVideoData

class VideoListEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.entries.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.props.entries.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.entries.snippet.description}</div>
        </div>
      </div>
    );
  }
}

window.VideoListEntry = VideoListEntry;

