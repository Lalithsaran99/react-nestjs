import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  findAll(): Observable<AxiosResponse> {
    return this.httpService.get('http://localhost:3000');
  }
}