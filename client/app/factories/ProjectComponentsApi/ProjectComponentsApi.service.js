'use strict';

angular.module('civicMakersClientApp')
  .factory('ProjectComponentApi', function () {

    var service = {
      getAllProjectComponents: getAllProjectComponents,
      queryProjectComponent: queryProjectComponent
    }

    return service

    function getAllProjectComponents(){
      // return ApiConfig
      //           .apiRequest({
      //               url: '.....',
      //               method: 'get'
      //           });

      //THIS  IS DUMMY DATA THAT WILL BE REPLACED WHEN THE ACTUAL API IS WORKING:
      var dummyData = [

      ];

      return dummyData
    };

    function queryProjectComponent(id){
      console.log('ProjectComponentID: ', id)
      // TODO: when API is ready inplement query

      var dummyProjectComponent = {}

        return dummyProjectComponent;
    }

  });
