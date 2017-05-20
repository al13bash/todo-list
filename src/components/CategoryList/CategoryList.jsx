import React from 'react';
import PropTypes from 'prop-types';
import Category from '../Category/Category.jsx';

const CategoryList = (props) => {
  const createNode = (elem) => {
    const style = {
      paddingLeft: 20,
      marginTop: 2,
    };

    return (
      <div key={elem.id} style={style}>
        <Category
          category={elem}
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
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    categoryId: PropTypes.number.isRequired,
  }),
  edit: PropTypes.bool,
  categories: PropTypes.array.isRequired,
  displayedCategoryId: PropTypes.number,
  changeDisplayedCategoryId: PropTypes.func.isRequired,
  setPrevCategoryId: PropTypes.func,
};

export default CategoryList;
