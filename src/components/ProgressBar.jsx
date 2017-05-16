import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({ categories }) => {
  const style = {
    marginTop: 20,
  };

  const categoryAmount = (category) => {
    if (category.children.length === 0) { return 1; }
    let counter = 0;
    category.children.forEach((item) => {
      counter += categoryAmount(item);
    });
    return counter + 1;
    // for (const item of category.children) {
    //   counter += categoryAmount(item);
    // }
    // return counter + 1;
  };

  const doneCategoryAmount = (category) => {
    let counter = 0;
    category.children.forEach((item) => {
      counter += doneCategoryAmount(item);
    });
    // for (const item of category.children) {
    //   counter += doneCategoryAmount(item);
    // }
    if (category.done === true) { return counter + 1; }
    return counter;
  };

  const categoryCalculations = (callback) => {
    let counter = 0;
    categories.forEach((i) => {
      counter += callback(i);
    });
    // for (const i of categories) {
    //   counter += callback(i);
    // }
    return counter;
  };

  const calcProgressValue = () => {
    const allCategory = categoryCalculations(categoryAmount);
    const doneCategory = categoryCalculations(doneCategoryAmount);
    return Math.round((100 * doneCategory) / allCategory);
  };

  return (
      <LinearProgress mode="determinate" value={calcProgressValue()} style={style}/>
  );
};

export default ProgressBar;
