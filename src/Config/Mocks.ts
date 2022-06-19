import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

const setupMocks = (api: AxiosInstance) => {
    const mocker = new MockAdapter(api, {
        delayResponse: 1000,
        onNoMatch: 'passthrough',
    })

    mocker.onGet('login').reply(function (config) {
        console.log(config)
        return [
            200,
            {
                token: 'This should be unreadable',
                refreshToken: 'This should also be unreadable',
            },
        ]
    })
}

export default setupMocks
