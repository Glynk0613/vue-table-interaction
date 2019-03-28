import * as Constants from "../constants";

export default {
  [Constants.UPDATE_MEASURES_SRC](state, value) {
    if (!value.length) {
      value = [null];
    }
    state.measuresSrc = value;
  },
  [Constants.UPDATE_DIMENSIONS_SRC](state, value) {
    if (!value.length) {
      value = [null];
    }
    state.dimensionsSrc = value;
  },
  [Constants.UPDATE_MEASURES_QUE](state, value) {
    if (!value.length) {
      value = [null];
    }
    state.measuresQue = value;
  },
  [Constants.UPDATE_DIMENSIONS_QUE](state, value) {
    if (!value.length) {
      value = [null];
    }
    state.dimensionsQue = value;
  },
  [Constants.UPDATE_FILTERS_QUE](state, value) {
    if (!value.length) {
      value = [null];
    }
    state.filtersQue = value;
  },
  [Constants.UPDATE_RENDER_STATE](state, value) {
    state.resultSet = value;
  }
};
