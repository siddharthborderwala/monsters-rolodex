import React from 'react';
import './App.css';
import { CardList } from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextValueChange = this.onSearchTextValueChange.bind(this);

    this.state = {
      monsters: [],
      searchTextValue: '',
      curMonsters: [],
    };
  }

  onSearchTextValueChange(val) {
    const curMonsters = this.state.monsters.filter(({ name }) =>
      name.toLowerCase().includes(val.toLowerCase())
    );
    this.setState(() => ({ curMonsters, searchTextValue: val }));
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users, curMonsters: users };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="app-heading">Monsters Rolodex</h1>
          <SearchBox
            searchTextValue={this.state.searchTextValue}
            onSearchTextValueChange={this.onSearchTextValueChange}
          />
          <CardList monsters={this.state.curMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
