import Link from "next/link";
import { Card, CardImg } from "reactstrap";
import PropTypes from "prop-types";
import VideoPlayer from "../../components/Common/Player";
import { isIOS } from "react-device-detect";

const renderMedia = advert => {
  const { id, name, _links } = advert;
  const { preview_image_small, teaser_small } = _links;
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

  return <CardImg top width="100%" src={preview_image_small.href} alt={name} />;
};

const AdvertListItem = ({ advert }) => {
  const { id } = advert;
  return (
    <Card>
      <Link as={`/view/advert/${id}`} href={`/view/advert?id=${id}`}>
        <a>{renderMedia(advert)}</a>
      </Link>
    </Card>
  );
};

AdvertListItem.propTypes = {
  advert: PropTypes.any.isRequired
};

export default AdvertListItem;
