import classes from './event-content.module.css'

const EventContent: React.FC<{ description: string }> = (props) => {
    return (
        <section className={classes.content}>
            <p>{props.description}</p>
        </section>
    )
}

export default EventContent