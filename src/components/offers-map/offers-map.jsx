import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class OffersMap extends PureComponent {
  constructor(props) {
    super(props);

    this.mapContainer = React.createRef();
    this.map = null;
    this.markersGroup = null;
  }

  componentDidMount() {
    const activeZoomControl = this.props.activeZoomControl;
    const activeScrollWheelZoom = this.props.activeScrollWheelZoom;

    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    const zoom = 12;
    this.map = leaflet.map(this.mapContainer.current, {
      center: city,
      zoom,
      zoomControl: activeZoomControl,
      scrollWheelZoom: activeScrollWheelZoom,
      marker: true
    });
    this.map.setView(city, zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    const {offers} = this.props;
    this.markersGroup = leaflet.layerGroup().addTo(this.map);
    offers.forEach((offer) => {
      const offerCords = [offer[`coordinates`][0], offer[`coordinates`][1]];
      leaflet
        .marker(offerCords, {icon})
        .addTo(this.markersGroup);
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

  componentDidUpdate() {
    this.markersGroup.clearLayers();
    const {offers} = this.props;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39]
    });
    this.map.removeLayer(leaflet.marker);
    offers.forEach((offer) => {
      const offerCords = [offer[`coordinates`][0], offer[`coordinates`][1]];
      leaflet
        .marker(offerCords, {icon})
        .addTo(this.markersGroup);
    });
  }
}

OffersMap.propTypes = {
  offers: PropTypes.array.isRequired,
  activeZoomControl: PropTypes.bool.isRequired,
  activeScrollWheelZoom: PropTypes.bool.isRequired,
};

export default OffersMap;
