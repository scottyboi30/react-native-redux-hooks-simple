// Action Types

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

// Action Creators

let noteID = 0;

export const addnote = note => {
  return {
    type: ADD_NOTE,
    payload: {
      id: noteID++,
      ...note
    }
  };
};

export const deletenote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};

// import the dependency
import remove from "lodash.remove";

// reducer

const initialState = [];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];

    case DELETE_NOTE:
      const deletedNewArray = remove(state, obj => {
        return obj.id != action.payload;
      });
      return deletedNewArray;

    default:
      return state;
  }
};

export default notesReducer;
