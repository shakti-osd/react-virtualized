import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import loremIpsum from 'lorem-ipsum';

import { List, AutoSizer } from "react-virtualized";

const rowCount = 1000;
const rowHeight = 50;

class App extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
    this.list = Array(rowCount).fill().map((val, idx) => {
      return {
        id: idx, 
        name: 'John Doe',
        image: 'http://via.placeholder.com/40',
        text: 'Test'
      }
    });
  }
  
  renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={this.list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{this.list[index].name}</div>
          <div>{this.list[index].text}</div>
        </div>
      </div>
    );
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="list">
          <AutoSizer>
          {
            ({ width, height }) => {
              return <List
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.list.length}
                overscanRowCount={3} />
            }
          }
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default App;