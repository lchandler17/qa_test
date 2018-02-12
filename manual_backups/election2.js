// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link, NavLink } from 'react-router-dom'; 

//TODO -- fix form and post correct value to /api/newelection
class Election extends Component{

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			election: '',
			type: '',
			position: {
				positionTitle: '',
				candidates: [],
			},
			numPos: 1,
			numCan: 3
		};

		this.handleElection = this.handleElection.bind(this);
		this.handleType = this.handleType.bind(this);
		this.handlePosition = this.handlePosition.bind(this);
		this.handleCandidate = this.handleCandidate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleElection(event) {
		this.setState({
	    	election: event.target.value
	    });
	}

	handleType(event) {
        this.setState({
	    	type: event.target.value
	    });
	}

	handlePosition(event){
		let tempCan = this.state.position.candidates;

		this.setState({
	    	position: {
	    		positionTitle: event.target.value,
	    		candidates: tempCan
	    	}
	    });
	}

	handleCandidate(event){
	    let tempPos = Object.assign({}, this.state.position);
	    let index = (parseInt(event.target.name)-1);
	    let tempVal = event.target.value;

		tempPos.candidates.splice(index, 1, tempVal);
		this.setState({
			position: tempPos
		});
		
		console.log("tempPos0: " + tempPos.candidates[0]);
		console.log("state.candidates0: " + this.state.position.candidates[0]);
		console.log("tempPos1: " + tempPos.candidates[1]);
		console.log("state.candidates1: " + this.state.position.candidates[1]);
		console.log("tempPos2: " + tempPos.candidates[2]);
		console.log("state.candidates2: " + this.state.position.candidates[2]);
	}

	handleChange(event) {
        // this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		//POST TO DATABASE
                
		event.preventDefault();
	
		 console.log(event.target);
		 console.log(this.state.title, this.state.type);
		 console.log("submit - ",this.state);
	}

	newCan(){
	// 	const newCanTest = (	
	// 		<div>
	// 			<div>
	// 		    	<label>Candidate:</label>
	// 		    	<input type="text" className="candidate" />
	// 		    </div>

	// 		    <div id="newCan" />
	// 		</div>
	// 	)

	// 	ReactDOM.render(newCanTest, document.getElementById('newCan'));
	}

	columnNaming(){
		// var candidates = document.getElementsByClassName("candidate");
		  
		// for (var i = 0; i < candidates.length; i++) {
		// 	candidates[i].setAttribute("name", "can" + i);
		// }

		// var positions = document.getElementsByClassName("position");
		  
		// for (var i = 0; i < positions.length; i++) {
		// 	positions[i].setAttribute("name", "pos" + i);
		// }

		// console.log("naming complete");
	}

	componentDidMount(){
		// const newPos = (

		// )

		// ReactDOM.render(newPos, document.getElementById('newPos'));
		// console.log("did mount!");
		// this.columnNaming();
	}

	render(){

	   console.log("type: " + this.state.type);
	   console.log("election: " + this.state.election);
	   console.log("position: " + this.state.position.positionTitle);
	   console.log(this.state);

	  return(
	    <div className="">
	    	<p>To create a new election, input the following information:</p>
	    	<form action="/newelection" method="post" onSubmit={this.handleSubmit}>
			        <label>Election Title:
			        	<input id="etitle" type="text" onChange={this.handleElection} />
			        </label>
			        <label id="etype">Election Type:			    		
				        <select onChange={this.handleType}>
				        		<option value="none">--</option>
				    			<option value="select1">Select One</option>
				    			<option value="select2">Select Multiple</option>
				    			<option value="ranked">Rank Choices</option>
				    	</select>
			        </label>

			    	<label className="position">Position:
			    		<input type="text" className="position" name="1" onChange={this.handlePosition} />
			    	</label>
			    	<label className="canForm">Candidate:
			    		<input type="text" className="candidate" name="1" onChange={this.handleCandidate} />
			    	</label>
			    	<label className="canForm">Candidate:
			    		<input type="text" className="candidate" name="2" onChange={this.handleCandidate} />
			    	</label>
			    	<label className="canForm">Candidate:
			    		<input type="text" className="candidate" name="3" onChange={this.handleCandidate} />
			    	</label>

			    	{/*}

				    <div id="newCan" />
				    <div>
				    	<input className="button addbutton" type="submit" value="Add another candidate" onClick={this.newCan} />
				    </div>

			    	<div id="newPos" />
				    <div>
				    	<input className="button addbutton" type="submit" value="Add another position" onClick={this.newPos} />
				    </div>

					*/}

			    <div>
			        <input className="button subbutton" type="submit" value="Submit" onClick={this.handleSubmit}/>
			    </div>
			</form>
	    </div>
	  )
	}
}

// EXPORT COMPONENT
export default Election;
