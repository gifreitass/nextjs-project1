import EventList from "@/components/EventList"
import EventSearch from "@/components/EventsSearch"
import { Fragment } from 'react'
import { useRouter } from "next/router"
import { iEventsInformations } from "@/types/eventsInformations.interface"
import { getAllEvents } from "@/services/api/getAllEvents"

const EventsPage: React.FC<{ events: iEventsInformations[] }> = (props) => {
    const router = useRouter()

    const findEventsHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler} />
            <EventList events={props.events} />
        </Fragment>
    )
}

export async function getStaticProps() {
    const allEvents = await getAllEvents()

    return {
        props: {
            events: allEvents
        },
        revalidate: 60
    }
}

export default EventsPage