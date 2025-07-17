import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SCompilers {
 private selectedLanguageSubject = new BehaviorSubject<string>('C++'); // Default language
  private fileContentSubject = new BehaviorSubject<string>(''); // Default file content

  selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  fileContent$ = this.fileContentSubject.asObservable();

  setSelectedLanguage(language: string) {
    this.selectedLanguageSubject.next(language);
  }

  setFileContent(content: string) {
    this.fileContentSubject.next(content);
  }

  resetFileContent() {
    this.fileContentSubject.next('');
  }
}

