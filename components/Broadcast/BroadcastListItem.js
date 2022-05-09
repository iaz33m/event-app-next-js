import Link from "next/link";
import { Card, CardImg } from "reactstrap";
import PropTypes from "prop-types";
import VideoPlayer from "../../components/Common/Player";
import { isIOS } from "react-device-detect";

const renderMedia = ({ id, name, _links }, pos) => {
  const { preview_image_large, preview_image_small, teaser_small } = _links;

  if (teaser_small && !isIOS) {
    return (
      <VideoPlayer
        id={id}
        width="100%"
        autoPlay
        muted
        loop
        src={teaser_small.href}
        widthoutControlsBar
      />
    );
  }

  const src =
    pos == "live"
      ? preview_image_small || preview_image_large
      : preview_image_large || preview_image_small;

  return <CardImg top width="100%" src={src.href} alt={name} />;
};

const BroadcastListItem = ({ broadcast, pos }) => {
  const { id } = broadcast;

  return (
    <Card>
      <Link as={`/view/broadcast/${id}`} href={`/view/broadcast?id=${id}`}>
        <a>{renderMedia(broadcast, pos)}</a>
      </Link>
    </Card>
  );
};

BroadcastListItem.propTypes = {
  broadcast: PropTypes.any.isRequired,
  pos: PropTypes.string
};

export default BroadcastListItem;
