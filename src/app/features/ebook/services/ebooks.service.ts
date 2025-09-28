import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Ebook } from '../model/ebook.model';

@Injectable({
  providedIn: 'root',
})
export class EbooksService {
  private STORAGE_KEY = 'ebooks_library_v1';
  private ebooksSubject = new BehaviorSubject<Ebook[]>(this.getMockData());
  ebooks$ = this.ebooksSubject.asObservable();

  constructor() {}

  // returns current list (mock or from server)
  getAll(): Observable<Ebook[]> {
    return this.ebooks$;
  }

  getById(id: string): Observable<Ebook | undefined> {
    const list = this.ebooksSubject.value;
    return of(list.find((e) => e.id === id));
  }

  // mock data, you can fetch from API instead
  private getMockData(): Ebook[] {
    return [
      {
        id: '1',
        title: 'JavaScript Fundamentals',
        author: 'Satendra Rajput',
        description:
          'A practical guide to JavaScript fundamentals, DOM, and async.',
        coverUrl: 'https://picsum.photos/seed/js/400/600',
        price: 0,
        category: 'Programming',
      },
      {
        id: '2',
        title: 'Angular From Scratch',
        author: 'A. Developer',
        description: 'Learn Angular step-by-step and build real projects.',
        coverUrl: 'https://picsum.photos/seed/ng/400/600',
        price: 249,
        category: 'Frontend',
      },
      {
        id: '3',
        title: 'Data Structures in JS',
        author: 'Coder Pro',
        description: 'DSA using JavaScript with examples and visualizations.',
        coverUrl: 'https://picsum.photos/seed/ds/400/600',
        price: 199,
        category: 'DSA',
      },
      {
        id: '4',
        title: 'Career Guide for Developers',
        author: 'Recruiter X',
        description: 'How to prepare for interviews, resume and soft skills.',
        coverUrl: 'https://picsum.photos/seed/career/400/600',
        price: 99,
        category: 'Career',
      },
    ];
  }

  // Library storage (simple)
  getLibrary(): Ebook[] {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Ebook[]) : [];
  }

  saveToLibrary(ebook: Ebook) {
    const lib = this.getLibrary();
    if (!lib.find((e) => e.id === ebook.id)) {
      lib.push(ebook);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(lib));
    }
  }

  removeFromLibrary(id: string) {
    let lib = this.getLibrary();
    lib = lib.filter((e) => e.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(lib));
  }
}
