angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaBatteryStatus,$ionicPlatform,$cordovaCamera,pushService) {

        $scope.batteryLevel = "100%"
        $scope.myimg;
//        $ionicPlatform.ready(function() {


           $scope.showbattery = function(){
               $scope.batteryLevel = 'Show battery'
               $cordovaBatteryStatus.$on('batterystatus',function(result){
                   $scope.batteryLevel = result.level;

               })
           }

//        })
            $scope.takePicture = function () {
                //  alert("taking pic")
                $scope.batteryLevel = 'taking picture'

                var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {
                    // Success! Image data is here
                    //  alert("image data is here: " + imageData)
                    $scope.myimg = "data:image/jpeg;base64," + imageData;
                }, function (err) {
                    // An error occured. Show a message to the user
                });
            }
//        })

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('PushNotificationCtrl',function($scope,$ionicPlatform,pushService){
        $ionicPlatform.ready(function() {
           pushService.register();
        });
    })






