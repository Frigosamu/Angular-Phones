import { Injectable } from '@angular/core';
import { Provider } from './providers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

    providers: Provider[] = [];
    private url = 'assets/providers.json';

    constructor(private http: HttpClient) { }
    
    getProviders() {
        return this.http.get<Provider[]>(this.url);
    }

}