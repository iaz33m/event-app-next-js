import Link from "next/link";
import { Card, CardImg } from "reactstrap";

import PropTypes from "prop-types";

const ChannelListItem = ({ channel }) => {
  const { id, name, _links } = channel;
  const { preview_image } = _links;
  return (
    <Card>
      <Link as={`/view/channel/${id}`} href={`/view/channel?id=${id}`}>
        <a>
          <CardImg top width="100%" src={preview_image.href} alt={name} />
        </a>
      </Link>
    </Card>
  );
};

ChannelListItem.propTypes = {
  channel: PropTypes.any.isRequired
};

export default ChannelListItem;
