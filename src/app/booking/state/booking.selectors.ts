import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BOOKING_FEATURE_KEY, BookingState } from './booking.reducer';

export const selectBookingState = createFeatureSelector<BookingState>(BOOKING_FEATURE_KEY);

export const selectRoom = createSelector(selectBookingState, (state) => state.room);
