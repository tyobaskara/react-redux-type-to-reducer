import { connect } from 'react-redux';
import './App.css';

import { actions as modalActions } from './redux/reducers/modal/modal.reducer';

const App = props => {
  const { showModal } = props.modal;
  console.log('modal', props.modal);

  return (
    <div className="App">
      <h1>Haloo</h1>
      <button onClick={() => props.showModal(true)}>Show Modal</button>
      <button onClick={() => props.showModal(false)}>Hide Modal</button>
      {showModal && <p>Modal Showed</p>}
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch => ({
  showModal: (val) => dispatch(modalActions.showModalAction(val))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
