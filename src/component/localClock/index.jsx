import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { format } from 'date-fns';
import { ClockShow } from '../../shared/ui/cockdisplay'
import useClock from '../../hooks/useClock/useClock'
import ClockAction from '../../shared/clockAction'
import useTimer from '../../hooks/useTimer/useTimer'
import { HoursAndMinute } from '../../shared/ui/Time';
import Title from '../../shared/ui/title';
const LocalClock = ({ createClock, localClock, updateLocalClock }) => {

    const { date, dateUtc, timezone, offset } = useClock(localClock.timezone, localClock.offset)

    useEffect(() => {
        updateLocalClock({ date, timezone, offset, });
    }, [date]);

    const timer = useTimer(date)
    if (!timer) return
    let offsetHrs = offset / 60;

    return (
        <>
            {timer && (
                <ClockShow margin='10% 10%' padding="20px" width="60%">
                    <Title>{localClock.title}</Title>
                    <Row>
                        <Col style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <HoursAndMinute fontSize="40px">{format(timer, 'hh:mm')}</HoursAndMinute>
                        </Col>
                        <Col>
                            <HoursAndMinute fontSize="15px" padding="8px">{format(timer, 'aaa')}</HoursAndMinute>
                            <HoursAndMinute fontSize="15px">{format(timer, 'ss')}</HoursAndMinute>
                        </Col>
                    </Row>
                    <Row><HoursAndMinute fontSize="20px">{format(timer, 'yyyy-MM-dd')}</HoursAndMinute></Row>
                    <HoursAndMinute fontSize="15px">
                        {timezone}
                        {offsetHrs > 0 ? `+${Math.abs(offsetHrs)}` : `-${Math.abs(offsetHrs)}`}
                    </HoursAndMinute>
                </ClockShow >

            )}

            <ClockAction
                createAndDeleteClock={createClock}
                localClock={localClock}
                updateClock={updateLocalClock}
            />
        </>


    )
}



export default LocalClock