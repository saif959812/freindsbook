import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value:any, searchterm: any): any {
    return value.filter(function(search){
      return search.firstname.indexOf(searchterm)> -1

    });
  }

}
