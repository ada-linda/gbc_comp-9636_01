	//localStorage.setItem('students', 'testing');
	//console.log(localStorage.getItem('students'));
	//return;

angular.module('studentApp', []).controller('StudentsController', ['$scope', function($scope) {
	$scope.students = JSON.parse(localStorage.getItem('students')) || [{
		first_name:'Calvin',
		last_name: 'Tennant',
		twitter_username: 'c11t_',
		number: 1,
}];
	$scope.addStudent = function() {
		console.log($scope.first_name);
		$scope.students.push({
					number: $scope.students.length + 1,
					first_name: $scope.first_name, 
					last_name: $scope.last_name, 
					twitter_username: $scope.twitter_username,
				});
				$scope.first_name='';
				$scope.last_name='';
				$scope.twitter_username='';

				localStorage.setItem('students', JSON.stringify($scope.students));
	}

	$scope.removeStudent=function(student) {
		var arrayIndex = $scope.students.indexOf(student);
		$scope.students.splice(arrayIndex, 1);


		$scope.students.forEach(function(student, i){
		 student.number= i + 1;
		
			console.log(student,i);
		});
				localStorage.setItem('students', JSON.stringify($scope.students));

	};
}]);