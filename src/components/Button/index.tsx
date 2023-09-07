import Link from "next/link"
import classes from './button.module.css'
import { ReactElement } from "react"

const Button: React.FC<{ link?: string, text?: string, children: ReactElement | string }> = (props) => {
    if (props.link) {
        return (
            <Link href={props.link} >
                <a className={classes.btn}>{props.text}</a>
            </Link>
        )
    }
    
    return <button className={classes.btn}>{props.children}</button>
}

export default Button