import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: string): string {
    let translation = '';
    // Divide la clave como 'HOME.TITLE' en un array ['HOME', 'TITLE']
    const keys = value.split('.');

    // Accede a las propiedades anidadas
    this.translationService.translations$.subscribe((translations) => {
      // Recorre las claves anidadas
      keys.forEach((key) => {
        translations[key]
          ? (translations = translations[key]) // Navega por las propiedades
          : (translations = value); // Si no se encuentra la clave, se devuelve el valor original
      });
      translation = translations; // Asigna la traducción final
    });

    return translation;
  }
}
