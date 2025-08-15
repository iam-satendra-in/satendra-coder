import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Category, Tool } from '../models/tool.interface';

@Injectable({
  providedIn: 'root'
})
export class STools {
  
private toolsSubject = new BehaviorSubject<Tool[]>([
  {
    id: 1,
    name: 'JSON Formatter',
    description: 'Format and beautify your JSON data',
    category: 'Formatters',
    icon: '🧩',
    rating: 4.8,
    price: 'Free',
    link:'/tools/json-formatter'
  },
  {
    id: 2,
    name: 'Base64 Encoder/Decoder',
    description: 'Encode or decode Base64 strings',
    category: 'Converters',
    icon: '🔁',
    rating: 4.7,
    price: 'Free',
    link:'/tools/base64-encoder-decoder'
  },
  {
    id: 3,
    name: 'URL Encoder/Decoder',
    description: 'Encode or decode URL safely',
    category: 'Converters',
    icon: '🌐',
    rating: 4.6,
    price: 'Free',
    link:'/tools/url-encoder-decoder'
  },
  {
    id: 4,
    name: 'Password Hash Generator',
    description: 'Generate secure password hashes (SHA256, MD5)',
    category: 'Generators',
    icon: '🔐',
    rating: 4.7,
    price: 'Free',
    link:'/tools/password-hash-generator'
  },
  {
    id: 5,
    name: 'Fake Name Generator',
    description: 'Generate random user names and details',
    category: 'Generators',
    icon: '👤',
    rating: 4.5,
    price: 'Free',
    link:'/tools/fake-name-generator'
  },
  {
    id: 6,
    name: 'JSON to XML Converter',
    description: 'Convert JSON into XML format',
    category: 'Converters',
    icon: '🔄',
    rating: 4.6,
    price: 'Free',
    link:'/tools/json-to-xml-converter'
  },
  {
    id: 7,
    name: 'XML Viewer & Editor',
    description: 'View, edit and format XML data',
    category: 'Formatters',
    icon: '🗂️',
    rating: 4.4,
    price: 'Free',
    link:'/tools/xml-viewer-editor'
  },
  {
    id: 8,
    name: 'JSON to CSV Converter',
    description: 'Convert JSON data to CSV format',
    category: 'Converters',
    icon: '📊',
    rating: 4.5,
    price: 'Free',
    link:'/tools/json-to-csv-converter'
  },
  {
    id: 9,
    name: 'CSV to JSON Converter',
    description: 'Convert CSV data to JSON format',
    category: 'Converters',
    icon: '📋',
    rating: 4.4,
    price: 'Free',
    link:'/tools/csv-to-json'
  },
  {
    id: 10,
    name: 'HTML to JSX Converter',
    description: 'Convert standard HTML into JSX code',
    category: 'Converters',
    icon: '⚛️',
    rating: 4.6,
    price: 'Free',
    link:'/tools/html-to-jsx-converter'
  },
  {
    id: 11,
    name: 'JS to TS Converter',
    description: 'Convert JavaScript to TypeScript easily',
    category: 'Converters',
    icon: '🌀',
    rating: 4.5,
    price: 'Free',
    link:'/tools/js-to-ts'
  },
  {
    id: 12,
    name: 'TS to JS Converter',
    description: 'Convert TypeScript back to JavaScript',
    category: 'Converters',
    icon: '🔃',
    rating: 4.4,
    price: 'Free',
    link:'/tools/ts-to-js'
  },
  {
    id: 13,
    name: 'CSS Formatter',
    description: 'Prettify and format CSS styles',
    category: 'Formatters',
    icon: '🎨',
    rating: 4.5,
    price: 'Free',
    link:'/tools/css-formatter'
  },
  {
    id: 14,
    name: 'HTML Formatter',
    description: 'Format and beautify HTML code',
    category: 'Formatters',
    icon: '🧱',
    rating: 4.4,
    price: 'Free',
    link:'/tools/html-formatter'
  },
  {
    id: 15,
    name: 'JavaScript Formatter',
    description: 'Clean and format JavaScript code',
    category: 'Formatters',
    icon: '🖋️',
    rating: 4.5,
    price: 'Free',
    link:'/tools/javascript-formatter'
  },
  {
    id: 16,
    name: 'PHP Formatter',
    description: 'Format and beautify PHP code',
    category: 'Formatters',
    icon: '🐘',
    rating: 4.4,
    price: 'Free',
    link:'/tools/php-formatter'
  },
  {
    id: 17,
    name: 'HTML Video Editor',
    description: 'Edit video element properties in HTML',
    category: 'Tools',
    icon: '🎞️',
    rating: 4.3,
    price: 'Free',
    link:'/tools/html-video-editor'
  },
  {
    id: 18,
    name: 'QR Code Generator',
    description: 'Create customizable QR codes with themes',
    category: 'Generators',
    icon: '📱',
    rating: 4.6,
    price: 'Free',
    link:'/tools/qr-code-generator'
  },
  {
    id: 19,
    name: 'Robots.txt Generator',
    description: 'Easily create a robots.txt file to manage how sear...',
    category: 'SEO Tools',
    icon: '🤖',
    rating: 4.3,
    price: 'Free',
    link:'/tools/robots-txt-generator'
  }
]);

  private selectedCategorySubject = new BehaviorSubject<string>('all');
  private searchTermSubject = new BehaviorSubject<string>('');

  public tools$ = this.toolsSubject.asObservable();
  public selectedCategory$ = this.selectedCategorySubject.asObservable();
  public searchTerm$ = this.searchTermSubject.asObservable();

  public filteredTools$: Observable<Tool[]> = combineLatest([
    this.tools$,
    this.selectedCategory$,
    this.searchTerm$
  ]).pipe(
    map(([tools, category, searchTerm]) => {
      let filtered = tools;

      // Filter by category
      if (category !== 'all') {
        filtered = filtered.filter(tool => tool.category === category);
      }

      // Filter by search term
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(tool =>
          tool.name.toLowerCase().includes(term) ||
          tool.description.toLowerCase().includes(term) ||
          tool.category.toLowerCase().includes(term)
        );
      }

      return filtered;
    })
  );

  selectCategory(categoryId: string): void {
    this.selectedCategorySubject.next(categoryId);
  }

  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }

  getTools(): Observable<Tool[]> {
    return this.tools$;
  }

}