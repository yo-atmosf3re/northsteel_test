export { initAuthData } from './model/services/initAuthData';
export type {UserI, UserSchema} from './model/types/user'
export {userSlice, userActions, userReducer, useUserActions} from './model/slice/userSlice';
export { getUserAuthData, useUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited, useUserInited } from './model/selectors/getUserInited/getUserInited';
