import { SET_SEARCH_QUERY, SET_FILTERED_RESULTS } from '../Action/ActionType';

const initialState = {
  searchQuery: '',
  filteredResults: [],
  allResults: [
    {
      salonName: 'Hair Avenue',
      location: 'Lakewood, California',
      distance: '2 km',
      rating: '4.7',
      reviews: '312',
      imageUrl: require('../../assests/Images/Salon1.png'),
    },
    {
      salonName: 'Beauty Bliss',
      location: 'Los Angeles, California',
      distance: '5 km',
      rating: '4.5',
      reviews: '210',
      imageUrl: require('../../assests/Images/Salon2.png'),
    },
    {
      salonName: 'Nail Studio',
      location: 'Hollywood, California',
      distance: '3 km',
      rating: '4.2',
      reviews: '156',
      imageUrl: require('../../assests/Images/Salon3.png'),
    },
    {
      salonName: 'Shine Salon',
      location: 'Santa Monica, California',
      distance: '8 km',
      rating: '4.6',
      reviews: '98',
      imageUrl: require('../../assests/Images/Salon3.png'),
    },
  ],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.data,
      };

    case SET_FILTERED_RESULTS:
      return {
        ...state,
        filteredResults: action.data,
      };

    default:
      return state;
  }
};

export default searchReducer;
