import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLangSubject.asObservable();

  private translationsSubject = new BehaviorSubject<any>({});
  translations$ = this.translationsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.currentLangSubject.subscribe((lang) => {
      this.loadTranslations(lang).subscribe((translations) => {
        this.translationsSubject.next(translations);
      });
    });
  }

  // Cargar la traducción
  loadTranslations(lang: string): Observable<any> {
    return this.http.get(`/assets/i18n/${lang}.json`);
  }

  // Cambiar idioma
  changeLanguage(lang: string): void {
    this.currentLangSubject.next(lang);
  }
}
