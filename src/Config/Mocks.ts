import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'

const setupMocks = (api: AxiosInstance) => {
    const mocker = new MockAdapter(api, {
        delayResponse: 1000,
        onNoMatch: 'passthrough',
    })

    mocker.onPost('login').reply(function (config) {
        const payload = JSON.parse(config.data)

        if (payload.email === 'kevin.gouyet@epitech.eu') {
            return [
                200,
                {
                    token: 'This should be unreadable',
                    refreshToken: 'This should also be unreadable',
                },
            ]
        }
        return [
            403,
            {
                message: 'Wrong credentials',
            },
        ]
    })
}

export default setupMocks
