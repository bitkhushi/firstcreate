import React, { Component } from 'react';
// import { Button, Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date()
        }
    }
    tick = () => {
        this.setState({
            time: new Date()
        })

    }
    componentDidMount = () => {
        this.timedata = setInterval(this.tick, 1000)
    }
    componentDidUpdate = (prepvprops, prevstate) => {
        if (prevstate.time !== this.state.time) {
            console.log("componentDidUpdate called");
        }
    }
    componentWillUnmount = () => {
        clearInterval(this.timedata)
    }
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
                {/* <Button color="danger">Danger!</Button> */}


                {/* <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Card"
                        src="https://picsum.photos/300/200"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Card Title
                        </CardTitle>
                        <CardText>
                            This is some text within a card body.
                        </CardText>
                    </CardBody>
                    <ListGroup flush>
                        <ListGroupItem>
                            An item
                        </ListGroupItem>
                        <ListGroupItem>
                            A second item
                        </ListGroupItem>
                        <ListGroupItem>
                            And a third item
                        </ListGroupItem>
                    </ListGroup>

                </Card> */}
            </div>
        );
    }
}

export default Clock;