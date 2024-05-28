import { Controller, Sse } from '@nestjs/common';
import { SseService } from './sse.service';
import { Observable } from 'rxjs';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Sse('events')
  sendEvents(): Observable<MessageEvent> {
    return this.sseService.getServerSentEvents();
  }
}
