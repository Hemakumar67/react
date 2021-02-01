import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class ViewModel extends React.Component{
    
    handleSubmit=() =>{
        this.props.handleSubmit()
    }

    handleInput = (e) =>{
        this.props.handleInput(e)
    }

    handleClose = () =>{
        this.props.handleClose(false)
    }

    render(){
        return(
            <div>
                <Modal show={this.props.showPopup} >
                    <Modal.Header >
                    <   Modal.Title>{this.props.incomeType ? "Add Spended Money" : "Add Received Money"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleFormSubmit}>
                            <label>
                                {this.props.incomeType ? "Spended Money" : "Add Money"}    : <input name="addedMoney" type="number" onChange={this.handleInput} />
                            </label>
                            <label>
                                Add Description: <input name="description" type="text" onChange={this.handleInput} />
                            </label>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"  onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ViewModel;