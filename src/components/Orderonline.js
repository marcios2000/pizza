import React,{ Component} from 'react'
import '../register.css'
import Header from './Header';


class OrderOnline extends Component {
    constructor() {
      super();
      this.state = {
        user: {},
      };
      this.updateUser = this.updateUser.bind(this);
    }
  
    updateUser(user) {
      this.setState({
        user,
      });
    }
  
    render() {
      const { user } = this.state;
      return (
        <div className="App">
          <Header user={user} updateUser={this.updateUser} />
          
        </div>
      );
    }
  }
  
  export default OrderOnline;
  