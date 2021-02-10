import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
	constructor(props){
		super(props);
		this.state ={
			selectedDish: null
		}
	}

	onDishSelect(dish) {
        this.setState(
          {
            selectedDish: dish
          }
     );

  renderDish(dish) {
        if (dish != null)
        {
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

  	render(){
  		renderDish(dish)
}

export default DishDetail;