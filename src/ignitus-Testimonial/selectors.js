import { createSelector } from 'reselect';

export const selectTestimonialState = state => state.TestimonialReducer;

export const makeSelectTestimonialData = () => createSelector(selectTestimonialState, (substate) => {
  if (substate && substate.length > 0) {
    return substate[0].data;
  }
  return [];
});
