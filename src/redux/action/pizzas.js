import axios from 'axios';

export const setLoaded = (payload) => {
  return {
    type: 'SET_LOADED',
    payload,
  };
};

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/pizzas?${category === null ? '' : `category=${category}`}&_sort=${sortBy}&_order=${
        sortBy === `name` ? `asc` : `desc`
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export function setPizzas(items) {
  return { type: 'SET_PIZZAS', payload: items };
}
