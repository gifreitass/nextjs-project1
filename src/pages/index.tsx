import EventList from '@/components/EventList'
import { getAllEvents } from '@/services/api/getAllEvents'
import { iEventsInformations } from '@/types/eventsInformations.interface'

const HomePage: React.FC<{ events: iEventsInformations[] }> = (props) => {
    return (
        <div>
            <EventList events={props.events} />
        </div>
    )
}

//A cada meia hora a página será gerada, para que os dados sejam atualizados, se necessário
export async function getStaticProps() {
    const allEvents = await getAllEvents()

    const featuredEvents = allEvents.filter((event: any) => event.isFeatured);

    return {
        props: {
            events: featuredEvents
        },
        revalidate: 1800
    }
}

export default HomePage
