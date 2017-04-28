import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar';
import * as actions from '../actions';

const mapStateToProps = state => { return {state} }

const ProgressBarContainer = connect(mapStateToProps)(ProgressBar);

export default ProgressBarContainer;
