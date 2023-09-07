import { Fragment } from 'react'
import EventSummary from "@/components/EventSummary"
import EventLogistics from "@/components/EventLogistics"
import EventContent from "@/components/EventContent"
import { getAllEvents } from '@/services/api/getAllEvents'

const EventDetailPage: React.FC<{ selectedEvent: any }> = (props) => {
    const event = props.selectedEvent
    
    if (!event) {
        return <p>No event found</p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
            <EventContent description={event.description}/>
        </Fragment>
    )
}

export async function getStaticProps(context: any) {
    const eventId = context.params.eventId
    const allEvents = await getAllEvents()

    const event = allEvents.find((event: any) => event.id === eventId);

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }
}

//Pré-renderizando somente os eventos principais, por uma questão de otimização, e adiando a renderização das páginas menos frequentadas setando o fallback como true
export async function getStaticPaths() {
    const allEvents = await getAllEvents()

    const featuredEvents = allEvents.filter((event: any) => event.isFeatured);
    const ids = featuredEvents.map((event: any) => ({ params: { eventId: event.id } }))

    return {
        paths: ids,
        fallback: true
    }
}

export default EventDetailPage