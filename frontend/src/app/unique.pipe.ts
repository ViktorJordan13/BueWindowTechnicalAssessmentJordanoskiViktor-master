import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

import { BrandRating } from 'src/app/models/BrandRating';




@Pipe({
    name: 'uniquePipe',
    pure: false
})


export class UniquePipe implements PipeTransform{

    transform(value: any, args: string ): any{
        return _.uniq(value);
    }
    

}