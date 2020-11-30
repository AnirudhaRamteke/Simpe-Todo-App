import React, { Component } from 'react';
import './app.css';
import vector1 from './images/vector1.svg';
import vector2 from './images/vector2.svg';
import ellipse1 from './images/ellipse1.svg';
import ellipse2 from './images/ellipse2.svg';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key,value){
    //update react state
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //create item with uinique id
    const newItem={
      id: 1+Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items 
    const list =[...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state
    this.setState({
      list,
      newItem:""

    }); 

  }

  deleteItem(id){
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });

  }


  render(){
    return (
      <div className="App">
      
      <h1 className="title">YOUR TODO
      </h1>
      <img className="vector1" src= {vector1} alt="vector1">
      </img>
      <img className="vector2" src= {vector2} alt="vector2">
      </img>
      <img className="ellipse1" src= {ellipse1} alt="ellipse1">
      </img>
      <img className="ellipse2" src= {ellipse2} alt="ellipse2">
      </img>
       <div className="subtitle">
       <p>
       ADD ITEM
       </p>
       </div>
       <br/>
       <input className="input"
       type="text"
       placeholder="Type Item here.."
       value={this.state.newItem}
       onChange={e =>  this.updateInput("newItem", e.target.value)}
       
       />
       <button className="add" onClick = {() => this.addItem()}>
       Add
       </button>
       <ul className="listbox"  >
       {this.state.list.map(item => {
         return (
           <li className="listitem" key={item.id}>
             {item.value}
             <button className="remove" onClick={() => this.deleteItem(item.id)}>
             Remove
             </button>
           </li>
         );
       })}
     </ul>
       
      </div>
    );
  }
}


export default App;
