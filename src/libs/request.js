export const RequestSuccess = (type,data) => ({
    type    : type,
    payload : data
})

export const RequestWaiting = (status) => ({
    type: 'REQUEST_WAITING',
    status
})