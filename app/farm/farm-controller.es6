(() => {
  'use strict';

  class FarmCtrl {
    constructor($scope,$state,$stateParams,Restangular) {
      let vm = this;
      vm.rest = Restangular;
      vm.ctrlName = 'FarmCtrl';
      vm.farm_id = $stateParams.farmId;
      vm.gridster_opts = {
        // https://github.com/ManifestWebDesign/angular-gridster#via-scope
        margins: [5, 5],
        columns: 20,
        floating: true,
        swapping: false,
        outerMargin: false,
        pushing: true,
      };
      vm.gridster_custom_map = {
        sizeX: 'item.sizex',
        sizeY: 'item.sizey',
        row: 'item.row',
        col: 'item.col',
      };



      // REST OBJECTS
      vm.farm = vm.rest.one('farms',vm.farm_id).get().$object;
    }

    new_zone() {
      this.farm.zone_set.push({col:0,row:0,sizex:2,sizey:2,farm:this.farm.id})
    }

    save(){
     this.farm.save(); 
    }
  }

  /**
   * @ngdoc object
   * @name farm.controller:FarmCtrl
   *
   * @description
   *
   */
  angular
    .module('farm')
    .controller('FarmCtrl', FarmCtrl);
}());
