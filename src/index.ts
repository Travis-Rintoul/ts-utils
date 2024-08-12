import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const observable = of(1, 2, 3).pipe(map(x => x * 2));
observable.subscribe(value => console.log(value));