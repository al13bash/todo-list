import React from 'react';
import PropTypes from 'prop-types';
import Category from '../Category/Category.jsx';

const CategoryList = (props) => {
  const createNode = (elem) => {
    const style = {
      paddingLeft: 25,
      marginTop: 3,
    };

    return (
      <div key={elem.id} style={style}>
        <Category
          elem={elem}
          changeDisplayedCategoryId={props.changeDisplayedCategoryId}
          edit={props.edit}
          todo={props.todo}
          changeTodosCategory={props.changeTodosCategory}
          displayedCategoryId={props.displayedCategoryId}
          setPrevCategoryId={props.setPrevCategoryId}
        />
        { elem.children.map(child => createNode(child)) }
      </div>
    );
  };

  return (
    <div>
      { props.categories.map(elem => createNode(elem)) }
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  displayedCategoryId: PropTypes.number,
  changeDisplayedCategoryId: PropTypes.func.isRequired,
};

export default CategoryList;
