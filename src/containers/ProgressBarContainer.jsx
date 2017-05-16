import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar.jsx';

const mapStateToProps = state => ({ categories: state.todoApp.present.categories });

const ProgressBarContainer = connect(mapStateToProps)(ProgressBar);

export default ProgressBarContainer;
