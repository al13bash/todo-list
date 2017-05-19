import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';

const ProgressBar = ({ categories }) => {
  const categoryAmount = (category) => {
    if (category.children.length === 0) { return 1; }
    let counter = 0;
    category.children.forEach((item) => {
      counter += categoryAmount(item);
    });
    return counter + 1;
  };

  const doneCategoryAmount = (category) => {
    let counter = 0;
    category.children.forEach((item) => {
      counter += doneCategoryAmount(item);
    });
    if (category.done === true) { return counter + 1; }
    return counter;
  };

  const categoryCalculations = (callback) => {
    let counter = 0;
    categories.forEach((i) => {
      counter += callback(i);
    });
    return counter;
  };

  const calcProgressValue = () => {
    const allCategory = categoryCalculations(categoryAmount);
    const doneCategory = categoryCalculations(doneCategoryAmount);
    return Math.round((100 * doneCategory) / allCategory);
  };

  return (
      <LinearProgress mode="determinate" value={calcProgressValue()} />
  );
};

ProgressBar.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ProgressBar;
