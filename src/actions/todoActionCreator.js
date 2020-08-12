export const addTodo = (itemStr) => {
    return {type:"ADD_TODO", itemStr : itemStr}

}

export const deleteTodo = (id) => {
    return {type : "DELETE_TODO",id:id}
}