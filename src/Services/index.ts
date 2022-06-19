import axios from 'axios'
import setupMocks from 'Config/Mocks'

export interface NetworkError {
    message?: string
    data?: unknown
    status?: number
}

const instance = axios.create({
    baseURL: 'localhost:8080',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 3000,
})

setupMocks(instance)

const handleError = ({
    message,
    data,
    status,
}: NetworkError): Promise<NetworkError> => {
    return Promise.reject({ message, data, status })
}

instance.interceptors.response.use(
    (response) => response,
    ({ message, response: { data, status } }) => {
        return handleError({ message, data, status })
    },
)

export default instance
