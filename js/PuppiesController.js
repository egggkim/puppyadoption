angular	
	.module("puppyApp")
	.controller("PuppiesController", PuppiesController);

function PuppiesController() {
	
	this.puppyList = [
		{	puppyName: 'Baylor',
			monthsOld: 5,
			gender: 'boy',
			image: "images/baylor.jpg",
			adopted: true,
		},

		{	puppyName: 'Chowder',
			monthsOld: 4,
			gender: 'boy',
			image: "images/chowder.jpg",
			adopted: false
		},

		{	puppyName: 'Parker',
			monthsOld: 12,
			gender: 'boy',
			image: "images/parker.jpg",
			adopted: false
		},

		{	puppyName: 'Elsie',
			monthsOld: 3,
			gender: 'girl',
			image: "images/elsie.jpg",
			adopted: false
		}
	];

	this.adoptPuppy 	= adoptPuppy;
	this.unadoptPuppy = unadoptPuppy;

	function adoptPuppy() {
		this.adopted = true;
		// REMOVE THIS CONSOLE.LOG AT A LATER DATE, CURRENTLY IN PLACE FOR TESTING
		console.log("false to true")
	}

	function unadoptPuppy() {
		this.adopted = false;
		// REMOVE THIS CONSOLE.LOG AT A LATER DATE, CURRENTLY IN PLACE FOR TESTING
		console.log("true to false")		
	}

}