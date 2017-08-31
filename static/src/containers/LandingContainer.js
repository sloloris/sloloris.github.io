import { connect } from 'react-redux';
import LandingContents from '../components/LandingContents';
import { setCurrentView } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  currentViewIndex: state.currentView
})

const mapDispatchToProps = {}


const LandingContentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingContents)