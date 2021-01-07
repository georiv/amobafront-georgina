import state from './userState';
import mutations from './userMutations';
import actions from './userActions';
import getters from './userGetter';

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};