Array.prototype.filterObjects = function(key, value) {
  return this.filter(function(x) { return x[key] === value; })
};

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };



    })

.controller('PlaylistsCtrl', function($scope) {

      $scope.playlists = [
        {
          id: '1',
          programName: 'Animals Gone Wild',
          episodeTitle: 'Shock &amp; Awe',
          episodeInfo: 'S1 | Ep3',
          description: 'A look at the survival instincts of different animals. Included: octopus; orangutan; bear.',
          channel: 'natgeo',
          image: 'natgeo-animals.jpg'
        },
        {
          id: '2',
          programName: 'Modern Family',
          episodeTitle: 'Mother\'s Day',
          episodeInfo: 'S2 | Ep21',
          description: 'Claire and Gloria\'s Mother\'s Day excursion outdoors with the kids turns into the mother of all disasters. Meanwhile, Phil and Jay share an awkward moment when they stay home to prepare dinner for everyone; and Cameron worries about gender...',
          channel: 'usa',
          image: 'usa-modern.jpg'
        },
        {
          id: '3',
          programName: 'Wheel of Fortune',
          episodeTitle: '',
          episodeInfo: '',
          description: 'Classic game-show version of "hangman" in which contestants solve word puzzles for cash and prizes.',
          channel: 'nbc',
          image: 'nbc-wheel.jpg'
        },
        {
          id: '4',
          programName: 'Eyewitness News',
          episodeTitle: 'Eyewitness News at 11',
          episodeInfo: '',
          description: 'Local news, sports and weather.',
          channel: 'cbs',
          image: 'cbs-eyewitness.jpg'
        },
        {
          id: '5',
          programName: 'Access Hollywood',
          episodeTitle: 'Access Hollywood',
          episodeInfo: '11/14/14',
          description: 'The new trailer for "Fifty Shades of Grey"; an interview with Diane von Furstenberg; highlights from an event honoring Stella McCartney.',
          channel: 'nbc',
          image: 'nbc-access.jpg'
        },
        {
          id: '6',
          programName: 'Art in the Twenty First Century',
          episodeTitle: 'Fiction',
          episodeInfo: 'S7 | Ep4',
          description: 'The Season 4 finale focuses on how artists create compelling stories. Included: Katharina Grosse, who creates abstract sculptures and paintings; Joan Jonas, who adds a unique spin to theatrical storytelling; and Omar Fast, who makes video...',
          channel: 'pbs',
          channelCleanName: 'PBS',
          image: 'pbs-art.jpg'
        },
        {
          id: '7',
          programName: 'Anthony Bourdain Parts Unknown',
          episodeTitle: 'Massachusetts',
          episodeInfo: 'S4 | Ep7',
          description: 'Anthony visits Massachusetts.',
          channel: 'cnn',
          image: 'cnn-anthony.jpg'
        },
        {
          id: '8',
          programName: 'Jimmy Kimmel Live',
          episodeTitle: 'S12 | Ep149',
          episodeInfo: '11/05/14',
          description: 'Julie Bowen ("Modern Family"); CMA Award winner Kacey Musgraves. Also: Florida Georgia Line perform.',
          channel: 'abc',
          image: 'abc-jimmy.jpg'
        },
        {
          id: '9',
          programName: 'Jay Leno\'s Garage: The Ultimate Car Week',
          episodeTitle: 'Jay Leno\'s Garage: The Ultimate Car Week',
          episodeInfo: '',
          description: 'Jay Leno explores collectible cars during Monterey Week at California\'s Pebble Beach.',
          channel: 'cnbc',
          image: 'cnbc-jayleno.jpg'
        },
        {
          id: '10',
          programName: 'FOX-y Lady',
          episodeTitle: 'FOX-y Lady',
          episodeInfo: 'S7 | Ep10',
          description: 'Lois gets a job as a cable-news reporter. Her first assignment: an exposé of a certain liberal documentary filmmaker who\'s usually seen wearing a baseball cap. Meanwhile, Peter and Chris dream up a cartoon show to pitch to a network.',
          channel: 'cartoon',
          image: 'cartoon-familyguy.jpg'
        },
        {
          id: '11',
          programName: 'NBA Basketball',
          episodeTitle: '',
          episodeInfo: '',
          description: 'San Antonio at Los Angeles Lakers. Kobe Bryant gets his first crack at the Spurs since L.A. was swept in the 2013 playoffs, part of San Antonio\'s 11-2 run in the series, with a 6-1 mark at Staples Center. Jeremy Lin faces Tony Parker at t...',
          channel: 'espn',
          image: 'espn-nba.jpg'
        },
        {
          id: '12',
          programName: 'Naked City',
          episodeTitle: 'Stop the Parade, a Baby Is Crying!',
          episodeInfo: 'S4 | Ep25',
          description: 'Vivian North (Diana Hyland) is a tragic character. She\'s divorced, lonely, upset---and very dangerous. Crews: Jack Klugman. North: James Patterson. Flint: Paul Burke. Wilkes: Alex Vespi. Parker: Horace McMahon. Arcaro: Harry Bellaver. Ear...',
          channel: 'metv',
          image: 'metv-nakedcity.jpg'
        },
        {
          id: '13',
          programName: 'Inside Edition',
          episodeTitle: 'Beasts in the City',
          episodeInfo: 'S26 | Ep44',
          description: 'A report on wild creatures stalking urban streets in the U.S.',
          channel: 'fox',
          image: 'fox-inside.jpg'
        },
        {
          id: '14',
          programName: 'Tanked',
          episodeTitle: 'SHAQ-SIZED',
          episodeInfo: 'S5 | Ep1',
          description: 'NBA legend Shaquille O\'Neal requests a saltwater tank for his Florida mansion that is built in the front end of an 18-wheeler and has a Superman theme.',
          channel: 'animal',
          image: 'animal-tanked.jpg'
        }
        //,
        //{
        //  programName: '',
        //  episodeTitle: '',
        //  episodeInfo: '',
        //  description: '',
        //  channel: '',
        //  image: ''
        //}
      ];



})

.controller('PlaylistCtrl', function($scope, $stateParams) {

      var playlistId = $stateParams.playlistId;

      $scope.playlists = [
        {
          id: '1',
          programName: 'Animals Gone Wild',
          episodeTitle: 'Shock & Awe',
          episodeInfo: 'S1 | Ep3',
          description: 'A look at the survival instincts of different animals. Included: octopus; orangutan; bear.',
          channel: 'natgeo',
          image: 'natgeo-animals.jpg'
        },
        {
          id: '2',
          programName: 'Modern Family',
          episodeTitle: 'Mother\'s Day',
          episodeInfo: 'S2 | Ep21',
          description: 'Claire and Gloria\'s Mother\'s Day excursion outdoors with the kids turns into the mother of all disasters. Meanwhile, Phil and Jay share an awkward moment when they stay home to prepare dinner for everyone; and Cameron worries about gender...',
          channel: 'usa',
          image: 'usa-modern.jpg'
        },
        {
          id: '3',
          programName: 'Wheel of Fortune',
          episodeTitle: '',
          episodeInfo: '',
          description: 'Classic game-show version of "hangman" in which contestants solve word puzzles for cash and prizes.',
          channel: 'nbc',
          image: 'nbc-wheel.jpg'
        },
        {
          id: '4',
          programName: 'Eyewitness News',
          episodeTitle: 'Eyewitness News at 11',
          episodeInfo: '',
          description: 'Local news, sports and weather.',
          channel: 'cbs',
          image: 'cbs-eyewitness.jpg'
        },
        {
          id: '5',
          programName: 'Access Hollywood',
          episodeTitle: 'Access Hollywood',
          episodeInfo: '11/14/14',
          description: 'The new trailer for "Fifty Shades of Grey"; an interview with Diane von Furstenberg; highlights from an event honoring Stella McCartney.',
          channel: 'nbc',
          image: 'nbc-access.jpg'
        },
        {
          id: '6',
          programName: 'Art in the Twenty First Century',
          episodeTitle: 'Fiction',
          episodeInfo: 'S7 | Ep4',
          description: 'The Season 4 finale focuses on how artists create compelling stories. Included: Katharina Grosse, who creates abstract sculptures and paintings; Joan Jonas, who adds a unique spin to theatrical storytelling; and Omar Fast, who makes video...',
          channel: 'pbs',
          image: 'pbs-art.jpg'
        },
        {
          id: '7',
          programName: 'Anthony Bourdain Parts Unknown',
          episodeTitle: 'Massachusetts',
          episodeInfo: 'S4 | Ep7',
          description: 'Anthony visits Massachusetts.',
          channel: 'cnn',
          image: 'cnn-anthony.jpg'
        },
        {
          id: '8',
          programName: 'Jimmy Kimmel Live',
          episodeTitle: 'S12 | Ep149',
          episodeInfo: '11/05/14',
          description: 'Julie Bowen ("Modern Family"); CMA Award winner Kacey Musgraves. Also: Florida Georgia Line perform.',
          channel: 'abc',
          image: 'abc-jimmy.jpg'
        },
        {
          id: '9',
          programName: 'Jay Leno\'s Garage: The Ultimate Car Week',
          episodeTitle: 'Jay Leno\'s Garage: The Ultimate Car Week',
          episodeInfo: '',
          description: 'Jay Leno explores collectible cars during Monterey Week at California\'s Pebble Beach.',
          channel: 'cnbc',
          image: 'cnbc-jayleno.jpg'
        },
        {
          id: '10',
          programName: 'FOX-y Lady',
          episodeTitle: 'FOX-y Lady',
          episodeInfo: 'S7 | Ep10',
          description: 'Lois gets a job as a cable-news reporter. Her first assignment: an exposé of a certain liberal documentary filmmaker who\'s usually seen wearing a baseball cap. Meanwhile, Peter and Chris dream up a cartoon show to pitch to a network.',
          channel: 'cartoon',
          image: 'cartoon-familyguy.jpg'
        },
        {
          id: '11',
          programName: 'NBA Basketball',
          episodeTitle: '',
          episodeInfo: '',
          description: 'San Antonio at Los Angeles Lakers. Kobe Bryant gets his first crack at the Spurs since L.A. was swept in the 2013 playoffs, part of San Antonio\'s 11-2 run in the series, with a 6-1 mark at Staples Center. Jeremy Lin faces Tony Parker at t...',
          channel: 'espn',
          image: 'espn-nba.jpg'
        },
        {
          id: '12',
          programName: 'Naked City',
          episodeTitle: 'Stop the Parade, a Baby Is Crying!',
          episodeInfo: 'S4 | Ep25',
          description: 'Vivian North (Diana Hyland) is a tragic character. She\'s divorced, lonely, upset---and very dangerous. Crews: Jack Klugman. North: James Patterson. Flint: Paul Burke. Wilkes: Alex Vespi. Parker: Horace McMahon. Arcaro: Harry Bellaver. Ear...',
          channel: 'metv',
          image: 'metv-nakedcity.jpg'
        },
        {
          id: '13',
          programName: 'Inside Edition',
          episodeTitle: 'Beasts in the City',
          episodeInfo: 'S26 | Ep44',
          description: 'A report on wild creatures stalking urban streets in the U.S.',
          channel: 'fox',
          image: 'fox-inside.jpg'
        },
        {
          id: '14',
          programName: 'Tanked',
          episodeTitle: 'SHAQ-SIZED',
          episodeInfo: 'S5 | Ep1',
          description: 'NBA legend Shaquille O\'Neal requests a saltwater tank for his Florida mansion that is built in the front end of an 18-wheeler and has a Superman theme.',
          channel: 'animal',
          image: 'animal-tanked.jpg'
        }
        //,
        //{
        //  programName: '',
        //  episodeTitle: '',
        //  episodeInfo: '',
        //  description: '',
        //  channel: '',
        //  image: ''
        //}
      ];

      $scope.playlist = $scope.playlists.filterObjects("id", $stateParams.playlistId)[0];

});
