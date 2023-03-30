/**
 *  Singleton supports data storage
 */
import {Injectable} from '@angular/core';

@Injectable()
export class GlobalDataService {
    static instance: GlobalDataService;
    static isCreating = false;
    private dataStorage: any;

    constructor() {
        if (!GlobalDataService.isCreating) {
            throw new Error('You can\'t call new in Singleton instances!');
        } else {
            this.dataStorage = localStorage;   // this the Web  javascript  Local Storage API
        }
    }
    static getInstance() {
        if (GlobalDataService.instance == null) {
            GlobalDataService.isCreating = true;
            GlobalDataService.instance = new GlobalDataService();
            GlobalDataService.isCreating = false;
        }
        return GlobalDataService.instance;
    }
    public retrieve(key: string): any {
        const item = this.dataStorage.getItem(key);

        if (item && item !== 'undefined') {
            return JSON.parse(this.dataStorage.getItem(key));
        } else {
            return ('none') ;
        }
    }
    public store(key: string, value: any) {
        this.dataStorage.setItem(key, JSON.stringify(value));
    }

    //----------------
    // public globals
    //----------------

}
