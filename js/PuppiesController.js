angular	
	.module("puppyApp")
	.controller("PuppiesController", PuppiesController);

function PuppiesController(){
	
	this.puppyList = [
		{	puppyName: 'Baylor',
			monthsOld: 12,
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
			monthsOld: 8,
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

}