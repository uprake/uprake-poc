import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

/**
 * Interceptor that adds timestamp info to log requests
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    // const path = req.params['0'];
    // logger.resetTimestamp();
    delete req?.pars?.password;
    delete req?.body?.password;
    const pars = JSON.stringify(req.params || {});
    const body = JSON.stringify(req.body || {});

    return next.handle().pipe(
      tap(() => {
        this.logger.log(
          `${req.method} ${req.url} === Params ${pars} === Body ${body}`
        );
      })
    );
  }
}
