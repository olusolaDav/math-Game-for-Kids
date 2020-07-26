import React, { Component } from 'react'
import Level from './Level'

class Count extends Component {
    
    
        state = {
            num1: 3,
            num2: 4,
            response: "",
            score: 0,
            counter: 0,
            level: 1,
            sletter: null
        }

        onChangeEvent = (event) => {
            this.setState({
            response: (event.target.value)
        })
        }

     /*    sLetter= ()=> {
            if (this.state.counter >=2) {
                this.setState({
                    sletter: "s"
                })
            } 
        } */

      

        onKeyEvent = (event) => {
            if (event.key === "Enter") {
                const answer = parseInt(this.state.response)
                if (answer === this.state.num1 * this.state.num2 ){
                    this.setState({
                        score: this.state.score + 1,
                        response: "",
                        counter: 0,
                        num1: Math.ceil(Math.random() * 10),
                        num2: Math.ceil(Math.random() * 10)

                    })
                    
                }  else {
                        this.setState({
                            score: this.state.score -1,
                            response: "",
                            counter: 0
                        })   
                    }
                    
            }          
        }

        componentWillMount() {
           this.TimerId= setInterval(() => this.timer(), 1000) 
           
        }

        
       
        timer= () =>{
            this.setState({
                counter: this.state.counter +1
            })
        }

       
    
        

    render() {
        if (this.state.counter >= 10){
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })
        }

        if (this.state.score >= 10){
            this.setState({
                level: this.state.level +1,
                score: 0,
                counter: 0
            })
        }

        
        return (        
            <React.Fragment>
            <Level counter={this.state.counter} score={this.state.score} level={this.state.level}/>
            <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
            <h1>{this.state.num1} x {this.state.num2}</h1>
            <input onKeyUp={this.onKeyEvent} onChange={this.onChangeEvent} value={this.state.response}></input>
            <h2 >Score: {this.state.score} </h2>
            </React.Fragment>   
        )
    }
}

    
export default Count