import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, retryWhen, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RandomDataService {
  private readonly dataUrl =
    'https://random-data-api.com/api/number/random_number?size=6';

  public cachedData:
    | {
        likes: number;
        loves: number;
        smiles: number;
        percentage: number[];
      }
    | undefined;

  private dataSubject = new BehaviorSubject<{
    likes: number;
    loves: number;
    smiles: number;
    percentage: number[];
  }>({ likes: 0, loves: 0, smiles: 0, percentage: [] });
  data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchData(): Observable<{
    likes: number;
    loves: number;
    smiles: number;
    percentage: number[];
  }> {
    if (this.cachedData) {
      return new Observable((observer) => {
        observer.next(this.cachedData);
        observer.complete();
      });
    } else {
      return this.http.get<any[]>(this.dataUrl).pipe(
        map((response) => {
          const likes = response[0].value;
          const loves = response[1].value;
          const smiles = response[2].value;
          const percentage = [
            response[3].value,
            response[4].value,
            response[5].value,
          ];
          const data = { likes, loves, smiles, percentage };
          this.cachedData = data;
          return data;
        }),
        retryWhen((errors) =>
          errors.pipe(
            delay(1000),
            take(1),
            catchError((error) => {
              console.error('Error fetching data:', error);
              return throwError(
                'Something went wrong; please try again later.'
              );
            })
          )
        ),
        catchError(this.handleError)
      );
    }
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
