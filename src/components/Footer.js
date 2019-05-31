import React, {Component} from 'react';

class Footer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         footerTxt: 'Made by Eric Sellors'
      }
   }
   render() {
      return (
         <div id="footer">
            <small>{this.state.footerTxt}</small>
         </div>
      );   
   }
}

export default Footer;