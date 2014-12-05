angular
	.module("puppyApp")
	.controller("puppiesController", puppiesController)

function puppiesController() {
	this.puppiesList = [
		{
			puppyName: 'Chowder',
			monthsOld: 11,
			gender: 'boy',
			image: "images/chowder.jpg",
			adopted: true,
		},
		{
			puppyName: 'Baylor',
			monthsOld: 9,
			gender: 'boy',
			image: "images/baylor.jpg",
			adopted: false
		},
		{
			puppyName: 'Elsie',
			monthsOld: 10,
			gender: 'boy',
			image: "images/elsie.jpg",
			adopted: false
		},
		{
			puppyName: 'Parker',
			monthsOld: 3,
			gender: 'girl',
			image: "images/parker.jpg",
			adopted: false
		}
	];

	this.addPuppy 				= addPuppy;
	this.deletePuppy 			= deletePuppy; 
	this.adoptedPuppies 	= adoptedPuppies; 
	this.remainingPuppies = remainingPuppies; 
}

