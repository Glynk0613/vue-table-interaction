import * as Constants from "../constants";

let updateMeasuresSrc = ({ commit }, payload) => {
  commit(Constants.UPDATE_MEASURES_SRC, payload);
};

let updateDimensionsSrc = ({ commit }, payload) => {
  commit(Constants.UPDATE_DIMENSIONS_SRC, payload);
};

let updateMeasuresQue = ({ commit }, payload) => {
  commit(Constants.UPDATE_MEASURES_QUE, payload);
};

let updateDimensionsQue = ({ commit }, payload) => {
  commit(Constants.UPDATE_DIMENSIONS_QUE, payload);
};

let updateFiltersQue = ({ commit }, payload) => {
  commit(Constants.UPDATE_FILTERS_QUE, payload);
};

export { updateMeasuresSrc };
export { updateDimensionsSrc };
export { updateMeasuresQue };
export { updateDimensionsQue };
export { updateFiltersQue };
