import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar';

const mapStateToProps = state => { return { todos: state.todoApp.todos} }

const ProgressBarContainer = connect(mapStateToProps)(ProgressBar);

export default ProgressBarContainer;
