import React from 'react';
import Category from '../Category/Category';

const CategoryList = (props) => {

  const createNode = elem => {
    const style = {
      paddingLeft: 25,
      marginTop: 3
    }

    return(
      <div key={elem.id} style={style}>
        <Category
          elem={elem}
          changeDisplayedCategoryId={props.changeDisplayedCategoryId}
          edit={props.edit}
          todoId={props.todoId}
          changeTodosCategory={props.changeTodosCategory}
          displayedCategoryId={props.displayedCategoryId}
        />
        { elem.children.map((child) => createNode(child)) }
      </div>
    );
  }

  return(
    <div>
      { props.categories.map((elem, index) => createNode(elem)) }
    </div>
  );
}

export default CategoryList;
