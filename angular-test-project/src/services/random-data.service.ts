import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, retryWhen, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RandomDataService {
  private readonly apiKey = '51160b58-5bca-4b1a-8cdf-e42a570b20f1';
  private readonly apiUrl = 'https://api.random.org/json-rpc/2/invoke';
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
    return this.http.get<any[]>(this.dataUrl).pipe(
      map((response) => {
        const likes = response[0].number;
        const loves = response[1].number;
        const smiles = response[2].number;
        const percentage = [
          response[3].decimal,
          response[4].decimal,
          response[5].decimal,
        ];

        return { likes, loves, smiles, percentage };
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }
}
