import React from 'react';
import { Box,
    LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Loading extends React.Component {
    render() {
        return (
            <Box component="div" visibility={this.props.loading ? 'visible' : 'hidden'}>
                <LinearProgress/>
            </Box>
        );
    }
}

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
}


const mapStateToProps = (state) => ({
    loading: state.loading.loading
});


export default connect(
    mapStateToProps
)(Loading)