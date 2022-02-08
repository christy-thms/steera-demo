import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  /**
   * logging a message
   * @param message 
   * @param optionalParams 
   */
  public log(message?: any, ...optionalParams: any[]): void { 
        // tslint:disable-next-line:no-console
        console.log(message, optionalParams); 
  }

  /**
   * Logging error messgae
   * @param message 
   * @param optionalParams 
   */
  public error(message?: any, ...optionalParams: any[]): void { 
          console.error(message, optionalParams); 
  }
}
