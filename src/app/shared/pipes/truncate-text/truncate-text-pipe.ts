import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
 transform(value: string | undefined | null, maxChars: number = 20): string {
    if (!value) return '';
    return value.length > maxChars ? value.substring(0, maxChars) + '...' : value;
  }

}
