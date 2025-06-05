export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
export const REMOVE = (item) => {
  return {
    type: "REMOVE_CART",
    payload: item,
  };
};
export const DECREMENT = (item) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: item,
  };
};
export const INCREMENT = (item) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: item,
  };
};


export const SET_FLAVORS = "SET_FLAVORS";

export const setFlavors = (flavorData) => {
  return {
    type: SET_FLAVORS,
    payload: flavorData,
  };
};
