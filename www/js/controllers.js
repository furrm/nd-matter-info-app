angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    })

    .controller('PlaylistCtrl', function ($scope, $stateParams) {
    })
    .controller('MembersCtrl', ['$scope', 'Members', function ($scope, Members) {



        $scope.teamData = Members.data;;

        $scope.member = Members.data;

        $scope.selectMember = function (member) {

            console.log("member selected", member); // todo: delete me
            Members.selectedMember = member;

        };



//        $scope.$on("memberSelected", function(event, args){
//            console.log("HEARD THE EVENT!!"); // todo: delete me
//            $scope.member = "It Worked";
//        });
    }])
    .controller('MemberCtrl', ['$scope', 'Members', function ($scope, Members) {
        $scope.name = 'MemberCtrl';

        $scope.member = Members.selectedMember;

        $scope.call = function(){
            console.log("Starting call with:", Members.selectedMember.tel); // todo: delete me
            window.location = "sip:" + Members.selectedMember.tel;
        };

        $scope.im = function(){
            console.log("Starting IM with:", Members.selectedMember.o365email); // todo: delete me
            window.location = "xmpp:" + Members.selectedMember.o365email;
        };



    }])
    .factory('Members', [function () {
        return{
            "name": "Members",
            data: [
                {id: "1", firstName: "Sara", lastName: "Daniels", photo: "danielss.jpg", o365email: "ctouser2@allenovery.onmicrosoft.com", tel: "1442002"},
                {id: "2", firstName: "Caroline", lastName: "Howard", photo: "howardc.jpg", o365email: "ctouser4@allenovery.onmicrosoft.com", tel: "1442003"},
                {id: "3", firstName: "Bushra", lastName: "Vashida", photo: "vashidab.jpg", o365email: "ctouser4@allenovery.onmicrosoft.com", tel: "1442004"},
                {id: "4", firstName: "Toby", lastName: "Roberts", photo: "robertst.jpg", o365email: "ctouser1@allenovery.onmicrosoft.com", tel: "1442001"},
                {id: "5", firstName: "Ian", lastName: "Verrico", photo: "verricoi.jpg", o365email: "ian.verrico@allenovery.onmicrosoft.com", tel: "1444254"},
                {id: "5", firstName: "Dave", lastName: "Gifford", photo: "giffordd.jpg", o365email: "dave.gifford@allenovery.onmicrosoft.com", tel: "1444219"}
            ],
            selectedMember:{}

        }
    }])
;
