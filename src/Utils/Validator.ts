const Validator = {
    phone: (phone: string) => {
        return false
    },
    email: (email: string) => {
        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!email.match(validRegex)) {
            return false
        }
        return true
    },
}

export default Validator
