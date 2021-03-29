import { Component, OnInit } from 'angular-ts-decorators';
import autobind from 'autobind-decorator';
import AppMainComponent from '../../app/app-main/app-main.component';
import WebAppPlatformService from '../webapp-shared/webapp-platform/webapp-platform.service';

@autobind
@Component({
  controllerAs: 'vm',
  selector: 'app',
  styles: [require('./webapp-app.component.scss')],
  template: require('../../app/app-main/app-main.component.html')
})
export default class WebAppAppComponent extends AppMainComponent implements OnInit {
  platformSvc: WebAppPlatformService;

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
    return this.platformSvc.initI18n().then(() => super.ngOnInit());
  }
}
