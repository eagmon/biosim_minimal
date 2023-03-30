import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  static LOCAL_CTRL_ENDPOINT = 'http://localhost:3000/';  // local data  server
  static PRODUCTION_CTRL_ENDPOINT = 'https://cyteam-node-srv.uc.r.appspot.com/' ;   //  'https://vivarium-cell-simulations.appspot.com/';

  static _endpoint = HttpDataService.LOCAL_CTRL_ENDPOINT; // Local

  private _dataHandlerUrl = HttpDataService._endpoint + 'api/data/items';

  private hdrOptions = { headers: {'Content-Type': 'application/json' } };
  // --------------
  // C'tor
  // --------------
  constructor(private _http: HttpClient) {
  }

  // ----------------------
  //  Requests set
  // ----------------------
  postGetItems(userId: string): Observable<object> {
    const postData: any = {};
    const rqstUrl = HttpDataService._endpoint + 'api/data/items';
    postData.action = 'GetMyItems';
    postData.ownerId = userId;
    const xfrData = JSON.stringify(postData);
    return this._http.post(rqstUrl, xfrData, this.hdrOptions );
  }
  postGetSimulators(): Observable<object> {
    const postData: any = {};
    const rqstUrl = HttpDataService._endpoint + 'api/simulators/items';
    postData.action = 'GetMyItems';
    const xfrData = JSON.stringify(postData);
    return this._http.post(rqstUrl, xfrData, this.hdrOptions );
  }
  postGetProjects(): Observable<object> {
    const postData: any = {};
    const rqstUrl = HttpDataService._endpoint + 'api/projects/items';
    postData.action = 'GetMyItems';
    const xfrData = JSON.stringify(postData);
    return this._http.post(rqstUrl, xfrData, this.hdrOptions );
  }
} //  ./HttpDataService
