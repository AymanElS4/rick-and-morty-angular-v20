import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiResponse, Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private readonly API_URL = 'https://rickandmortyapi.com/api/character';
  
  private readonly http = inject(HttpClient);

  private charactersSignal = signal<Character[]>([]); // Define esto como una señal<Character[]>

  public readonly characters = this.charactersSignal.asReadonly; // Define esto como una señal de solo lectura

  getCharacters(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_URL).pipe(
      tap(response => this.charactersSignal.set(response.results))
    );
  }

  searchCharacters(name: string): Observable<ApiResponse> {
    if (!name.trim()) {
      return this.getCharacters();
    }
    const url = `${this.API_URL}?name=${encodeURIComponent(name)}`;
    return this.http.get<ApiResponse>(url).pipe(
      tap(response => this.charactersSignal.set(response.results))
    );
  }
}
