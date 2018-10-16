import { createReducerAction } from 'Store';

export const { nameSpace, action, reducer } = createReducerAction({
  nameSpace: 'home',

  initState: {
    loading: false,
    demoData: [],
  },

  reducer: {
    setLoading: (state, { payload }) => ({
      loading: payload,
    }),
    setDemoData: (state, { payload }) => ({
      demoData: payload,
    }),
  },
});
