import { AT_POSTS } from './action-types';

const END_POINT = 'https://jsonplaceholder.typicode.com';

export const readAllPost = () => {
  // eslint-disable-next-line func-names
  return function(dispatch) {
    fetch(`${END_POINT}/posts`)
      .then(response => response.json())
      .then(response => {
        dispatch({ type: AT_POSTS.READ_ALL, payload: response });
      })
      .catch(error => {
        dispatch({ type: AT_POSTS.ERROR, payload: error });
      });
  };
};
