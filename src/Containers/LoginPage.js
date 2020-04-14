import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthActions} from '../Stores/Auth/Actions';
import {AuthSelectors} from '../Stores/Auth/Selectors';
import {LoadingSelectors} from '../Stores/Loading/Selectors';
import LogingPage from '../Components/pages/LoginPage';

const LoginPageContainer = ({loading, authLogin, authToken}) => {
    return (
        <div>
            <LogingPage loading={loading} authLogin={authLogin} authToken={authToken}/>
        </div>
    );
};

LoginPageContainer.propTypes = {
    loading: PropTypes.bool,
    authLogin: PropTypes.func,
    authToken: PropTypes.string,
};
const mapStateToProps = state => ({
    loading: LoadingSelectors.loading(state),
    authToken: AuthSelectors.authToken(state),
})
const mapDispatchToProps = dispatch => ({
    authLogin: valueLogin => dispatch(AuthActions.authLogin(valueLogin)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);