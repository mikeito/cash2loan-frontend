import { Link } from "react-router-dom"
import { storage } from "../../app/utils/local"

const Welcome = () => {
    // const user = true
    const token = storage.getToken()

    // const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    const tokenAbbr = `${token.slice(0, 9)}...`

    // store doesnt stay

    const content = (
        <section className="welcome">
            <h1>Hello man</h1>
            <p>Token: {tokenAbbr}</p>
        </section>
    )

    return content
}
export default Welcome