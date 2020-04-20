import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/actions'

function UserContainer({userData, fetchUsers}) {

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <div>
            {
              userData.loading ? 
                <div>Loading data...</div> :
                    userData.error ? 
                    <div>{userData.error}</div>:
                    userData.users.map(item => (
                        <p
                            key={item.name}
                        >
                            {item.name}
                        </p>
                    ))  

            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.userReducer
    }
}

export default connect(mapStateToProps, {fetchUsers})(UserContainer)
