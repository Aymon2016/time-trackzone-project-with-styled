import { addMinutes } from "date-fns/esm"
import { useEffect, useState } from "react"

const TIMEZONE_OFFSET = {
    UTC: -6 * 60,
    PST: -8 * 60,
    EST: -4 * 60,
    EDT: -4 * 60,
    BST: 1 * 60,
    MST: -6 * 60,
};

const useClock = (timezone, offset ) => {
    const [localDate, setLocalDate] = useState(null)
    const [localTimezone, setLocalTimezone] = useState(null);
    const [localOffset, setLocalOffset] = useState(0);
    const [utc, setUtc] = useState(null)

    useEffect(() => {

        let localDateTime = new Date()
        let localDateOffset = localDateTime.getTimezoneOffset()
        localDateTime = addMinutes(localDateTime, localDateOffset)
        setUtc(localDateTime)
        setLocalOffset(localDateOffset)
    }, [])

    useEffect(() => {
        if (utc !== null) {
            if (timezone) {

                offset = TIMEZONE_OFFSET[timezone] ?? offset
                const newUtc = addMinutes(utc, -offset)
                setLocalDate(newUtc)

            } else {
                const newUtc = addMinutes(utc, -localOffset)
                setLocalDate(newUtc)
                const dateStr = newUtc.toUTCString().split(' ').pop()
                setLocalTimezone(dateStr)
            }
        }


    }, [utc, timezone, offset])

    return {

        date: localDate,
        dateUtc: utc,
        offset: offset || -localOffset,
        timezone: timezone || localTimezone,
    }
}

export default useClock