import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './components/DishDetailComponent';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState(
          {
            selectedDish: dish
          }
        );
    }

    render() {
      return (
              <div className="container">
                  <div className="row">
                      {Menu}
                  </div>
                  <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                      <DishDetail dishes={this.state.dishes} /> 
                    </div>
                  </div>
              </div>

          );
    }
}

export default Menu;
