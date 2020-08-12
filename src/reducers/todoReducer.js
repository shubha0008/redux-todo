const initialState = [
    {id: 1, title : "Buy"},
    {id: 2, title : "Practice"}
]

const todoReducer = (state = initialState , action) => {
    switch(action.type){
        case "ADD_TODO":
          const id = Math.floor(Math.random() * 100) + 1;
          const todoObj = { id: id, title: action.itemStr };
          return [...state, todoObj]
        case "DELETE_TODO":
           return [...state].filter((item) => item.id != action.id)
        default: 
           return state;

    }
}

export default todoReducer;