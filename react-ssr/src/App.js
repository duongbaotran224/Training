import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

/* Home component */
const Home = () => (
<div>
  <h2>Home</h2>
</div>
)
/* Category component */
const Category = () => (
<div>
  <h2>Category</h2>
</div>
)
/* Todos component */
const Todos = () => (
 <div>
   <AddTodo />
   <VisibleTodoList />
   <Footer />
 </div>
)

/* App component */
export default class App extends Component {
 render() {
   return (
     <div>
       <nav className="navbar navbar-light">
         <ul className="nav navbar-nav">
           {/* Link components are used for linking to other views */}
           <li><Link to="/">Homes</Link></li>
           <li><Link to="/category">Category</Link></li>
           <li><Link to="/todos">Todos</Link></li>
         </ul>
       </nav>
       <Switch>

         {/* Route components are rendered if the path prop matches the current URL */}
         <Route path="/" exact={true} component={Home}/>
         <Route path="/category" component={Category}/>
         <Route path="/todos" component={Todos}/>
       </Switch>
     </div>
   )
 }
}
