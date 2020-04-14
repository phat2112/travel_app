import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {UserActions} from '../Stores/Users/Actions'
import {UserSelectors} from '../Stores/Users/Selectors'
import {LoadingSelectors} from '../Stores/Loading/Selectors'
import ListProfileUser from '../Components/pages/ListProfileUser'

const ListProfileUserContainer = ({getListUser, listUser,loading}) => {
    useEffect(() => {
        getListUser()
    }, [])
    return (
        <div>
            <ListProfileUser listUser={listUser} loading={loading}/>
        </div>
    );
};

ListProfileUserContainer.propTypes = {
    getListUser: PropTypes.func,
    listUser: PropTypes.any,
};
const mapStateToProps = state => ({
    listUser: UserSelectors.getListUser(state),
    loading: LoadingSelectors.loading(state),
})
const mapDispatchToProps = dispatch => ({
    getListUser: () => dispatch(UserActions.getUserList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListProfileUserContainer);