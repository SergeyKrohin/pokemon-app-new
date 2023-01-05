import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable()
export class DataService implements OnInit {

    constructor(private http: HttpClient) {}
    
    public getJSON(): Observable<any> {
        return this.http.get("./assets/sample.json");
    }

    ngOnInit() {
        this.getJSON().subscribe((data:any) => {
            console.log(data);
        });
    }

}