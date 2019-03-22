import React, {Component} from 'react';

class Column extends Component {
    render(){
        let spanStyle = {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
            display: 'inline-block'
        }
        var column = this.props.data.map((num) => {
            return <span style={spanStyle}>{num}<br/></span>
        })
        var style = {
            display: 'inline-block',
            width: '7.14%',
            texOverflow: 'ellipsis',
            fontFamily: 'Avenir'
        }
        return(
            <div className='column' style={style}>
                <h4>{this.props.title}</h4>
                {column}
            </div>
        )
    }
}

export default Column