import classes from '../../components/EventList/event-list.module.css'
import EventList from "@/components/EventList"
import { getAllEvents } from "@/services/api/getAllEvents"

const FilteredEventsPage: React.FC<{ filteredEvents: any }> = (props) => {
    return (
        <ul className={classes.list}>
            {props.filteredEvents.length ? <EventList events={props.filteredEvents} /> :
                <span>Nenhum evento encontrado</span>
            }
        </ul>
    )
}

export async function getServerSideProps(context: any) {
    const { params } = context

    const year = params.slug[0]
    const month = `0${params.slug[1]}`

    const events = await getAllEvents()

    const filteredEvents = events.filter((event) => {
        const separateDate: string[] = event.date.split('-')

        return year === separateDate[0] && month === separateDate[1]
    })
    
    return {
        props: {
            filteredEvents: filteredEvents
        }
    }
}

export default FilteredEventsPage