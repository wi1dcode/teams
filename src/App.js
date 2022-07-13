import React from 'react';
import teams from './teams.json'
import TeamInfo from './components/TeamInfo';
import Counter from './components/Counter';
import './App.css';

class App extends React.Component  {

  constructor() {
    super()

    this.state = {
      count: 10
    }
    
  }


  handleClickSubstract = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count -1
      })
    }
  }
  
  handleClickIncrement = () => {
    if (this.state.count < teams.length) {
      this.setState({
        count: this.state.count + 1,
      })
    }
  }
  



  render() {    
    return (
      <>
        <Counter 
        increase = {this.handleClickIncrement}
        substract = {this.handleClickSubstract}
        count = {this.state.count}
        />
        {teams.filter((team, i) => i < this.state.count).map(user => {
            return (
              <div className='d-flex flex-wrap'>
              <TeamInfo
                nameShort={user.shortName}
                picture={user.crestUrl}
                stade={user.venue}
                address={user.address}
                email={user.email}
                tel={user.phone}
                founded={user.founded}
                key={user.id}
              />
              </div>
            )
          })}

      </>
    )
  }  
}
export default App;
