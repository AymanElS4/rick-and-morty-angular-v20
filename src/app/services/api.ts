import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    
    throw new Error('Método no implementado');
  }

  searchCharacters(name: string): Observable<ApiResponse> {
    throw new Error('Método no implementado');
  }
}
