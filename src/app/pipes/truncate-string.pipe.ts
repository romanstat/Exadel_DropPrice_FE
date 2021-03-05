import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString'
})
export class TruncateStringPipe implements PipeTransform {

  transform(value: string,  length: number): string {
    const biggestWord = 20;
    const elipses = '...';
    if (typeof value === 'undefined') { return value; }
    if (value.length <= length) { return value; }
    let truncatedText = value.slice(0, length + biggestWord);
    while (truncatedText.length > length - elipses.length) {
        const lastSpace = truncatedText.lastIndexOf(' ');
        if (lastSpace === -1) { break; }
        truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?;:]$/, '');
    }
    return truncatedText + elipses;
  }
}
