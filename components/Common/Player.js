import { Player, BigPlayButton, ControlBar, Shortcut } from "video-react";
import HLSSource from "../../utils/HLSSource";
import PropTypes from "prop-types";

const VideoPlayer = props => {
  const { widthoutControlsBar, streamSrc, playButton } = props;

  return (
    <Player {...props}>
      {/* Disable video play/pause when clicked on video view */}
      <Shortcut clickable={!widthoutControlsBar} />
      <BigPlayButton position="center" disabled={!playButton} />
      <ControlBar disabled={widthoutControlsBar} />
      {streamSrc ? <HLSSource isVideoChild src={streamSrc} /> : null}
    </Player>
  );
};

VideoPlayer.propTypes = {
  id: PropTypes.any.isRequired,
  src: PropTypes.string,
  streamSrc: PropTypes.string,
  poster: PropTypes.string,
  width: PropTypes.any,
  autoPlay: PropTypes.bool,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
  widthoutControlsBar: PropTypes.bool,
  playButton: PropTypes.bool
};

export default VideoPlayer;
