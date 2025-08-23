import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';


@Component({
  selector: 'app-banner-card',
  imports: [MateriallistModule],
  templateUrl: './banner-card.html',
  styleUrls: ['./banner-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerCard implements OnInit, OnDestroy {

  items = [
    {
      heading: 'Master HTML, CSS & JavaScript',
      description: 'Learn the building blocks of the web. Build static websites, dynamic UI, and practice real-world DOM challenges.',
      features: [
        { icon: '🌐', text: 'Frontend Foundation' },
        { icon: '🎨', text: 'CSS Tricks & Layouts' },
        { icon: '🧪', text: 'JS Exercises' }
      ],
      button: 'Start with HTML/CSS/JS',
      codeFilename: 'index.html',
      codeComment: '<!-- Start of your website -->',
      codeKeyword: '<script>',
      className: '',
      mainSignature: '',
      codeLine: 'console.log("Hello, Satendracoder!");',
      output: 'Hello, Satendracoder!',
      toastSuccess: '🟢 HTML/JS rendered!',
      toastComplete: '🏅 First webpage done!'
    },
    {
      heading: 'Master Angular Development',
      description: 'From components to services, routing to NGRX, learn Angular the right way by building complex SPAs.',
      features: [
        { icon: '⚙️', text: 'Component-Based' },
        { icon: '🔁', text: 'RxJS & NgRx' },
        { icon: '📦', text: 'Modular Architecture' }
      ],
      button: 'Start with Angular',
      codeFilename: 'app.component.ts',
      codeComment: '// Angular root component',
      codeKeyword: 'export class',
      className: 'AppComponent',
      mainSignature: '',
      codeLine: 'title = "Hello, Satendracoder!";',
      output: 'Hello, Satendracoder!',
      toastSuccess: '🟢 Angular app running!',
      toastComplete: '🏅 Angular bootstrapped!'
    },
    {
      heading: 'Master Java + Spring Boot',
      description: 'Build secure, production-ready APIs using Java, Spring Boot, JPA, and REST.',
      features: [
        { icon: '🚀', text: 'RESTful APIs' },
        { icon: '🔐', text: 'JWT Auth & Security' },
        { icon: '🧩', text: 'Database & JPA' }
      ],
      button: 'Start with Spring Boot',
      codeFilename: 'HelloController.java',
      codeComment: '// Spring Boot Hello API',
      codeKeyword: '@RestController',
      className: 'public class HelloController',
      mainSignature: '@GetMapping("/")',
      codeLine: 'return "Hello, Satendracoder!";',
      output: 'Hello, Satendracoder!',
      toastSuccess: '🟢 API running!',
      toastComplete: '🏅 Java backend complete!'
    },
    {
      heading: 'Publish VSCode Extensions',
      description: 'Build your own developer tools with VSCode APIs and publish them on the marketplace.',
      features: [
        { icon: '🧩', text: 'Custom Commands' },
        { icon: '🧠', text: 'Intellisense Hooks' },
        { icon: '🚀', text: 'Marketplace Ready' }
      ],
      button: 'Build VSCode Extension',
      codeFilename: 'extension.ts',
      codeComment: '// Extension entry point',
      codeKeyword: 'export function',
      className: 'activate(context)',
      mainSignature: '',
      codeLine: 'console.log("Hello, Satendracoder!");',
      output: 'Hello, Satendracoder!',
      toastSuccess: '🟢 Extension loaded!',
      toastComplete: '🏅 Published to VSCode!'
    },
    {
      heading: 'Build NPM Packages',
      description: 'Write reusable logic and UI packages. Learn how to publish to NPM with versioning and semantic releases.',
      features: [
        { icon: '📦', text: 'Modular Design' },
        { icon: '🔧', text: 'Rollup / TS Support' },
        { icon: '📤', text: 'Publish to NPM' }
      ],
      button: 'Create NPM Package',
      codeFilename: 'index.ts',
      codeComment: '// Entry point of package',
      codeKeyword: 'export const',
      className: 'sayHello',
      mainSignature: '',
      codeLine: 'return "Hello, Satendracoder!";',
      output: 'Hello, Satendracoder!',
      toastSuccess: '🟢 Build success!',
      toastComplete: '🏅 NPM package published!'
    },
    {
      heading: 'Create Browser Extensions',
      description: 'Inject scripts, customize web experiences, and publish Chrome/Firefox extensions.',
      features: [
        { icon: '🌐', text: 'Chrome APIs' },
        { icon: '🔍', text: 'DOM Injection' },
        { icon: '🛒', text: 'Web Store Upload' }
      ],
      button: 'Make Browser Extension',
      codeFilename: 'content.js',
      codeComment: '// Injected script',
      codeKeyword: 'document.querySelector',
      className: '',
      mainSignature: '',
      codeLine: 'alert("Hello, Satendracoder!");',
      output: 'Hello, Satendracoder!',
      toastSuccess: '🟢 Extension injected!',
      toastComplete: '🏅 Uploaded to Chrome store!'
    },
    {
      heading: 'Create Maven Libraries',
      description: 'Bundle Java utilities and SDKs as Maven artifacts for others to use in their apps.',
      features: [
        { icon: '📚', text: 'Utility SDKs' },
        { icon: '☕', text: 'Java + Maven' },
        { icon: '🚀', text: 'Central Publish' }
      ],
      button: 'Publish Maven Library',
      codeFilename: 'MyLibrary.java',
      codeComment: '// Reusable library class',
      codeKeyword: 'public class',
      className: 'MyLibrary',
      mainSignature: '',
      codeLine: 'return "Hello, Satendracoder!";',
      output: 'Hello, Satendracoder!',
      toastSuccess: '🟢 Build success!',
      toastComplete: '🏅 Maven release done!'
    }
  ];

  currentItem = this.items[0];
  index = 0;
  private intervalId: any;

  constructor(
    private cd: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.index = (this.index + 1) % this.items.length;
        this.currentItem = this.items[this.index];

        // Force Angular to update the view
        this.zone.run(() => {
          this.cd.markForCheck(); // Trigger OnPush UI update
        });

        // console.log('Auto Switched to:', this.currentItem.heading);
      }, 9000);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}