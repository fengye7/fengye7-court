import { useEffect, useRef } from 'react';

const VideoPlayerPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
    // 获取父元素的宽度和高度
    const parentWidth = iframeRef.current.parentElement?.offsetWidth || 1200;
    const parentHeight = iframeRef.current.parentElement?.offsetHeight || 675;

    // 设置 iframe 的宽度和高度为父元素的宽度和高度
    iframeRef.current.width = parentWidth.toString();
    iframeRef.current.height = parentHeight.toString();
    }
  }, [iframeRef]);

  return (
    <div className="container mt-5">
      <h1>梦似醉</h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          ref={iframeRef}
          className="embed-responsive-item"
          src="https://live.douyin.com/569480017381?is_aweme_tied=1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
