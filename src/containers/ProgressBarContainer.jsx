import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar';

const mapStateToProps = state => { return { categories: state.todoApp.categories} }

const ProgressBarContainer = connect(mapStateToProps)(ProgressBar);

export default ProgressBarContainer;
