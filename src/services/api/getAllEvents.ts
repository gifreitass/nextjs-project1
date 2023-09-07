export async function getAllEvents() {
    const response = await fetch(
        'https://nextjs-course-8b7ef-default-rtdb.firebaseio.com/events.json'
    )

    const data = await response.json()
    const events = []

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events
}