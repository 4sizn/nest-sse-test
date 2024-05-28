import { Injectable } from '@nestjs/common';
import { Observable, interval, map } from 'rxjs';

@Injectable()
export class SseService {
  getServerSentEvents(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num) => {
        return {
          data: `Server time: ${new Date().toString()}`,
          id: num.toString(),
        } as unknown as MessageEvent;
      }),
    );
  }
}
