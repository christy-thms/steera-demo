import { Component, OnInit } from '@angular/core';
import { LocalStorageUtilService } from '../../common/utils/local-storage-util.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Holds the title 
   */
  public title: string = '';
   /**
   * Holds the logo 
   */
  public logo: string = '';

  /**
   * initializes an instance and injects dependencies
   * @param localStorageUtilService 
   */
  constructor(
    private localStorageUtilService:LocalStorageUtilService) { }

  /**
   * ng lifecycle hook
   */
  ngOnInit(): void {
    this.title = this.localStorageUtilService.getItem('title');
    this.logo = this.localStorageUtilService.getItem('logo')
  }

}
