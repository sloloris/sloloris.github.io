import { connect } from 'react-redux';
import LandingMenu from '../components/LandingMenu';
import { setCurrentView } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  menuItems: ownProps.menuItems,
  currentViewIndex: state.currentView
})

const mapDispatchToProps = (dispatch) => ({
  onClickRender: (index) => {dispatch(setCurrentView(index))}
})


const LandingMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingMenu)