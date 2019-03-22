import React, {Component} from 'react';
import Column from './Column';

class DataMatrix extends Component {
    constructor(props){
        super(props);
        this.logMatrix = this.logMatrix.bind(this);
    }
    logMatrix(e){
        console.log(this.props);
    }
    render(){
        var Columns = [];
        if(this.props.columns){
            for(let it=0;it<Object.keys(this.props.columns).length;it++){
                Columns.push(
                    <Column data={this.props.columns[`col_${it}`]}
                            title={`col_${it}`} />
                )
            }
        }
        let style = {
            display: 'block',
            margin: 'auto'
        }
        return (
            <div className='DataMatrix'>
                <button style={style} 
                        onClick={this.logMatrix}>
                        Log Data Matrix
                </button>
                {Columns}
            </div>
        )
    }
}

export default DataMatrix