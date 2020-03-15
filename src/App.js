import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Referrer from './components/Referrer/Referrer';
import Header from './components/Header';
import Menu from './components/Menu';
import Meal from './components/Meal';
import Meals from './components/Meals';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      meal: {},
      meals: {}
    }
    this.addItem = this.addItem.bind(this);
    this.moveItem = this.moveItem.bind(this);
    this.deleteMenuItem = this.deleteMenuItem.bind(this);
    this.updateMealsHandler = this.updateMealsHandler.bind(this);
    this.deleteMealOfDayHandler = this.deleteMealOfDayHandler.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/menumeal")
      .then(res => {
        this.setState({
          menu: res.data.menu,
          meal: res.data.meal,
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
          meal: res.data.meal,
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
        });
      })
      .catch(error => console.log(error))
  }
  updateMealsHandler(resFromMealsSelectJs) {
    const meal = resFromMealsSelectJs.data.meal;
    const meals = resFromMealsSelectJs.data.meals;
    this.setState({
      meal: meal,
      meals: meals
    })
  }
  deleteMealOfDayHandler(responseFromMealsJs) {
    this.setState({
      meals: responseFromMealsJs.data
    })
  }
  render() {
    return (
      <>
        { document.referrer === 'https://www.esellors.com' ? <Referrer /> : null }
        <div className="wrapper">
          <Header />
          <main>

            <Meals meals={this.state.meals} deleteMealOfDayHandler={this.deleteMealOfDayHandler} />

            <div id="menu_meal_selection">

              <Menu menu={this.state.menu} addItem={this.addItem} moveItem={this.moveItem} deleteMenuItem={this.deleteMenuItem} />

              <Meal meal={this.state.meal} moveItem={this.moveItem} updateMealsHandler={this.updateMealsHandler} />

            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
