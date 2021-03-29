import angular from 'angular';
import { NgModule } from 'angular-ts-decorators';
import AppModule from '../../app/app.module';
import WebAppSharedModule from '../webapp-shared/webapp-shared.module';
import WebAppAppComponent from './webapp-app.component';
import WebAppAppAlertComponent from './webapp-app-alert/webapp-app-alert.component';
import WebAppAppBookmarkComponent from './webapp-app-bookmark/webapp-app-bookmark.component';
import WebAppAppSearchComponent from './webapp-app-search/webapp-app-search.component';
import WebAppAppWorkingComponent from './webapp-app-working/webapp-app-working.component';
import WebAppAppHelperService from './shared/webapp-app-helper/webapp-app-helper.service';

@NgModule({
  declarations: [
    WebAppAppAlertComponent,
    WebAppAppBookmarkComponent,
    WebAppAppComponent,
    WebAppAppSearchComponent,
    WebAppAppWorkingComponent
  ],
  id: 'WebAppAppModule',
  imports: [WebAppSharedModule, AppModule],
  providers: [WebAppAppHelperService]
})
export default class WebAppAppModule {}

angular.element(document).ready(() => {
  angular.bootstrap(document, [(WebAppAppModule as NgModule).module.name], { strictDi: true });
});
