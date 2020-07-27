import React, { Component } from 'react'




class Level extends Component {

    render() {
        const {level} = this.props
        return (
            <div>
                <h5>Level {level}</h5>
            </div>
        )
    }
    

}
  
export default Level
