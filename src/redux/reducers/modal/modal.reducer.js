import { createAction } from 'redux-action';
import typeToReducer from 'type-to-reducer';

const SHOW_MODAL = 'SHOW_MODAL';

const showModalAction = createAction(SHOW_MODAL);

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
