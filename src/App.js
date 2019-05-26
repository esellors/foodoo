import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Menu from './components/Menu';
import Meal from './components/Meal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      meal: {}
    }
    this.addItem = this.addItem.bind(this);
    this.moveItem = this.moveItem.bind(this);
    this.deleteMenuItem = this.deleteMenuItem.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/menumeal")
      .then(res => {
        this.setState({
          menu: res.data.menu,
          meal: res.data.meal
        });
      })
      .catch(error => console.log(error))
  }
  addItem(newItemPackage) {
    axios
      .post("/api/menumeal/", newItemPackage)
      .then(res => {
        this.setState({
          menu: res.data.menu,
          meal: res.data.meal
        });
      })
      .catch(error => console.log(error))
  }
  moveItem(e) {
    const section = e.target.parentNode.id;
    const category = e.target.className;
    const item = e.target.firstChild.data;
    const destinationSection = section === "menu" ? "meal" : "menu";
    axios
      .put(`/api/menumeal/${section}/${category}/${item}/${destinationSection}`)
      .then(res => {
        this.setState({
          menu: res.data.menu,
          meal: res.data.meal
        });
      })
      .catch(error => console.log(error))
  }
  deleteMenuItem(e) {
    e.stopPropagation();
    const category = e.target.parentNode.className;
    const item = e.target.parentNode.firstChild.data;
    axios
      .delete(`/api/menumeal/${category}/${item}`)
      .then(res => {
        this.setState({
          menu: res.data.menu,
          meal: res.data.meal
        });
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>

          <Menu menu={this.state.menu} addItem={this.addItem} moveItem={this.moveItem} deleteMenuItem={this.deleteMenuItem} />
    
          <Meal meal={this.state.meal} moveItem={this.moveItem} />
          
        </main>
      </div>
    );
  }
}

export default App;
