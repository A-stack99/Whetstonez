import { 
  ADD_TO_CART, 
  SET_SERVICES, 
  SELECT_SERVICE, 
  SET_ACTIVE_TAB, 
  TOGGLE_SERVICE, 
  SET_SEARCH_QUERY, 
  SET_FILTERED_RESULTS 
} from './ActionType';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  data: item,
});

export const setServices = (services) => ({
  type: SET_SERVICES,
  data: services,
});

export const selectService = (serviceId) => ({
  type: SELECT_SERVICE,
  data: serviceId,
});

export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  data: tab,
});

export const toggleService = (serviceName) => ({
  type: TOGGLE_SERVICE,
  data: serviceName,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  data: query,
});

export const setFilteredResults = (results) => ({
  type: SET_FILTERED_RESULTS,
  data: results,
});

export const fetchServices = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://be.anaqa.sa/api/admin/service/get-services');
      
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      
      const data = await response.json();
      
      dispatch(setServices(data));
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };
};
