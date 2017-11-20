import AddTodoForm from '../components/AddTodoForm'

import { connect } from 'react-redux'
import { addTodo } from '../actions'


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text, color) => {
      dispatch(addTodo({text, color}))
    }
  }
};

let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodo
