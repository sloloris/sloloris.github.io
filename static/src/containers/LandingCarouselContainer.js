import { connect } from 'react-redux';
import LandingCarousel from '../components/LandingCarousel';
import { setCurrentView } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  currentViewIndex: state.currentView
});

const mapDispatchToProps = {};


const LandingCarouselContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingCarousel);

export default LandingCarouselContainer;