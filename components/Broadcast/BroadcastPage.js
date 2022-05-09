import React from "react";
import { CardImg } from "reactstrap";
import VideoPlayer from "../../components/Common/Player";
import PropTypes from "prop-types";

const renderMedia = broadcast => {
  const { name, _links } = broadcast;

  const { trailer, preview_image_large, preview_image_small } = _links;

  const src = trailer || preview_image_small || preview_image_large;

  if (trailer) {
    return (
      <VideoPlayer
        autoPlay={true}
        poster={preview_image_small.href}
        streamSrc={src.href}
        playButton={true}
      />
    );
  }

  return <CardImg top width="100%" src={src.href} alt={name} />;
};

const BroadcastPage = ({ broadcast }) => {
  const { name, description } = broadcast;
  return (
    <React.Fragment>
      {renderMedia(broadcast)}
      <h2>{name}</h2>
      <p>{description}</p>
    </React.Fragment>
  );
};

BroadcastPage.propTypes = {
  broadcast: PropTypes.any.isRequired
};

export default BroadcastPage;
