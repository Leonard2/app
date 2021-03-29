import angular from 'angular';
import { Component, OnInit } from 'angular-ts-decorators';
import autobind from 'autobind-decorator';
import AppMainComponent from '../../app/app-main/app-main.component';

@autobind
@Component({
  controllerAs: 'vm',
  selector: 'app',
  styles: [require('./webapp-app.component.scss')],
  template: require('../../app/app-main/app-main.component.html')
})

export default class WebAppAppComponent extends AppMainComponent implements OnInit {

  static $inject = [
    '$q',
    '$scope',
    '$timeout',
    'AlertService',
    'AppHelperService',
    'BookmarkHelperService',
    'LogService',
    'NetworkService',
    'PlatformService',
    'SettingsService',
    'StoreService',
    'UtilityService',
    'WorkingService'
  ];

  ngOnInit(): ng.IPromise<void> {
    return super.ngOnInit();
  }
}