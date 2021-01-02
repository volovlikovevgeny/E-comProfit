export default function Auth(login: string, password: string) {
    if (login === 'login' && password === 'password') {
        return (
            <div>
                Logged In
            </div>
        )
    } else {
        return (
            <div>
                inCorrect password
            </div>
        )
    }
}