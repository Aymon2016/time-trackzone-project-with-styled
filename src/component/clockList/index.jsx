import { Row, Col } from 'react-bootstrap'
import ClockListItem from './clockListItem/clockListItem'
import { Container } from '../../shared/ui/Container'
const ClockList = ({ clocks, deleteClock, updateClock }) => {
    return (
        <Container direction="row" padding=" 2px 10px">

            {clocks ?
                <Row md={3} >
                    {
                        clocks.map((clock) => (
                            <Col

                                key={clock.id}
                                style={{
                                    minWidth: '345px',
                                    margintop: "20px",
                                    marginBottom: "20px"
                                }}>
                                <ClockListItem
                                    deleteClock={deleteClock}
                                    updateClock={updateClock}
                                    key={clock.id} clock={clock}
                                />
                            </Col>
                        ))
                    }
                </Row>
                :
                <p>Please, Create a Clock</p>}


        </Container>
    )
}

export default ClockList