import { Alert } from '../../shared/alert/alert.interface';

export interface WebAppAlert extends Alert {
  action?: any;
  actionCallback?: () => any;
}
