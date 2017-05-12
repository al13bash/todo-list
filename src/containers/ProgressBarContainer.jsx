import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar';

const mapStateToProps = state => { return { categories: state.todoApp.present.categories} }

const ProgressBarContainer = connect(mapStateToProps)(ProgressBar);

export default ProgressBarContainer;
