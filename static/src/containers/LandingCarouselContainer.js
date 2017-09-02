import { connect } from 'react-redux';
import LandingCarousel from '../components/LandingCarousel';
import { setCurrentView } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  currentViewIndex: state.currentView,
  viewItems: ownProps.viewItems,
  viewItemNames: ownProps.viewItemNames,
});

const mapDispatchToProps = {};


const LandingCarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingCarousel);

export default LandingCarouselContainer;