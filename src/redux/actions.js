export const Type = {
  GET_VALUE_CURRENTLY: 'GET_VALUE_CURRENTLY',
  GET_NAME_CURRENTLY: 'GET_NAME_CURRENTLY',
};

export function getName(arr) {
  return {
    type: Type.GET_NAME_CURRENTLY,
    payload: arr,
  };
}
export function getValue(obj) {
  return {
    type: Type.GET_VALUE_CURRENTLY,
    payload: obj,
  };
}
