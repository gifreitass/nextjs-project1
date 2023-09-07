import classes from './event-summary.module.css';


const EventSummary: React.FC<{ title: string }> = (props) => {
    return (
        <section className={classes.summary}>
            <h1>{props.title}</h1>
        </section>
    )
}

export default EventSummary