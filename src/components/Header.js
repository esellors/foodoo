import React, {Component} from 'react';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         headerTxt: 'foodoo'
      }
   }
   render() {
      return (
         <header>
            <h2>---------------<span id="site_title">{this.state.headerTxt}</span></h2>
            <h4>your daily meal planner</h4>
         </header>
      )
   }
}

export default Header;