const defaultState = [];
const ADDPRODUCT = "ADDPRODUCT";

export const addAction = (newProduct)=>{
    return {type:ADDPRODUCT, payload:newProduct}
}
export const productsReducer = (state = defaultState, action) => {
  if (action.type === ADDPRODUCT) {
    return [...state,action.payload]
  }  else {
    return state;
  }
};
