import { DEV_CLIENT_PAGES_MANIFEST } from "next/dist/shared/lib/constants"
import LoginForm from "../components/LoginForm"

const Page = () => {
    return (
        <div className="login-container">
            <LoginForm></LoginForm>
        </div>
    )
}

export default Page