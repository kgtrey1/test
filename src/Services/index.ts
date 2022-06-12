import axios from 'axios'

export interface NetworkError {
    message?: string
    data?: any
    status?: number
}

const instance = axios.create({
    baseURL: '',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 3000,
})

const handleError = ({message, data, status}: NetworkError) => {
    return Promise.reject({ message, data, status })
}

instance.interceptors.response.use(
    response => response,
    ({message, response: {data, status} }) => {
        return handleError({message, data, status})
    },
)

export default instance
