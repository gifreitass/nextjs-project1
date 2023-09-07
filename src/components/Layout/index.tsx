import { Fragment } from "react"
import MainHeader from "../MainHeader"

const Layout: React.FC = (props) => {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout