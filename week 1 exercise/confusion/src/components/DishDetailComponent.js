import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

 

class DishDetail extends Component{

  renderDish(dish)
  { 
      if (dish != null){
          return (
            <div key={dish.id} className='col-12 col-md-5 m-1'>
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

  renderComment(comments){
        console.log(comments);
        const thisComment = comments.map((comment) => { 
             return ( 
                <ul className='list-inline'>
                  <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>-- {comment.author}, {comment.date}</p>
                  </li>
                </ul>
              
            )
        });
        
        return(
              <div className='col-12 col-md-5 m-1'>
              <h4>Comments </h4>
                {thisComment}
              </div>
          )
        
  }

  render(){
    const dish = this.props.dish;
    if (dish != null)
    {
        const comments = this.props.comments;
        if(comments !=null){
            return(
              <div className="row">
                          {this.renderDish(dish)}
                          {this.renderComment(comments)}
              </div>
             )
        }else
        {
            return(
                <div></div>
            )
        }
      }
    else{
        return(
            <div></div>
        )
    }
  }
}

export default DishDetail;