// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link, NavLink } from 'react-router-dom'; 
import CheckboxInput from "./CheckboxInput";
// import helpers from './util/helpers';

var axios = require("axios");


class Vote extends Component{

	constructor(props) {
		super(props);
		this.state = {
			electionid: '',
			electiontitle: '',
			position1Title: '',
			position1opts:[],
			choice1: '',
			position2Title: '',
			position2opts: [],
			choice2: '',
			position3Title: '',
			position3opts: [],
			choice3: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	loadElection(){
		// helpers.getElection()
		// 	.then((response) => {
		// 		//MAP IN DATA TO RENDER ON PAGE
		// 		let candidates = response.data.Candidate;  
		// 	    if(candidates){
		// 	        let canlist = candidates.map((name) => {

		// 			return(
		// 				<div className="radio">
		// 				    <label>
		// 				        <input type="radio" value={name} onChange={this.handleOptionChange} checked={this.state.selectedOption === this.state.value} />
		// 				        {name}
		// 				    </label>
		// 				</div>
		// 			)
		//         });
		//
		//		//LOAD TYPE TO POPULATE INSTRUCTIONS
		//
		// 	});

		//FOR PURPOSE OF THIS EXAMPLE, SET STATE MANUALLY
		this.setState({
			electiontitle: "Ice Cream",
			position1Title: 'Most Awesome',
			position1opts: ['Butter Pecan','Sea Salt Caramel', 'Chocolate Cayenne'],
			position2Title: 'Most Awful',
			position2opts: ['Superman','Peppermint','Bubblegum',],
			position3Title: 'Favorite Kind',
			position3opts: ['FroYo', 'Gelato', 'Sorbet'],
		});

		console.log("loaded!");
	}

	handleOptionChange(event){
		//REF:
		//http://react.tips/radio-buttons-in-reactjs/
		//https://stackoverflow.com/questions/35451287/react-cant-uncheck-radio-button
		//https://github.com/facebook/react/issues/1471
		const value = event.target.value === this.state[event.target.name] ? "" : event.target.value;
		const choice = {[event.target.name]: value};
		this.setState(choice);
	}

	handleSubmit(event){
		//POST TO DATABASE
		event.preventDefault();

		var post = {};
		post.election = this.state.electiontitle;
		post.position1Title = this.state.choice1;
		post.position2Title = this.state.choice2;
		post.position3Title = this.state.choice3;
		axios.post("/api/vote", post);
		alert("Your vote has been submitted!");
	}

	componentWillMount(){
		this.loadElection();
	}

	render(){

		return(
			<div className="">

				<h3>Now Voting for:</h3>
				<h1 className="electiontitle">{this.state.electiontitle}</h1>
				<hr />
				<p>Please select one candidate for each position.</p>
				<hr />

				<form onSubmit={this.handleSubmit}>
					<CheckboxInput title={this.state.position1Title}
						options = {this.state.position1opts}
						type = "radio"
						selected = {this.state.choice1}
						onChange = {this.handleOptionChange}
						name = "choice1"
						withLabels
					/>

					<CheckboxInput title={this.state.position2Title}
						options = {this.state.position2opts}
						type = "radio"
						selected = {this.state.choice2}
						onChange = {this.handleOptionChange}
						name = "choice2"
						withLabels
					/>

					<CheckboxInput title={this.state.position3Title}
						options = {this.state.position3opts}
						type = "radio"
						selected = {this.state.choice3}
						onChange = {this.handleOptionChange}
						name = "choice3"
						withLabels
					/>

					<input type="submit" value="Cast your Vote"/>
				</form>

			</div>
		)
	}

}

// EXPORT COMPONENT
export default Vote;