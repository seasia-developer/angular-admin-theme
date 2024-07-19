import { Component } from '@angular/core';
import { SideMenuContainerService } from 'src/app/services/side-menu-container.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent {
  menuData: any;

  constructor(public menuItems: SideMenuContainerService) {
    this.menuData = this.menuItems.appSidebarmenu;

  }

}
