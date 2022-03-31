import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // custom pipe
  transform(value: any[], ...args: any): any[] {
    if (!value) {
      return [];
    }

    if (!args) {
      return value;
    }

    args = args.toString().toLowerCase();
    return value?.filter((item: any) => {
      return item.title?.toLowerCase().indexOf(args) > -1 ||
        item.review?.toLowerCase().indexOf(args) > -1
    });
  }

}
