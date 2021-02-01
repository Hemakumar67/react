import React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class List extends React.Component{
    render(){
        return(
            <div>
                <Row style={{ 'marginTop': "20px" }}>
                    <Col style={{ "backgroundColor": "white" }}>
                        <ListGroup >
                        {this.props.expenditure.length == 0 ? <p>No Spended money</p> :
                            this.props.expenditure.map((spend, index) => {
                            return <ListGroup.Item style={{
                                "display": "flex",
                                "justifyContent": "space-between"
                            }} key={index} variant={spend.spended ? "danger" : "success"}>
                                <div>{spend.date}</div>
                                <div>{spend.description}</div>
                                <div>{"Rs."}{spend.moneyValue}</div>
                            </ListGroup.Item>
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default List;