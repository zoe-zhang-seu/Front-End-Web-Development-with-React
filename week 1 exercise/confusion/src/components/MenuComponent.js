import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent.js';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log('Menu component constructor is invoked');
    }

    ComponentDidMount(){
      console.log('ComponentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState(
          {
            selectedDish: dish,
            selectedComments:dish.comments
          }
        );
    }


    render() {
      const menu = this.props.dishes.map((dish)=>{
          return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                      <Card onClick={()=>this.onDishSelect(dish)}>
                          <CardImg top width="100%" src={dish.image} alt={dish.name}/>
                           <CardImgOverlay>
                              <CardTitle tag="h5">{dish.name}</CardTitle>
                           </CardImgOverlay>
                      </Card>
                </div>
          );
      });


      return (
              <div className="container">
                  <div className="row">
                      {menu}
                  </div>
                      <DishDetail dish={this.state.selectedDish} comments={this.state.selectedComments} />
              </div>
          );
    }
}

export default Menu;
