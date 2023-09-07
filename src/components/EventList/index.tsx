import { iEventsInformations } from "@/types/eventsInformations.interface"
import EventItem from "../EventItem"
import classes from './event-list.module.css'

const EventList: React.FC<{ events: iEventsInformations[] }> = (props) => {
    return (
        <ul className={classes.list}>
            {props.events.map((event) => (
                <EventItem key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image} />
            ))}
        </ul>
    )
}

export default EventList