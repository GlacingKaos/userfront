import { Observable } from 'rxjs/Rx';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Auth } from './../../providers/auth/auth.service';
import { Logger } from 'angular2-logger/core';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent 
{ 
   
}
