import { Routes } from '@angular/router';

export const TOOLS_ROUTES: Routes = [
  {
    path: 'tools',
    loadComponent: () =>
      import('./layout/tools-home/tools-home').then((mod) => mod.ToolsHome),
    children: [
      //JSON Formatter
      {
        path: 'json-formatter',
        title: 'Json Formatter',
        loadComponent: () =>
          import('./components/json-formatter/json-formatter').then(
            (c) => c.JsonFormatter
          ),
      },
      // Base 64 Encoder and Decoder
      {
        path: 'base64-encoder-decoder',
        title: 'Base64 Encoder/Decoder',
        loadComponent: () =>
          import('./components/base64-encoder/base64-encoder').then(
            (c) => c.Base64Encoder
          ),
      },

      // URL Encoder and Decoder
      {
        path: 'url-encoder-decoder',
        title: 'URL Encoder/Decoder',
        loadComponent: () =>
          import('./components/url-encoder/url-encoder').then(
            (c) => c.UrlEncoder
          ),
      },

      // password-hash-generator
      {
        path: 'password-hash-generator',
        title: 'Password Hash Generator',
        loadComponent: () =>
          import('./components/password-hash-gen/password-hash-gen').then(
            (c) => c.PasswordHashGen
          ),
      },
      // Fake Name Generator
      {
        path: 'fake-name-generator',
        title: 'Fake Name Generator',
        loadComponent: () =>
          import('./components/fakename-gen/fakename-gen').then(
            (c) => c.FakenameGen
          ),
      },
      // JSON to XML Converter
      {
        path: 'json-to-xml-converter',
        title: 'JSON to XML Converter',
        loadComponent: () =>
          import('./components/json-to-xml/json-to-xml').then(
            (c) => c.JsonToXml
          ),
      },

      // XML Viewer & Editor
      {
        path: 'xml-viewer-editor',
        title: 'XML Viewer & Editor',
        loadComponent: () =>
          import('./components/xml-to-editor/xml-to-editor').then(
            (c) => c.XmlToEditor
          ),
      },

      // JSON to CSV Converter
      {
        path: 'json-to-csv-converter',
        title: 'JSON to CSV Converter',
        loadComponent: () =>
          import('./components/json-to-csv-convert/json-to-csv-convert').then(
            (c) => c.JsonToCsvConvert
          ),
      },

      // CSV to JSON Converter
      {
        path: 'csv-to-json-converter',
        title: 'CSV to JSON Converter',
        loadComponent: () =>
          import('./components/csv-to-json-convert/csv-to-json-convert').then(
            (c) => c.CsvToJsonConvert
          ),
      },

      // HTML to JSX Converter
      {
        path: 'html-to-jsx-converter',
        title: 'HTML to JSX Converter',
        loadComponent: () =>
          import('./components/html-to-jsx-convert/html-to-jsx-convert').then(
            (c) => c.HtmlToJsxConvert
          ),
      },


      // JS to TS Converter
      {
        path: 'js-to-ts-converter',
        title: 'JS to TS Converter',
        loadComponent: () =>
          import('./components/js-to-ts-convert/js-to-ts-convert').then(
            (c) => c.JsToTsConvert
          ),
      },

      // JS to TS Converter
      {
        path: 'ts-to-js-converter',
        title: 'TS to JS Converter',
        loadComponent: () =>
          import('./components/ts-to-js-convert/ts-to-js-convert').then(
            (c) => c.TsToJsConvert
          ),
      },

      // CSS Formatter
      {
        path: 'css-formatter',
        title: 'CSS Formatter',
        loadComponent: () =>
          import('./components/css-formatter/css-formatter').then(
            (c) => c.CssFormatter
          ),
      },

      // HTML Formatter
      {
        path: 'html-formatter',
        title: 'HTML Formatter',
        loadComponent: () =>
          import('./components/html-formatter/html-formatter').then(
            (c) => c.HtmlFormatter
          ),
      },


      // JavaScript Formatter
      {
        path: 'javascript-formatter',
        title: 'JavaScript Formatter',
        loadComponent: () =>
          import('./components/js-formatter/js-formatter').then(
            (c) => c.JsFormatter
          ),
      },

      // PHP Formatter
      {
        path: 'php-formatter',
        title: 'Format and beautify PHP code',
        loadComponent: () =>
          import('./components/php-formatter/php-formatter').then(
            (c) => c.PhpFormatter
          ),
      },

      // HTML Video Editor
      {
        path: 'html-video-editor',
        title: 'HTML Video Editor',
        loadComponent: () =>
          import('./components/html-video-editor/html-video-editor').then(
            (c) => c.HtmlVideoEditor
          ),
      },
      // QR Code Generator
      {
        path: 'qr-code-generator',
        title: 'QR Code Generator',
        loadComponent: () =>
          import('./components/qrcode-generate/qrcode-generate').then(
            (c) => c.QrcodeGenerate
          ),
      },

      // Robots.txt Generator
      {
        path: 'robots-txt-generator',
        title: 'Robots.txt Generator',
        loadComponent: () =>
          import('./components/robots-generate/robots-generate').then(
            (c) => c.RobotsGenerate
          ),
      },

    ],
  },
];
