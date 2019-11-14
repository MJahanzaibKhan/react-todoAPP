import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from './component/form'
import List from './component/list'
import UpdateList from './component/updateList'






class App extends React.Component {
  constructor() {
    super();
    this.state = {
      update: [],
      indexx: ''
    }
  }

  register = () => {
    return <Form />;
  }

  List = () => {
    return <List editRow={this.editRow} />
  }

  updateItem = () => {
    return <UpdateList indexx={this.state.indexx} value={this.state.update} />
  }

  editRow = (val, id) => {
    this.setState({
      update: val,
      indexx: id
    })
  }


  render() {
    return (
      <Router>
        <Route path="/" exact component={this.register} />
        <Route path="/UserList/" component={this.List} />
        <Route path="/UpdateList/" component={this.updateItem} />
      </Router>
    );
  }
}

// const mapDispatchToProps = { add };
// const mapStateToProps = (state) => {
//   return {
//     userInfo: state.userInfo
//   }
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
export default App;