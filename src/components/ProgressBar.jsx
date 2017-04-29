import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({todos}) => {

  const style = {
    marginTop: 20
  }

  const calcProgressValue = () => {
    let todoAmount = todos.length;
    let doneTodoAmount = todos.filter((elem) => elem.done === true).length;
    let progress = Math.round((100*doneTodoAmount)/todoAmount);
    return progress;
  }

  return (
      <LinearProgress mode="determinate" value={calcProgressValue()} style={style}/>
    );
}

export default ProgressBar;
