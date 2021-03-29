import { Injectable } from 'angular-ts-decorators';
import autobind from 'autobind-decorator';
import { StoreKey } from '../../../shared/store/store.enum';
import { StoreContent } from '../../../shared/store/store.interface';
import StoreService from '../../../shared/store/store.service';

@autobind
@Injectable('StoreService')
export default class WebAppStoreService extends StoreService {
  /// ////////////////////////
  idCol = 'id';
  nativeStorageKeys: IDBValidKey[] = [
    StoreKey.AlternateSearchBarPosition,
    StoreKey.AutoFetchMetadata,
    StoreKey.CheckForAppUpdates,
    StoreKey.DarkModeEnabled,
    StoreKey.DefaultToFolderView,
    StoreKey.DisplayHelp,
    StoreKey.DisplayOtherSyncsWarning,
    StoreKey.DisplayPermissions,
    StoreKey.DisplayUpdated,
    StoreKey.LastUpgradeVersion,
    StoreKey.SyncBookmarksToolbar,
    StoreKey.SyncEnabled
  ];

  static $inject = ['$q'];

  protected clear(): ng.IPromise<void> {
    return this.methodNotApplicable();
  }

  protected getFromStore<T = StoreContent>(keys: IDBValidKey[] = []): ng.IPromise<T[]> {
    return this.methodNotApplicable();
  }

  protected keys(): ng.IPromise<IDBValidKey[]> {
    return this.methodNotApplicable();
  }

  protected removeFromStore(keys: IDBValidKey[] = []): ng.IPromise<void> {
    return this.methodNotApplicable();
  }

  protected setInStore(key: IDBValidKey, value: any): ng.IPromise<void> {
    return this.methodNotApplicable();
  }

  methodNotApplicable(): ng.IPromise<any> {
    // Unused for this platform
    return this.$q.resolve();
  }
}
