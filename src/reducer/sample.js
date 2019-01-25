// reducer
const initialState = {
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case SAMPLE:
      return Object.assign({},state, {
      });
    default:
      return state;
  }

}
