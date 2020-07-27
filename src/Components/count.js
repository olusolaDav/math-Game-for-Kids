import React, { Component } from 'react'
import Level from './Level'

class Count extends Component {
    
    
        state = {
            num1: 5,
            num2: 4,
            response: "",
            score: 0,
            counter: 0,
            level: 1,
            sletter: ""
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

      
// Level 1 state-----------------   
         handleSubmit1 = (e) => {
            e.preventDefault();
            const answer = parseInt(this.state.response)
            if (answer === this.state.num1 * this.state.num2 ){
                this.setState({
                    score: this.state.score + 1,
                    response: "",
                    counter: 0,
                    num1: Math.ceil(Math.random() * 8) + 2,
                    num2: Math.ceil(Math.random() * 1)

                })
                
            }  else {
                    this.setState({
                        score: this.state.score -1,
                        response: "",
                        counter: 0
                    })   
                }
          }
    


//-------------------- Level 2 state-----------------

handleSubmit2 = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 10 + 3),
            num2: Math.ceil(Math.random() * 1)

        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
        }
  }


            

//-------------------- Level 3  state-----------------

handleSubmit3 = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 12 + 3),
            num2: Math.ceil(Math.random() * 1)

        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
        }
  }



//-------------------- Level 4  state-----------------

handleSubmit4 = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 13 + 4),
            num2: Math.ceil(Math.random() * 1)

        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
        }
  }




//-------------------- Level 5  state-----------------
handleSubmit5 = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 14 + 6),
            num2: Math.ceil(Math.random() * 1)

        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
        }
  }



//-------------------- Level 6  state-----------------
handleSubmit6 = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 19 + 4),
            num2: Math.ceil(Math.random() * 1)

        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
        }
  }



//-------------------- Level 7  state-----------------
handleSubmit7 = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 23 + 6),
            num2: Math.ceil(Math.random() * 1)

        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
        }
  }




//-------------------- Level 8  state-----------------
handleSubmit8 = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 32 + 7),
            num2: Math.ceil(Math.random() * 1)


        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
        }
  }



//-------------------- Level 9  state-----------------
handleSubmit9 = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 45 + 19),
            num2: Math.ceil(Math.random() * 1)


        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
        }
  }




//-------------------- Level 10  state-----------------
handleSubmith = (e) => {
    e.preventDefault();
    const answer = parseInt(this.state.response)
    if (answer === this.state.num1 * this.state.num2 ){
        this.setState({
            score: this.state.score + 1,
            response: "",
            counter: 0,
            num1: Math.ceil(Math.random() * 62 + 12),
            num2: Math.ceil(Math.random() * 1)


        })
        
    }  else {
            this.setState({
                score: this.state.score -1,
                response: "",
                counter: 0
            })   
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
                counter: 0,
                num1: this.state.num1 +2,
                num2: this.state.num1 +2
            })
        }

        
        return (        
            <React.Fragment>
            
           

            {
                (() => {
               
                if (this.state.level ===1) {
                return <div>
                            <Level  level={this.state.level}/>
                            <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                            <h2 >Score: {this.state.score} </h2>
                            <h1>{this.state.num1} x {this.state.num2}</h1>
                            <form onSubmit={this.handleSubmit1}>
                                <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                <input type="submit" value="SUBMIT"/>
                            </form>
                            
                            
                        </div>
                } 
                
                else if (this.state.level===2) {
                return <div>
                             <Level  level={this.state.level}/>
                            <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                            <h2 >Score: {this.state.score} </h2>
                            <h1>{this.state.num1} x {this.state.num2}</h1>
                            <form onSubmit={this.handleSubmit2}>
                                <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                <input type="submit" value="SUBMIT"/>
                            </form>
                        </div>


                } 

                else if (this.state.level===3) {
                    return <div>
                                <Level  level={this.state.level}/>
                                <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                                <h2 >Score: {this.state.score} </h2>
                                <h1>{this.state.num1} x {this.state.num2}</h1>
                                <form onSubmit={this.handleSubmit3}>
                                    <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                    <input type="submit" value="SUBMIT"/>
                                </form>
                            </div>
    
    
                    } 

                    else if (this.state.level===4) {
                        return <div>
                                    <Level  level={this.state.level}/>
                                    <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                                    <h2 >Score: {this.state.score} </h2>
                                    <h1>{this.state.num1} x {this.state.num2}</h1>
                                    <form onSubmit={this.handleSubmit4}>
                                        <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                        <input type="submit" value="SUBMIT"/>
                                    </form>
                                </div>
        
        
                        } 

                        else if (this.state.level===5) {
                            return <div>
                                        <Level  level={this.state.level}/>
                                        <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                                        <h2 >Score: {this.state.score} </h2>
                                        <h1>{this.state.num1} x {this.state.num2}</h1>
                                        <form onSubmit={this.handleSubmit5}>
                                            <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                            <input type="submit" value="SUBMIT"/>
                                        </form>
                                    </div>
            
            
                            } 
                        
                            else if (this.state.level===6) {
                                return <div>
                                            <Level  level={this.state.level}/>
                                            <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                                            <h2 >Score: {this.state.score} </h2>
                                            <h1>{this.state.num1} x {this.state.num2}</h1>
                                            <form onSubmit={this.handleSubmit6}>
                                                <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                                <input type="submit" value="SUBMIT"/>
                                            </form>
                                        </div>
                
                
                            } 

                            else if (this.state.level===7) {
                                return <div>
                                            <Level  level={this.state.level}/>
                                            <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                                            <h2 >Score: {this.state.score} </h2>
                                            <h1>{this.state.num1} x {this.state.num2}</h1>
                                            <form onSubmit={this.handleSubmit7}>
                                                <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                                <input type="submit" value="SUBMIT"/>
                                            </form>
                                        </div>
                
                
                            }
                            
                            else if (this.state.level===8) {
                                return <div>
                                            <Level  level={this.state.level}/>
                                            <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                                            <h2 >Score: {this.state.score} </h2>
                                            <h1>{this.state.num1} x {this.state.num2}</h1>
                                            <form onSubmit={this.handleSubmit8}>
                                                <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                                <input type="submit" value="SUBMIT"/>
                                            </form>
                                        </div>
                
                
                            } 

                            else if (this.state.level===9) {
                                return <div>
                                            <Level  level={this.state.level}/>
                                            <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                                            <h2 >Score: {this.state.score} </h2>
                                            <h1>{this.state.num1} x {this.state.num2}</h1>
                                            <form onSubmit={this.handleSubmit9}>
                                                <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                                <input type="submit" value="SUBMIT"/>
                                            </form>
                                        </div>
                
                
                            } 

                            else if (this.state.level===10) {
                                return <div>
                                            <Level  level={this.state.level}/>
                                            <p>{this.state.counter}second   {/* {this.sLetter()} */} </p>
                                            <h2 >Score: {this.state.score} </h2>
                                            <h1>{this.state.num1} x {this.state.num2}</h1>
                                            <form onSubmit={this.handleSubmith}>
                                                <input onChange={this.onChangeEvent} value={this.state.response}></input>
                                                <input type="submit" value="SUBMIT"/>
                                            </form>
                                        </div>
                
                
                            } 
                        
                        
                    
                
                
                else {
                return <div className="you-won">
                            <h1>Congratulations!</h1>
                            <h2>You won!</h2>
                            <p><strong>You are a gunius...Keep it up</strong></p>
                        </div>
                }
               
                })()
            }


            </React.Fragment>   
        )
    }
}

    
export default Count