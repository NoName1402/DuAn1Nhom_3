window.viewController = function($scope,$http){
    $scope.title = "Đây là Trang chủ ";

        const apiURL = 'http://localhost:3000/student'

        function getData(){
            $http.get(apiURL).then(function (res){
                if(res.status == 200){
                    console.log(res.data);
                    $scope.books1 = res.data;
                }
            })

        }

        getData();
        
    
        
    $scope.delete = function(id){
        if(id){
            let confim = window.confirm("Bạn có chắc muốn xóa không")
            if(confim){
                $http.delete(
                    `${apiURL}/${id}`
                ).then(function (res){
                    if(res.status == 200){
                        alert("Xóa Thành công");
                    }
                })
            }
        }
    }
}