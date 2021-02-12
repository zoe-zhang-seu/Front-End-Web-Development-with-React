## Setting Up the environment
Related Material
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Node API Documentation](https://nodejs.org/api/)
- [npm Docs](https://docs.npmjs.com/)
- [lite-server](https://github.com/johnpapa/lite-server)
#### Git Manual
- [Git Reference Manual](https://github.com/johnpapa/lite-server)
- [Atalassian Git Manual](https://www.atlassian.com/git/tutorials)
#Task
## Install create-react-app
##### Install yarn
Install yarn at [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) and type `yarn global add create-react-app@1.5.2` in command, then gain the more information with that by type `create-react-app --help` 
##### Create a react project
replace the folderName by type `create-react-app folderName`in command, then type `yarn start`

## Configure React projcet
#### install the reactstrap, react-popper and bootstrap
```
yarn add bootstrap@4.0.0
yarn add reactstrap@5.0.0
yarn add react-popper@0.9.2
```
if use npm instead of yarn then type `npm install <package> --save`
#### import the bootstrap 4 in index.js file
by adding ` import 'bootstrap/dist/css/bootstrap.min.css';` in the upper side of index.js file
#### add the Navbar in App.js
```
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}
```
Related Material
- [React](https://reactjs.org/)
- [creat react app](https://github.com/facebook/create-react-app)
- [reactstarp](https://reactstrap.github.io/)
- [reactstarp Navbar](https://reactstrap.github.io/components/navbar/)
- [JSX introduction](https://reactjs.org/docs/introducing-jsx.html)
- [JSX online conventer](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.12.15&externalPlugins=)
- [imperative vs declarative](https://www.netguru.com/blog/imperative-vs-declarative)





