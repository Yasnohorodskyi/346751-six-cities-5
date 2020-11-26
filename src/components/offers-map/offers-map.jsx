import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import leaflet from "leaflet";

class OffersMap extends PureComponent {
  constructor(props) {
    super(props);

    this.mapContainer = React.createRef();
    this.map = null;
    this.markersGroup = null;
  }

  componentDidMount() {
    const {offers, activeCard, currentOffer} = this.props;
    const activeZoomControl = this.props.activeZoomControl;
    const activeScrollWheelZoom = this.props.activeScrollWheelZoom;

    const centerCity = [offers[0].city.location.latitude, offers[0].city.location.longitude];
    const zoom = offers[0].city.location.zoom;

    this.map = leaflet.map(this.mapContainer.current, {
      center: centerCity,
      zoom,
      zoomControl: activeZoomControl,
      scrollWheelZoom: activeScrollWheelZoom,
      marker: true
    });
    let icon;
    this.map.setView(centerCity, zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    this.markersGroup = leaflet.layerGroup().addTo(this.map);

    if (currentOffer) {
      const offerCords = [currentOffer.location.latitude, currentOffer.location.longitude];

      icon = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [27, 39]
      });

      leaflet
        .marker(offerCords, {icon})
        .addTo(this.markersGroup);
    }

    offers.map((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];

      if (offer.id === activeCard) {
        icon = leaflet.icon({
          iconUrl: `img/pin-active.svg`,
          iconSize: [27, 39]
        });
      } else {
        icon = leaflet.icon({
          iconUrl: `img/pin.svg`,
          iconSize: [27, 39]
        });
      }

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
    const {currentOffer, offers, activeCard} = this.props;
    const centerCity = [offers[0].city.location.latitude, offers[0].city.location.longitude];
    this.map.setView(centerCity);
    this.map.removeLayer(leaflet.marker);
    let icon;

    if (currentOffer) {
      const offerCords = [currentOffer.location.latitude, currentOffer.location.longitude];

      icon = leaflet.icon({
        iconUrl: `img/pin-active.svg`,
        iconSize: [27, 39]
      });

      leaflet
        .marker(offerCords, {icon})
        .addTo(this.markersGroup);
    }

    offers.map((offer) => {
      const offerCords = [offer.location.latitude, offer.location.longitude];

      if (offer.id === activeCard) {
        icon = leaflet.icon({
          iconUrl: `img/pin-active.svg`,
          iconSize: [27, 39]
        });
      } else {
        icon = leaflet.icon({
          iconUrl: `img/pin.svg`,
          iconSize: [27, 39]
        });
      }

      leaflet
        .marker(offerCords, {icon})
        .addTo(this.markersGroup);
    });
  }
}

OffersMap.propTypes = {
  currentOffer: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ]),
  offers: PropTypes.array.isRequired,
  activeCard: PropTypes.number.isRequired,
  activeZoomControl: PropTypes.bool.isRequired,
  activeScrollWheelZoom: PropTypes.bool.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  activeCard: PROCESS.activeCard,
});

export {OffersMap};
export default connect(mapStateToProps)(OffersMap);
