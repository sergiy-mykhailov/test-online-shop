
import AppConstants from '../constants/AppConstants';

const initialState = {
    name:       '',
    isAdmin:    false,
    isLogged:   false
};

const user = (state = initialState, action) => {
    switch (action.type) {

        case AppConstants.USER_SET:
            return {
                name:       action.user.name,
                isAdmin:    action.user.isAdmin,
                isLogged:   true
            };

        default:
            return state
    }
};

export default user;
