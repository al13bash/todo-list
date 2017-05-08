import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

class TodoEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <form>
        <div>
          <button type="submit">Save changes</button>
          <button>Cancel</button>
        </div>
        <TextField
          floatingLabelText="Title"
          defaultValue={this.props.todo.title}
        />
        <Checkbox
          label="Done"
          checked={this.props.todo.done}
        />
        <TextField
          floatingLabelText="Description"
          multiLine={true}
          fullWidth={true}
          rowsMax={5}
        />
      </form>
    );
  }
}

export default TodoEditForm;