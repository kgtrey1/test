import axios from 'axios'

const getHttp = async () => {
    const token = localStorage.getItem('token')
    const API_URL = process.env.REACT_APP_API_URL
    const http = axios.create({
        baseURL: API_URL,
        headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    })

    return http
}

const makeAPIRequest = async (
    type: 'get' | 'post' | 'delete' | 'put' | 'patch',
    route: string,
    data: any = null,
): Promise<any> => {
    const promise = new Promise(
        (resolve: (reason: any) => void, reject: (reason: any) => void) => {
            getHttp().then((http) => {
                data
                    ? http?.[type](route, data)
                          .then((res) => {
                              resolve(res)
                          })
                          .catch((err: any) => {
                              reject(err)
                          })
                    : http?.[type](route)
                          .then((res) => {
                              resolve(res)
                          })
                          .catch((err: any) => {
                              reject(err)
                          })
            })
        },
    )
    return promise
}

export default makeAPIRequest
