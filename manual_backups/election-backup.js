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
			name: '',
			title: '',
			type: '',
			candidate: '',
			position: ''
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleTitleChange(event) {
              //console.log("Inside the HandleTitleChange Function");
		this.setState({
	      title: event.target.value
	    });
	}

	handleTypeChange(event) {
		//console.log("Inside the handleTypeChange Function");
              this.setState({
	      type: event.target.value
	    });
	}

	handleChange(event) {
		//console.log("Inside the handleChange Function");
                this.setState({value: event.target.value});

		const title = event.target.title.value;
		const type = event.target.type.value;

		this.setState({
	      title: title,
	      type: type
	    });
	}

	handle(event){
		this.setState({
	      candidate: event.target.value
	    });
	}

	handleSubmit(event) {
		//ESCAPE DATA BEFORE POSTING
			//REF:
			//https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet
			//https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0

		//POST TO DATABASE
                
		event.preventDefault();
	
		 console.log(event.target);
		 console.log(this.state.title, this.state.type);
		 console.log("submit - ",this.state);
	}

	newCan(){
		const newCanTest = (	
			<div>
				<div>
			    	<label>Candidate:</label>
			    	<input type="text" className="candidate" />
			    </div>

			    <div id="newCan" />
			</div>
		)

		ReactDOM.render(newCanTest, document.getElementById('newCan'));
	}

	columnNaming(){
		var candidates = document.getElementsByClassName("candidate");
		  
		for (var i = 0; i < candidates.length; i++) {
			candidates[i].setAttribute("name", "can" + i);
		}

		var positions = document.getElementsByClassName("position");
		  
		for (var i = 0; i < positions.length; i++) {
			positions[i].setAttribute("name", "pos" + i);
		}

		console.log("naming complete");
	}

	componentDidMount(){
		const newPos = (
			<div>
				<div className="position">
			    	<label>Position:</label>
			    	<input type="text" className="position"  onChange={this.handleChange} />
			    </div>
			    <div className="canForm">
			    	<label>Candidate:</label>
			    	<input type="text" className="candidate"  onChange={this.handleChange} />
			    </div>
			    <div className="canForm">
			    	<label>Candidate:</label>
			    	<input type="text" className="candidate" onChange={this.handleChange} />
			    </div>
			    <div className="canForm">
			    	<label>Candidate:</label>
			    	<input type="text" className="candidate"  onChange={this.handleChange} />
			    </div>

			    <div id="newCan" />

			    <div>
			    	<input className="button addbutton" type="submit" value="Add another candidate" onClick={this.newCan} />
			    </div>

			    <div id="newPos" />

			    <div>
			    	<input className="button addbutton" type="submit" value="Add another position" onClick={this.newPos} />
			    </div>

			</div>
		)

		ReactDOM.render(newPos, document.getElementById('newPos'));
		// console.log("did mount!");
		this.columnNaming();
	}

	render(){
	   var etype = this.state.type;
	   console.log("Etype:" + etype);

	   var etitle = this.state.title;
	   console.log("etitle:" + etitle);

	   console.log("did render!");

	  return(
	    <div className="">
	    	<p>To create a new election, input the following information:</p>
	    	<form action="/newelection" method="post" onSubmit={this.handleSubmit}>
			    <div>
			        <label>Election Title:</label>
			        <input id="etitle" type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
			    </div>
			    <div>
			        <label>Election Type:			    		
				        <select value={this.state.type} name="type" onChange={this.handleTypeChange}>
				        		<option value="none">--</option>
				    			<option value="select1">Select One</option>
				    			<option value="select2">Select Multiple</option>
				    			<option value="ranked">Rank Choices</option>
				    	</select>
			        </label>
			    </div>

			    <div id="newPos" />

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


////////////////////////////

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
			position: '',
			candidate: '',
			numPos: 1,
			numCan: 3
		};

		this.handleElection = this.handleElection.bind(this);
		this.handleType = this.handleType.bind(this);
		this.handlePosition = this.handlePosition.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleElection(event) {
              //console.log("Inside the HandleTitleChange Function");
		this.setState({
	    	election: event.target.value
	    });
	}

	handleType(event) {
		//console.log("Inside the handleTypeChange Function");
        this.setState({
	    	type: event.target.value
	    });
	}

	handlePosition(event){
		this.setState({
	    	position: event.target.value
	    });
	}

	handleChange(event) {
		//console.log("Inside the handleChange Function");
        this.setState({value: event.target.value});
		


		// const title = event.target.title.value;
		// const type = event.target.type.value;

		// this.setState({
	 //      title: title,
	 //      type: type
	 //    });
	}



	handleSubmit(event) {
		//POST TO DATABASE
                
		event.preventDefault();
	
		 console.log(event.target);
		 console.log(this.state.title, this.state.type);
		 console.log("submit - ",this.state);
	}

	newCan(){
		const newCanTest = (	
			<div>
				<div>
			    	<label>Candidate:</label>
			    	<input type="text" className="candidate" />
			    </div>

			    <div id="newCan" />
			</div>
		)

		ReactDOM.render(newCanTest, document.getElementById('newCan'));
	}

	columnNaming(){
		var candidates = document.getElementsByClassName("candidate");
		  
		for (var i = 0; i < candidates.length; i++) {
			candidates[i].setAttribute("name", "can" + i);
		}

		var positions = document.getElementsByClassName("position");
		  
		for (var i = 0; i < positions.length; i++) {
			positions[i].setAttribute("name", "pos" + i);
		}

		console.log("naming complete");
	}

	componentDidMount(){
		const newPos = (

		)

		// ReactDOM.render(newPos, document.getElementById('newPos'));
		// console.log("did mount!");
		// this.columnNaming();
	}

	render(){
	   var type = this.state.type;
	   console.log("type:" + type);

	   var election = this.state.election;
	   console.log("election:" + election);

	   console.log("did render!");
	   

	  return(
	    <div className="">
	    	<p>To create a new election, input the following information:</p>
	    	<form action="/newelection" method="post" onSubmit={this.handleSubmit}>
			        <label>Election Title:
			        	<input id="etitle" type="text" name="title" onChange={this.handleElection} />
			        </label>
			        <label>Election Type:			    		
				        <select name="type" onChange={this.handleType}>
				        		<option value="none">--</option>
				    			<option value="select1">Select One</option>
				    			<option value="select2">Select Multiple</option>
				    			<option value="ranked">Rank Choices</option>
				    	</select>
			        </label>

			    	<label className="position">Position:
			    		<input type="text" className="position"  val="position1" onChange={this.handlePosition} />
			    	</label>
			    	<label className="canForm">Candidate:
			    		<input type="text" className="candidate"  onChange={this.handleChange} />
			    	</label>
			    	<label className="canForm">Candidate:
			    		<input type="text" className="candidate" onChange={this.handleChange} />
			    	</label>
			    	<label className="canForm">Candidate:
			    		<input type="text" className="candidate"  onChange={this.handleChange} />
			    	</label>

				    	<div id="newCan" />

				    <div>
				    	<input className="button addbutton" type="submit" value="Add another candidate" onClick={this.newCan} />
				    </div>

			    		<div id="newPos" />

				    <div>
				    	<input className="button addbutton" type="submit" value="Add another position" onClick={this.newPos} />
				    </div>

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


///////////////

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


