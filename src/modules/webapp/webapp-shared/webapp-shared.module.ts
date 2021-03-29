import 'angular-hammer';
import { NgModule } from 'angular-ts-decorators';
import WebAppBookmarkService from './webapp-bookmark/webapp-bookmark.service';
import WebAppPlatformService from './webapp-platform/webapp-platform.service';
import WebAppStoreService from './webapp-store/webapp-store.service';
import WebAppV160UpgradeProviderService from './webapp-upgrade/webapp-v1.6.0-upgrade-provider.service';

@NgModule({
  id: 'WebAppSharedModule',
  providers: [WebAppBookmarkService, WebAppPlatformService, WebAppStoreService, WebAppV160UpgradeProviderService]
})
export default class WebAppSharedModule {}
