import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/*export class CarService {
  
  constructor( private http: HttpClient) { }

  getCars() {
    return this.http.get('http://34.231.146.47:3000/api/vehicles/?token=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImlhdCI6MTU3MzAwMjM0NCwiZXhwIjoxNTczMDg4NzQ0fQ.fC82u9xcVCbxdttZa1DSgGqAgC179KQ3ojmtek9mkjD-abo8stcTy3ZTcUvg-c-cC-NRU-QuSJLmCKxXtg00wK0-CXZOKb-0Ay1Vg9PEAnBdqT6uizs3iWwiu9Hwz7hEqvNP5qUPmqSZFTLkXMzrpYXgjRDF4YoaHZzcLGJL1H2i-0qZSDkmlcbyxcJ7kIu6stY-fveJvN0_J3HXDyahnHvPF9R26ufVjwRDqWKmctGAMh9LFF_U0BQEHh3iSRMKGA55aV1GFFqzCU7XU96erCdoVRzKSHynGfDWQPp40a3iLBp_OaUS9o9Cu13LLP3cz0zLWwMyZh1PyKA4xuLgXk-cqKbl0uwf2j6HvvEWhEBGNw_MprRSUpOyBbMEodQAEa2Jwv3SeGJQ66vDaVEKDM-fDIyKHCjisr1qwJRQTaExpHxiUc4ws853jsZCY-XgtVw2bgz1DHukbo9A_tl94yo8pNSeIkjqwWfC5MZj-hMaTU26Dc8LuZsVwZG2EMcyZCmGy8gxTz8eiF-KQ-JA-xboq2RIj0j26HhDH_47w0ZRpGq15iiXZEhl_583xo0jbFsFuCxKWGjY6VoB6o17OHHWOHSF6MsKfbMNpNfjXa3lfES2O0S41LrHCHthFzrNFTPdqAjHSTNl8RcX04MiNGZHgA-6HpWqjqsp-CUDSh4')
  }
}*/

export class CarService {

  apiURL = 'http://34.231.146.47:3000/api/vehicles/?token=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImlhdCI6MTU3MzAwMjM0NCwiZXhwIjoxNTczMDg4NzQ0fQ.fC82u9xcVCbxdttZa1DSgGqAgC179KQ3ojmtek9mkjD-abo8stcTy3ZTcUvg-c-cC-NRU-QuSJLmCKxXtg00wK0-CXZOKb-0Ay1Vg9PEAnBdqT6uizs3iWwiu9Hwz7hEqvNP5qUPmqSZFTLkXMzrpYXgjRDF4YoaHZzcLGJL1H2i-0qZSDkmlcbyxcJ7kIu6stY-fveJvN0_J3HXDyahnHvPF9R26ufVjwRDqWKmctGAMh9LFF_U0BQEHh3iSRMKGA55aV1GFFqzCU7XU96erCdoVRzKSHynGfDWQPp40a3iLBp_OaUS9o9Cu13LLP3cz0zLWwMyZh1PyKA4xuLgXk-cqKbl0uwf2j6HvvEWhEBGNw_MprRSUpOyBbMEodQAEa2Jwv3SeGJQ66vDaVEKDM-fDIyKHCjisr1qwJRQTaExpHxiUc4ws853jsZCY-XgtVw2bgz1DHukbo9A_tl94yo8pNSeIkjqwWfC5MZj-hMaTU26Dc8LuZsVwZG2EMcyZCmGy8gxTz8eiF-KQ-JA-xboq2RIj0j26HhDH_47w0ZRpGq15iiXZEhl_583xo0jbFsFuCxKWGjY6VoB6o17OHHWOHSF6MsKfbMNpNfjXa3lfES2O0S41LrHCHthFzrNFTPdqAjHSTNl8RcX04MiNGZHgA-6HpWqjqsp-CUDSh4'

  constructor( private http: HttpClient) { }

  getCars() {
    return this.http.get(this.apiURL)
  }
}