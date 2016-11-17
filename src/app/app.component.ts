import {Component, OnInit} from '@angular/core';

import '../css/main.css';
import '../css/test.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
