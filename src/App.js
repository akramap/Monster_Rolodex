import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    
  }

  /* React Life cycles method*/
  /* renders component onto DOM for first time  */
  async componentDidMount() {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    this.setState({ monsters: users });
  }

  handleClick3 = ()=> console.log("click3 ***");

  handleClick1 = ()=> console.log("click1 *");
  //  arrow function because it binds this to object where function is defined
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList searchKey={searchField} monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
