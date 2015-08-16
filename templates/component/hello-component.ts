export class <%= componentName %> implements ng.IDirective {

  private static templateUrl = '<%= componentName %>.html';
  private static restrict = 'E';
  private static bindToController = true;
  private static scope = {};
  private static controller;

  $log: any;

  /** @ngInject */
  constructor($log) {
    this.$log = $log;

    this.$log.info('<%= componentName %> constructor');

    this.templateUrl = 'hello.html';
    this.restrict = 'E';
    this.bindToController = true;
    this.controllerAs = 'vm';
    this.scope = { };
    this.controller = <%= componentName %>;
  }

  sayHello() {
    this.$log.info('hello');
  }

}