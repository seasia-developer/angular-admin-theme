import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SideMenuContainerService } from 'src/app/services/side-menu-container.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuData: any;
  headerfullwidth: boolean = false;
  mainFullwidth: boolean = false;
  asideShrink: boolean = false;
  headerShrink: boolean = false;
  sideTitleNone: boolean = false;
  sideBottom: boolean = false;
  menuHide = false;

  constructor(public menuItems: SideMenuContainerService, private router: Router, public toaster: ToastrService) {
    this.menuData = this.menuItems.appSidebarmenu;


  }
  reverseChange() {
    this.headerfullwidth = false;
    this.mainFullwidth = false;
    this.asideShrink = false;
    this.headerShrink = false;
    this.sideTitleNone = false;
    this.sideBottom = false
  }


  changeClass() {
    this.asideShrink = !this.asideShrink
    this.headerfullwidth = !this.headerfullwidth;
    this.mainFullwidth = !this.mainFullwidth;
    this.headerShrink = !this.headerShrink;
    this.sideTitleNone = !this.sideTitleNone;
    this.sideBottom = !this.sideBottom;
    console.log(this.headerfullwidth, "worked")
  }


  collapse(){

  }

  logout() {
    if (localStorage.getItem('userData')) {
    this.toaster.success('Success' ,'User Logged Out Successfully' , {
        timeOut: 3000,
      });
      localStorage.removeItem('userData');
      this.router.navigate(['/auth/login'])
    }
  }

}
