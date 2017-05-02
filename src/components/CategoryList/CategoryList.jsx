import React from 'react';
import Category from '../Category/Category';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.createNode = this.createNode.bind(this);
  }

  createNode(elem) {
    const style = {
      paddingLeft: 25,
      marginTop: 3
    }

    return(
      <div key={elem.id} style={style}>
        <Category
          elem={elem}
          deleteNode={this.props.removeCategory}
          changeDisplayedCategoryId={this.props.changeDisplayedCategoryId}
        />
        { elem.children.map((child) => this.createNode(child)) }
      </div>
    );
  }

  render() {
    return(
      <div>
        {
          this.props.categories.map((elem, index) => {
            return(this.createNode(elem));
          })
        }
      </div>
    );
  }
}

export default CategoryList;
