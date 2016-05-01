var interactiveMap = angular.module("interactiveMap",[]);
interactiveMap.controller("interactiveMapCtrl",function($scope){
	resetStates();
	calculateStateTotals();
	$scope.states=states;

	var neededRedVotes = 270 - $scope.redStateVotes;
	$scope.neededRedVotes = neededRedVotes;
	var neededBlueVotes = 270 - $scope.blueStateVotes;
	$scope.neededBlueVotes = neededBlueVotes;

	$scope.resetStates = function(){
		resetStates();
		calculateStateTotals();
		$scope.states = states;
		$scope.neededRedVotes = neededRedVotes;
		$scope.neededBlueVotes = neededBlueVotes;
	}

	$scope.stateClicked = function(state){
		var newColor = getNewColor(state);
	}

	function getNewColor(state){
		if(state.stateColor === "red"){
			state.stateColor = "blue";
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
		}

		$scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%';
		$scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%';
		$scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%';

		$scope.neededRedVotes = 270 - $scope.redStateVotes;
		$scope.neededBlueVotes = 270 - $scope.blueStateVotes;
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
	}

});
