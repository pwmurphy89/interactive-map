var interactiveMap = angular.module("interactiveMap",[]);
interactiveMap.controller("interactiveMapCtrl",function($scope){
	resetStates();
	$scope.states=states;
	calculateStateTotals();
	console.log($scope.states);
	// $scope.smallStates= smallStates;
	// for(var i = 0; i<states.length;i++){
	// 	if (states[i].isSmall){
	// 		console.log(states[i].abbr);

	// 	}
	// }
	// console.log($scope.smallStates);
	// for(var i = 0; i < smallStates.length; i++){
	// 	$scope.smallStates[i].name;
	// }



	$scope.stateClicked = function(state){

		var newColor = getNewColor(state);


	}

	function getNewColor(state){

		if(state.stateColor === "red"){
			state.stateColor = "blue";
			
			// document.getElementbyClassNames("smallVotes").style.color="blue";
			$scope.blueStateVotes += state.electoralVotes;
			$scope.redStateVotes -= state.electoralVotes;

		}else if(state.stateColor === "blue"){
			state.stateColor = "open";
			$scope.openStateVotes += state.electoralVotes;
			$scope.blueStateVotes -= state.electoralVotes;
			
		}else if(state.stateColor === "open"){
			state.stateColor = "red";
			$scope.redStateVotes += state.electoralVotes;
			$scope.openStateVotes -= state.electoralVotes;
			// console.log($scope.openStateVotes);
			}
		$scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%';
		$scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%';
		$scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%';
		console.log($scope.openStateVotes);
		}
function calculateStateTotals(){
	$scope.redStateVotes = 0;
	$scope.openStateVotes = 0;
	$scope.blueStateVotes = 0;

	for(i=0; i < numStates; i++){
		if(blueStates[i]){
			$scope.blueStateVotes += blueStates[i].electoralVotes;
		}else if(redStates[i]){
			$scope.redStateVotes += redStates[i].electoralVotes;
		}else if(openStates[i]){
			$scope.openStateVotes += openStates[i].electoralVotes;
		}
		}
		$scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%';
		$scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%';
		$scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%';
		console.log($scope.openStateVotes);
	}

})



// for (var i=0;i<states[i].length;i++){
// 	      if(states[i].isSmall){
//             $scope.caption = states[i];
//         }  
// }