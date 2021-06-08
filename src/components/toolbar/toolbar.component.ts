import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TooolBarMenu } from './interface/menu.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
    constructor(private router: Router){
     
    }

    public name: any = "dsfsdfdsf";
    public TooolBarMenu: TooolBarMenu[] = [
        {
            name: 'Home', path: '', count:"sdf"
        },
        {
            name: 'About', path: 'about',count:"sdf"
        },
        {
            name: 'Contact', path: 'contact',count:"sdf"
        },
    ];


    goToPage(path:string){
     console.log(path);
     this.router.navigateByUrl(path);
    }

}
