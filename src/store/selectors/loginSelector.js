const loginSelector = (store) => store.login

export const tokenSelector = (store) => loginSelector(store)?.accessToken || ''
export const loginErrorSelector = (store) => loginSelector(store)?.error
