import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/todoActionCreator";

class TodoList extends React.Component {
  render = () => {
    return (
      <ul className="list-group">
        {this.props.tasks.map((item) => {
          return (
            <li className="list-group-item" key={item.id}>
              <span>
                <span>{item.title}</span>
                <span
                  className="float-right"
                  onClick={this.props.deleteTodo.bind(this, item.id)}
                >
                  Delete
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    );
  };
}

const mapStateToProps = (state) => {
  return{
    tasks : state.items , //state.items==items is gloabl from index.js
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo : (id) => dispatch(deleteTodo(id)),
  }
};

// const mapStateToProps =  (state, ownProps) =>{
//   return {
//     prop:state.prop
//   }
// }



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);