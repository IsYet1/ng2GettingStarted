﻿
import { Component } from 'angular2/core';

@Component({
    selector: 'pm-app',
    template:
    `<div><h1>{{pageTitle}}</h1>
        <div>My 1st Component</div>
    </div>
    `
})


export class AppComponent {
    pageTitle: string = 'Acme Product Managment';
}