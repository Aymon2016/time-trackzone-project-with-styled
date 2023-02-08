import { useState } from "react"



const useEvent = () => {

    const [eventState,setEventState]=useState({})

 
    const createEvent=(event)=>{
        const {id,clockId}=event
        setEventState( (prev)=>({
            ...prev,
            [`${clockId}|${id}`]:event
        }))
    }

    const getEvents = (isArray=false)=>{
        if(!isArray) return eventState

        return Object.values(eventState)

    }

     const deleteEvent = (id) => {
        const events = { ...eventState }
        delete events[id]
        setEventState(events)

    }

    const deleteEventByClock = (clockId) => {
        return Object.keys(eventState).filter((item) => !item.startsWith(clockId))
    }

    const updateEvent = (updatedEvent, id) => {
        const events = { ...eventState }
        events[id] = {
            ...events[id],
            ...updatedEvent
        }
        setEventState(events)
    }

    const getEventsByClockId = (clockId) => {
        return Object.keys(state).filter((item) => item.startsWith(clockId))
    }


 return{
    allEvents:eventState,
    getEvents,
    createEvent,
 }
}

export default useEvent