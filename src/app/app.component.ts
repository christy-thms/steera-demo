import { Component, OnInit } from '@angular/core';
import { Config } from './common/models/config.model';
import { ConfigService } from './common/services/config.service';
import { LocalStorageUtilService } from './common/utils/local-storage-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {  
  /**
   * initilizes and add dependencies 
   * @param configService 
   * @param localStorageUtilService 
   */
  constructor(private configService: ConfigService, 
    private localStorageUtilService:LocalStorageUtilService
  ){}

  /**
   * lifecycle hook
   */
  ngOnInit() {
    this.configService.getConfig().subscribe(data => {
      let config = data;
      Object.keys(config).forEach(e => this.localStorageUtilService.setItem(e,config[e])); 
    })
 }
}
