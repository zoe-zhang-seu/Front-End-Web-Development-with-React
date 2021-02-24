```
```
This note focus on how to design a controlled form in the react application

## Controlled forms
- [React Controlled form tutorial](https://reactjs.org/docs/forms.html)
- [Reactstrap form format](https://reactstrap.github.io/components/form/)
##### Q: what is controlled form? 
A: This react component renders a form and controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”

######  Basic format

```
    <Form>
        <FormGroup row>
            <Label></Label>
            <Col md={6}></Col>
        </FormGroup>
    </Form>
```


Q: What is uncontrolled form? Can you compare it with controlled form and tell the difference?
A: form data is handled by the DOM itself in **uncontrolled component**, while form data is handled by a React component in **controlled component**. In other words, writing an **event handler** for every state update when you want to write a **controlled form**. Write `use a ref` to get form values from the DOM for **uncontrolled form**.

For more detail click [uncontrolled component](https://reactjs.org/docs/uncontrolled-components.html#:~:text=In%20a%20controlled%20component%2C%20form,form%20values%20from%20the%20DOM.)

#### Demo of event handler in controlled form
```
constructor(props){
    super(props);
    this.state ={
      name : ''  
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
}

handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
render(){
    return(
        <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
                     <Label></Label>
                    <Col md={6}></Col>
                        <Input onChange={this.handleInputChange}>
            </FormGroup>    
        </Form>
    );
}
```

#### Demo of uncontrolled form use reference to get value
```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
Pay attention the way to get the value by  **render() part**` <input type="text" ref={this.input} />`. The state has be declared in the **constructor() part** as `this.input = React.createRef();`

There are also some blog talk about this [uncontrolled form blog](https://training-course-material.com/training/Reactjs_basics)
#### Demo of uncontrolled form and validation 

```
. . .
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
. . .

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    
    . . .
    
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }
    
    . . .
    
   render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        
        . . .
        
```
Q: Why we need to declare the **touched part:**`touched:{
                firstname: false,
                lastname: false,
                telnum:false,
                email:false
            }` in the **constructor**?
A: that is to validate the input content meets the criteria, which ensures the subsequent process such as storage and filtering. 
1. At first, we decide  the default value of the input is `false`, that is the input is not meet the criteria. 
2. Then, we write the **validate(input)** function to check whether inputs meet the criteria, which attributes are stored in the `this.state.touched`. 
3. In the **render() part**, the variable `const errors` returns the value of the result of testing these inputs.



Q:How to understand the code of onBlur usage, such as ` this,handleBlur = this.handleBlur.bind(this);` declared in the constructor?
A:[onBlur training page](https://training-course-material.com/training/Reactjs_basics)

Q：How the error is reported?
A: 
1.  set the constant errort in the render() part
2.  ` <FormFeedback>{errors.email}</FormFeedback>` after the input


Further Reading Material
- [uncontrolled/controlled input](https://medium.com/@peter.yun.kim/controlled-and-uncontrolled-input-values-in-react-907119cc98d4)
- [how to work with forms, inputs and events](https://medium.com/capital-one-tech/how-to-work-with-forms-inputs-and-events-in-react-c337171b923b)
- [input validation](https://goshakkk.name/instant-form-fields-validation-react/)
- [uncontrolled vs controlled form](https://www.viget.com/articles/controlling-components-react/)
