import React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      paper: {
        height: 25,
        width: 200,
        margin: "auto",
        display: "flex",
        alignItems:"center",
        justifyContent: "space-between",
        padding: 15,
        fontSize: 14
      }
    }

    return(
      <Paper style={style.paper} zDepth={1} >
        <Checkbox
          id={this.props.elem.id}
          label={this.props.elem.name}
        />
      </Paper>
    );
  }
}

export default Category;