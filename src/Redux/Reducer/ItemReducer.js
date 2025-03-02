
const initialState = {
    activeTab: 'Hair Cut',
    selectedServices: [],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_ACTIVE_TAB:
        return {
          ...state,
          activeTab: action.payload,
        };
      case TOGGLE_SERVICE:
        const { data: serviceName } = action;
        return {
          ...state,
          selectedServices: state.selectedServices.includes(serviceName)
            ? state.selectedServices.filter((service) => service !== serviceName)
            : [...state.selectedServices, serviceName],
        };
      default:
        return state;
    }
  }
  