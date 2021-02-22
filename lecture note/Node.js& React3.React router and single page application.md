```
```
## 1. React Router
Related Material
- [React Router online edit](https://reactrouter.com/web/example/basic) shows the basic demo
- [React Router Quick Start](https://reactrouter.com/web/guides/quick-start) introduces the procedure of install the `react-router-dom`by npm and then import keywords from it.
- [dynamic Routing](https://reactrouter.com/web/guides/philosophy)

Install the create-react-app
```
$   npx create-react-app demo-app
$   cd demo-app
```
Install the react-router-dom
```
npm install react-router-dom
```

#### Differenciate from the dynamic router and static router
- [dynamic router demo](https://reactrouter.com/web/guides/philosophy)


## 2. Single Page apps
- [single page apps in depth](http://singlepageappbook.com/) strongly recommeded

In this week 2 exercise. add the Breadcrumb
##### Breadcrumb
- [Breadcrumb](https://reactstrap.github.io/components/breadcrumbs/)
```
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
```

##### Link
- [Link](https://reactrouter.com/web/api/Link)
```
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
```
###### FAQ:

for the usage of `<Link to={`/menu/${dish.id}`} >`
Route parameters specified in the path specification as a token e.g., path:`menu/:id` where id is the token

### Practice in exercise
##### How to integrate the aboutus page towards Main as SPA
1. pass the props to the about us page
`<Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />`
2. check the header and footer page linkage
```
<NavItem>
        <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
</NavItem>
```






