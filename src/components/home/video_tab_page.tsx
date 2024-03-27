const VideoPlayerPage = () => {
  return (
    <div className="container mt-5">
      <h1>Video Player</h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
