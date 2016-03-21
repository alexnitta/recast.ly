var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&videoEmbeddable=true&key=${options.key}`,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log('recast.ly: YouTube query success, data: ' + data);
      if (callback) {
        callback(data.items);
      }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('recast.ly: YouTube query failure, data: ' + data);
    }
  });
};

window.searchYouTube = searchYouTube;
