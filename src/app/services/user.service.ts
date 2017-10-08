import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';

@Injectable()
export class UserService {
    public users;
    private apiUrl
    constructor(private http: Http) {
        this.apiUrl = "http://api.demo.lakmus.org/api/clients";
    }

    public getUsers = (skip: any, take: any, filterByName: string, filterByGender: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl)
                .subscribe((response: any) => {
                    let users: Array<any> = JSON.parse(response._body);
                    if (skip != -1 && take != -1) {
                        if (filterByName && !filterByGender) {
                            let filteredUsersByName = _.filter(users, (item) => { return item.name.toLowerCase().indexOf(filterByName.toLowerCase()) !== -1; });
                            let pageFilteredUsers = _.first(_.rest(filteredUsersByName, skip), take);
                            resolve({ users: pageFilteredUsers, totalItems: filteredUsersByName.length });

                        } else if (!filterByName && filterByGender) {
                            let filteredUsersByGender = _.filter(users, (item) => { return item.gender.indexOf(filterByGender) !== -1; });
                            let pageFilteredUsers = _.first(_.rest(filteredUsersByGender, skip), take);
                            resolve({ users: pageFilteredUsers, totalItems: filterByGender.length });

                        } else if (filterByName && filterByGender) {
                            let filteredUsersByNameAndGender = _.filter(users, (item) => { return item.name.toLowerCase().indexOf(filterByName.toLowerCase()) !== -1 && item.gender.indexOf(filterByGender) !== -1; });
                            let pageFilteredUsers = _.first(_.rest(filteredUsersByNameAndGender, skip), take);
                            resolve({ users: pageFilteredUsers, totalItems: filteredUsersByNameAndGender.length });

                        } else {
                            let pageUsers = _.first(_.rest(users, skip), take);
                            resolve({ users: pageUsers, totalItems: users.length });
                        }
                    }
                    if (filterByName && !filterByGender) {
                        let filteredUsersByName = _.filter(users, (item) => { return item.name.toLowerCase().indexOf(filterByName.toLowerCase()) !== -1; });
                        resolve({ users: _.first(filteredUsersByName, 10), totalItems: filteredUsersByName.length });

                    } else if (!filterByName && filterByGender) {
                        let filteredUsersByGender = _.filter(users, (item) => { return item.gender.indexOf(filterByGender) !== -1; });
                        resolve({ users: _.first(filteredUsersByGender, 10), totalItems: filteredUsersByGender.length })

                    } else if (filterByName && filterByGender) {
                        let filteredUsersByNameAndGender = _.filter(users, (item) => { return item.name.toLowerCase().indexOf(filterByName.toLowerCase()) !== -1 && item.gender.indexOf(filterByGender) !== -1; });
                        resolve({ users: _.first(filteredUsersByNameAndGender, 10), totalItems: filteredUsersByNameAndGender.length });

                    } else {
                        resolve({ users: _.first(users, 10), totalItems: users.length })
                    }
                });
        });
    }

    public getUserById(id) {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/' + id).subscribe((response: any) => {
                debugger;
                let user = JSON.parse(response._body);
                resolve(user);
            })
        });
    }

    public saveUser(user) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl, user,
                new RequestOptions({
                    headers: new Headers({
                        'Content-type': "application/json",
                        "Cache-Control": "no-cache"
                    })
                })).subscribe((response: any) => {
                    resolve(true);
                }, (error) => {
                    reject(false);
                })
        });
    }

}
