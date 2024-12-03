import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let modifiedHeaders = req.headers.set('appkey', '777777').set('application-type', 'application/json');

  if (req.url.includes('login')) {
    const authReq = req.clone({ headers: modifiedHeaders });

    return next(authReq);
  }

  const error = new HttpErrorResponse({
    error: { message: 'Invalid endpoint: only "login" endpoint is allowed' },
    status: 400,
    statusText: 'Bad Request',
  });

  return throwError(() => error);
};
