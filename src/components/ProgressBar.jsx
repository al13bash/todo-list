import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({state}) => {

  const style = {
    marginTop: 20
  }

  const calcProgressValue = () => {
    let todoAmount = state.length;
    let doneTodoAmount = state.filter((elem) => elem.done === true).length;
    let progress = Math.round((100*doneTodoAmount)/todoAmount);
    return progress;
  }

  return (
      <LinearProgress mode="determinate" value={calcProgressValue()} style={style}/>
    );
}

export default ProgressBar;
