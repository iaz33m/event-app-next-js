import ChannelListItem from "./ChannelListItem";
import PropTypes from "prop-types";

const Channels = props => {
  const { channels } = props;
  return channels.map(c => <ChannelListItem key={c.id} channel={c} />);
};

Channels.propTypes = {
  channels: PropTypes.any.isRequired
};

export default Channels;
