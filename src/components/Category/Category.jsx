import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      paper: {
        height: 40,
        width: 260,
        margin: "auto",
        display: "flex",
        alignItems:"center",
        justifyContent: "space-between",
        padding: 15
      },
      button: {
        padding: 0
      }
    }

    return(
      <Paper style={style.paper} zDepth={1} >
        <div>{this.props.elem.name}</div>
        <div>
          <IconButton>
            <ActionDelete />
          </IconButton>
          <IconButton style={style.button}>
            <ContentAdd />
          </IconButton>
        </div>
      </Paper>
    );
  }
}

export default Category;
