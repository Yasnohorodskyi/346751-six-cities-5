import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class OffersMap extends PureComponent {
  constructor(props) {
    super(props);

    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    const zoom = 12;
    const map = leaflet.map(this.mapContainer.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    const {offers} = this.props;
    offers.forEach((offer) => {
      const offerCords = [offer[`coordinates`][0], offer[`coordinates`][1]];
      leaflet
        .marker(offerCords, {icon})
        .addTo(map);
    });
  }

  render() {

    return (
      <section className="cities__map map">
        <div
          id="map"
          ref={this.mapContainer}
          style={{width: `100%`, height: `100%`}}
        ></div>
      </section>
    );
  }
}

OffersMap.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default OffersMap;
