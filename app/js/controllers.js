(function() {

  /* @ngInject */
  angular
    .module('directorio.controllers', ['directorio.services'])
    .controller('EmpleadosListController', EmpleadosListController)
    .controller('EmpleadoDetailController', EmpleadoDetailController)
    .controller('ReportsController', ReportsController)
    .controller('TabsController', TabsController);

  /* @ngInject */
  function EmpleadosListController(Empleado) {
    var vm = this;
    this.empleados = Empleado.query();

    this.search = function() {
      alert(vm.text);
    }
  }

  /* @ngInject */
  function EmpleadoDetailController($routeParams, Empleado) {
    var vm = this;
    this.empleado = Empleado.get($routeParams.empleadoId);
  }

  /* @ngInject */
  function ReportsController($routeParams, Report) {
    var vm = this;
    this.subordinados = Report.query($routeParams.empleadoId);
  }

  function TabsController() {
    this.tab = 1;
    this.selectTab = function(tab) {
      this.tab = tab;
    };
  }

})();
