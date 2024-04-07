import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Furniture } from 'src/app/types/furniture';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  createFurniture(data: Furniture) {
    const { apiUrl } = environment;
    return this.http.post(`${apiUrl}/furniture`, data);
  }

  getAllLatest() {
    const { apiUrl } = environment;
    return this.http.get<Furniture[]>(`${apiUrl}/furniture/latest`);
  }

  getAllFurniture() {
    const { apiUrl } = environment;
    return this.http.get<Furniture[]>(`${apiUrl}/furniture`);
  }

  searchFurniture(data: any) {
    const { apiUrl } = environment;
    return this.http.post<Furniture[]>(`${apiUrl}/furniture/search`, data);
  }

  getCurrentFurniture(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Furniture>(`${apiUrl}/furniture/${id}`);
  }

  editFurniture(data: Partial<Furniture>, id: string) {
    const { apiUrl } = environment;
    return this.http.post(`${apiUrl}/furniture/edit/${id}`, data);
  }

  deleteCurrentFurniture(userId: any, id: string) {
    const { apiUrl } = environment;
    return this.http.post(`${apiUrl}/furniture/delete/${id}`, userId);
  }










}


