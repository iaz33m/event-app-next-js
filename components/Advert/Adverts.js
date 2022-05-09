
import AdvertsListItem from './AdvertsListItem';
import PropTypes from "prop-types";

const Adverts = props => {
  const { adverts } = props;
  return (
    adverts.map(advert => <AdvertsListItem key={advert.id} advert={advert}/>) 
  );
};

Adverts.propTypes = {
  adverts: PropTypes.any.isRequired
};

export default Adverts;
