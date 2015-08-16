import <%= componentName %> from './component/hello-component';

// declaring the module
angular.module('<%= moduleName %>', [])
  .directive('<%= componentSelector %>', /** @ngInject */($injector) => {
    return $injector.instantiate(<%= componentName %>);
  });
;
