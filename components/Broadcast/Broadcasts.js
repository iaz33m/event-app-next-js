import BroadcastListItem from "./BroadcastListItem";
import PropTypes from "prop-types";

const Broadcasts = props => {
  const { broadcasts, pos } = props;
  return broadcasts.map(broadcast => (
    <BroadcastListItem key={broadcast.id} broadcast={broadcast} pos={pos} />
  ));
};

Broadcasts.propTypes = {
  broadcasts: PropTypes.any.isRequired,
  pos: PropTypes.string
};

export default Broadcasts;
