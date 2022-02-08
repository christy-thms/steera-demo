import { Injectable } from '@angular/core'; 
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
/**
 * export safe local storage access methods
 *
 * @export
 * @class LocalStorageUtility
 */

export class LocalStorageUtilService {
    constructor(private utilityService:UtilityService){}

  /**
     * gets the item from local storage
     * 
     * @param {string} key
     * @returns {string}
     *
     * @memberOf LocalStorageUtility
     */
   public  getItem(key: string): string {
      let item: string = '';
      try {
          item = localStorage.getItem(key) as string;
      } catch (err) {
          this.utilityService.error(err); 
      }
      return item;
  }

  /**
   * sets the item to local storage
   *
   * @static
   * @param {string} key
   * @param {string} item
   *
   * @memberOf LocalStorageUtility
   */
  public setItem(key: string, item: string) {
      try {
          localStorage.setItem(key, item);
      } catch (err) {
        this.utilityService.error(err); 
      }
  }

  /**
   * removes the item from local storage
   *
   * @static
   * @param {string} key
   *
   * @memberOf LocalStorageUtility
   */
  public removeItem(key: string) {
      try {
          localStorage.removeItem(key);
      } catch (err) {
        this.utilityService.error(err); 
      }
  }

}
