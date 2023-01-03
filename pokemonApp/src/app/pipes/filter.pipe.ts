import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	
    transform(items: any, term: any, propName: any): any {
        
		if(typeof term === 'undefined' || typeof propName === 'undefined') {
			return items;
		}
		
        return items.filter((item: any) => {
			return item[propName].toLowerCase().includes(term.toLowerCase());
		});
    }
	
}