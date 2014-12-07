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

	function completedTodos(){
		var count = 0;
		for(var i = 0; i < this.todoList.length; i++){
			if(this.todoList[i].done){
				count++;
			}
		}
		return count;
	}

}