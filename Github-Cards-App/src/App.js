import React from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';

export default class App extends React.Component {
  state={
    profiles:[],
  };
  addNewProfile =(profileData)=>{
    this.setState(prevState=> ({
      profiles:[...prevState.profiles,profileData],
    }));
  }
  render(){
  return (
    <div>
    <Form onSubmit ={this.addNewProfile}/>
    <CardList profiles={this.state.profiles}/>
    </div>
  );
}

}
