import React, { useState, useEffect } from 'react'
import useClock from '../../../hooks/useClock/useClock'
import useEvent from '../../../hooks/useEvent/useEvent'
import ClockAction from '../../../shared/clockAction'
import { format } from 'date-fns';
import EventAction from './event/eventAction'
import EventDisplay from './event/eventDisplay'
import { ClockShow } from '../../../shared/ui/cockdisplay'
import Button from '../../../shared/ui/button'
import useTimer from '../../../hooks/useTimer/useTimer'
import Title from '../../../shared/ui/title';
import { HoursAndMinute } from '../../../shared/ui/Time';
const ClockListItem = ({ clock, updateClock, deleteClock }) => {
    const [event, setEvent] = useState([])
    const [eventTogle, setEventTogle] = useState(false)

    const { date, timezone, offset } = useClock(clock.timezone, clock.offset)
    const { allEvents, getEvents, createEvent } = useEvent()

    useEffect(() => {
        const allevent = getEvents('isArray=true')

        setEvent(allevent)
    }, [allEvents])

    const timer = useTimer(date)

    if (!date || !timer) return
    let offsetHrs = offset / 60;
    return (
        <ClockShow>
            <Title>{clock.title}</Title>
            <ClockShow padding="5px 10px" >
                <HoursAndMinute fontSize="40px">{format(timer, 'hh:mm')} {format(timer, 'aaa')}</HoursAndMinute>
                <HoursAndMinute fontSize="20px">{format(timer, 'yyyy-MM-dd')}</HoursAndMinute>
                <HoursAndMinute fontSize="15px">
                    {timezone}
                    {offsetHrs > 0 ? `+${Math.abs(offsetHrs)}` : `-${Math.abs(offsetHrs)}`}
                </HoursAndMinute>
            </ClockShow >

            <div style={{ display: "flex" }}>
                <Button onClick={() => setEventTogle(!eventTogle)}>Event<span><i class="bi bi-arrow-down-circle"></i></span></Button>
                <EventAction createEvent={createEvent} clockId={clock.id} />

            </div>

            {eventTogle ?
                <EventDisplay allEvents={event} />
                : ''}
            <ClockAction
                createAndDeleteClock={deleteClock}
                local={false}
                localClock={clock}
                updateClock={updateClock} />
        </ClockShow>
    )
}


export default ClockListItem