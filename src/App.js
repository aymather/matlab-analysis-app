import React, { Component } from 'react';
import './App.css';
import DataMatrix from './DataMatrix'
import { getData, getCol } from './helpers';
const electron = window.require('electron').remote;
const dialog = electron.dialog;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSet: [],
      height: null,
      width: null,
      columns: null
    };

    this.findFile = this.findFile.bind(this);
    this.logData = this.logData.bind(this);
  }

  logData(e){
    console.log(this.state);
  }

  findFile(e){
    let file = dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] });
    
    getData(file, (data) => {
      var columns = {};
      for(let it=0;it<data[0].length;it++){
        columns[`col_${it}`] = getCol(data, it);
      }
      this.setState({
        dataSet: data,
        width: data[0].length,
        height: data.length,
        columns: columns
      })
    });
  }

  render() {
    
    return (
      <div className="App">
        <button onClick={this.findFile}>Find File</button>
        <button onClick={this.logData}>Log Data</button>
        <DataMatrix data={this.state.dataSet} 
                    columns={this.state.columns} />
      </div>
    );
  }
}

export default App;
