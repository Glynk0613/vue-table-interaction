import * as Constants from "../constants";

export default {
  [Constants.UPDATE_MEASURES_SRC](state, value) {
    state.measuresSrc = value;
  },
  [Constants.UPDATE_DIMENSIONS_QUE](state, value) {
    state.dimensionsSrc = value;
  },
  [Constants.UPDATE_MEASURES_QUE](state, value) {
    state.measuresQue = value;
  },
  [Constants.UPDATE_DIMENSIONS_QUE](state, value) {
    state.dimensionsQue = value;
  },
  [Constants.UPDATE_FILTERS_QUE](state, value) {
    state.filtersQue = value;
  }
};
