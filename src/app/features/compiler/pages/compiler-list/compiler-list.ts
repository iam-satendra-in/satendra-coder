import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MateriallistModule } from '../../../../shared/materiallist/materiallist-module';
import { compilers_all } from '../../utils/compilers';

@Component({
  selector: 'app-compiler-list',
  imports: [MateriallistModule],
  templateUrl: './compiler-list.html',
  styleUrl: './compiler-list.scss'
})
export class CompilerList {

constructor(
    private _router: Router,
    private meta: Meta,
    private title: Title,

  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.setPageTitleAndMeta();
  }

  compilers = compilers_all; // List of all compilers

  categories = ['All', 'Programming', 'Databases', 'Web',]; // Categories list
  activeCategory = 'All'; // Default active category
  filteredCompilers = this.compilers; // Initially show all compilers

  // Function to filter compilers based on selected category
  filterCompilers(category: string) {
    if (category === 'All') {
      this.filteredCompilers = this.compilers;
      this.activeCategory = category;
      return;
    }
    this.activeCategory = category;
    this.filteredCompilers = this.compilers.filter(compiler => compiler.category === category);
  }

  openCompiler(compiler: any) {
    // Function to open compiler
    this._router.navigate([compiler.baseUrl],
      {
        state: { data: compiler },
      }
    );
  }

  // Track function for better performance
  trackCompiler(index: number, compiler: any) {
    return compiler.name;
  }



  setPageTitleAndMeta(): void {
    // Set the title of the page
    this.title.setTitle('Try out our Free Online Compilers!..');
    // Add or update meta tags
    this.meta.updateTag({ name: 'description', content: 'Explore Our Free Online Compilers: Instant Coding, Compilation, and Execution' });
    this.meta.updateTag({ name: 'keywords', content: 'Python Compiler, JavaScript Compiler, C/C++Compiler, C# Compiler, Java Compiler, PHP Compiler,Go Compiler, Swift Compiler, HTML/CSS Compiler, MySQL Compiler, PostgreSQL Compiler, MongoDB Compiler'});
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: "Founder & CTO", content: "Satendra Rajput(SDE)" });
    this.meta.updateTag({ name: "Co-Founder", content: "Arslan Shahid" });
  }

}

