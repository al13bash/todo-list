import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({categories}) => {

  const style = {
    marginTop: 20
  }

  const categoryAmount = (category) => {
    if (category.children.length === 0)
      return 1
    let counter = 0;
    for(let item of category.children) {
      counter += categoryAmount(item);
    }
    return counter + 1
  }

  const doneCategoryAmount = (category) => {
    let counter = 0;
    for(let item of category.children) {
      counter += doneCategoryAmount(item);
    }
    if (category.done === true)
      return counter + 1
    return counter
  }

  const categoryCalculations = (categories, callback) => {
    var counter = 0;
    for (let i of categories) {
      counter += callback(i)
    }
    return counter
  }

  const calcProgressValue = () => {
    let allCategory = categoryCalculations(categories, categoryAmount);
    let doneCategory = categoryCalculations(categories, doneCategoryAmount);
    console.log("DONE", doneCategory);
    return Math.round((100*doneCategory)/allCategory);
  }

  return (
      <LinearProgress mode="determinate" value={calcProgressValue()} style={style}/>
    );
}

export default ProgressBar;
