import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RichTextEditor } from '@satendracoders/text-editor';
import { CToaster } from "./shared/components/global/c-toaster/c-toaster"; 



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CToaster],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'satendra-coder';

   handleHtml(html: string) {
    console.log("HTML Output:", html);
  }

  handleText(text: string) {
    console.log("Plain Text:", text);
  }
}
