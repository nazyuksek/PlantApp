import {createSlice} from '@reduxjs/toolkit';

interface OnboardingState {
  hasOnboarded: boolean;
}

const initialState: OnboardingState = {
  hasOnboarded: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    completeOnboarding(state) {
      state.hasOnboarded = true;
    },
  },
});

export const {completeOnboarding} = onboardingSlice.actions;
export default onboardingSlice.reducer;
