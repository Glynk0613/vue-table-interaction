let state = {
  measuresSrc: [
    { id: "price", label: "Price", mode: 0 },
    { id: "row_id", label: "Row Id", mode: 0 },
    { id: "units", label: "Units", mode: 0 }
  ],
  dimensionsSrc: [
    { id: "Model", label: "Model", dMode: 1, fMode: 0, fParam: null },
    { id: "Period", label: "Period", dMode: 1, fMode: 0, fParam: null },
    { id: "Region", label: "Region", dMode: 1, fMode: 0, fParam: null },
    { id: "Scenario", label: "Scenario", dMode: 1, fMode: 0, fParam: null }
  ],
  measuresQue: [null],
  dimensionsQue: [null],
  filtersQue: [null]
};

export default state;
