window.ADDController = function($scope,$http,$location){
    $scope.title = "Thêm thông tin "
    $scope.addBook = function(){
        const apiURL = 'http://localhost:3000/student'

        let newBook = {
            ten : $scope.book.ten,
            namsinh : $scope.book.namsinh,
            chuyennganh : $scope.book.chuyennganh
        }

        $http.post(
            apiURL,
            newBook
        ).then(function(res){
            if(res.status == 201){
                $location.path('/trang-chu');
            }
        })
    }
}