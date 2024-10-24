interface LoginAction {
    type: 'LOGIN';
    username: string
}

interface LogoutAction {
    type: 'LOGOUT'

}

type logAction = LoginAction | LogoutAction;

const loginReducer = (state: string, action: logAction) : string => {
    if(action.type === 'LOGIN') return action.username;
    if(action.type === 'LOGOUT') return 'You are not loged in';
    return state;
}

export default loginReducer;