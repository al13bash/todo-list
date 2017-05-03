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
          deleteNode={props.removeCategory}
          changeDisplayedCategoryId={props.changeDisplayedCategoryId}
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
