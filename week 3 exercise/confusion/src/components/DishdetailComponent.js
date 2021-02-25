import React, {Component}from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem ,
    Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label ,Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from "react-redux-form";




    function RenderDish({dish}){
    	if (dish != null){
          return (
            <div key={dish.id} >
              <Card>
                  <CardImg width ="100%" src = {dish.image} alt={dish.name}/>
                  <CardBody>
                        <CardTitle >{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
            </div>
          )
        }
      else
       {
          return (
                  <div></div>
              )
       } 
    }

    function RenderComments ({comments}){
    	console.log(comments);
        const thisComment = comments.map((comment) => { 
             return ( 
                <ul className='list-inline'>
                  <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                      </p>
                  </li>
                </ul>
              
            )
        });
        
        return(
              <div >
                <h4>Comments </h4>
                  {thisComment}
              </div>
          )
    }

    const DishDetail = (props) => {
    	if (props.dish != null){
    		return(
    			<div className="container">
	    			  <div className="row ">
                <Breadcrumb>
                          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                 </div>                
              </div>
              <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <CommentForm dishId={ props.dish.id } postComment={ props.postComment}/>
                    </div>
	    			  </div>
	    		</div>
    		)
    	}
    	else{
    		return(
    				<div></div>
    		)
    	}
    }

const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class CommentForm extends Component {
        constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) { // console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        this.toggleModal();

        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render(){
      return(
        <div>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil"></span>
                Submit Comment
            </Button>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={2}>Rating</Label>
                            <Col md={10}>
                                <Control.select className="form-control" defaultValue="1" id="rating" model=".rating" name="rating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author"
                                md={2}>
                                Your Name
                            </Label>
                            <Col md={10}>
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" className="form-control"
                                    validators={
                                        {
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }
                                    }/>
                                <Errors className="text-danger" model=".author" show="touched"
                                    messages={
                                        {
                                            minLength: "Must be greater than 2 characters",
                                            maxLength: "Must be 15 characters or less"
                                        }
                                    }/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="message" md={2}> Comment</Label>
                            <Col md={10}>
                                <Control.textarea className="form-control" id="comment" model=".comment" name="comment" rows="6"/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Col md={ {size: 12}}>
                                <Button color="primary" value="submit">Submit </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>);
    }


}

export default DishDetail;
