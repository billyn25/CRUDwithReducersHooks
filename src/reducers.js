export const initialState = {
  task: []
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        task: [...state.task, action.payload]
      };
    case "DELETE":
      const filterArray = state.task.filter(
        (key, index) => index !== action.payload
      );
      return {
        task: filterArray
      };
    case "COMPLETE":
      const arrayTemp = [...state.task];
      arrayTemp[action.payload].status = !arrayTemp[action.payload].status;
      return {
        task: arrayTemp
      };
    case "EDIT":
      const newAarryEdit = [...state.task];
      newAarryEdit[action.payload.index].NombreTarea = action.payload.value;
      return {
        task: newAarryEdit
      };
    default:
      return state;
  }
}
