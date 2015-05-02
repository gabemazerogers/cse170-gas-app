'use strict'

app = angular.module 'angularParseBoilerplate', [
  'ng'
  'ngResource'
  'ui.router'
  'ui.bootstrap'
  'app.templates'
  'Parse'
  'angulartics'
  'angulartics.google.analytics'
  'satellizer'
  'mgcrea.ngStrap'
]

app.config (
  $locationProvider
  $stateProvider
  $urlRouterProvider
  $authProvider
  ParseProvider
) ->

  $locationProvider.hashPrefix '!'

  $stateProvider
  .state 'login',
    url: '/login',
    controller: 'LoginCtrl'
    templateUrl: 'login.html'
  .state 'task',
    url: '/task'
    controller: 'TaskCtrl'
    templateUrl: 'task.html'

  ParseProvider.initialize(
    "H3mf7FlzKF0fZdNIvGntzqI1TWn0y3gWXjB2FIth", # Application ID
    "ZKYUey7Kir4adRsIEfPFzlUtrh2FwwjC3dfT8yNB"  # REST API Key
  )

  $authProvider.google(
    clientId: '893059616848-cut5s8vmq30stksu1k96fssu20gtcoq8.apps.googleusercontent.com'
  )

app.run ($rootScope, $state) ->
  $rootScope.$state = $state
