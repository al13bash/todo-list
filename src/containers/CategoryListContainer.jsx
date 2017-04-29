import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList/CategoryList';

const mapStateToProps = state => { return { categories: state.categories} }

const CategoryListContainer = connect(mapStateToProps)(CategoryList);

export default CategoryListContainer;
