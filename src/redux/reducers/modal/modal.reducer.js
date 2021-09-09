import { createAction } from 'redux-action';
import typeToReducer from 'type-to-reducer';

const SHOW_MODAL = 'SHOW_MODAL';

const showModalAction = createAction(SHOW_MODAL);
// showModal: (val) => dispatch(showModalAction(val))
// props.showModal(true);
// equal to dispatch({ type: ACCOUNT_ACTIVATION_HIDE_MODAL, payload: val });

export const actions = {
  showModalAction
}

const initialState = {
  showModal: false
};

const showModalHandler = (state, action) => ({
  ...state,
  showModal: action.payload
});

export default typeToReducer({
  [SHOW_MODAL]: showModalHandler
}, initialState);
