import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authReqAppKey = req.clone({
    headers: req.headers.set('appkey', '777777'),
  });

  if (!authReqAppKey.url.includes('login')) {
    const error = new HttpErrorResponse({
      error: { message: 'Invalid endpoint: "login" not found in URL' },
      status: 400,
      statusText: 'Bad Request',
    });

    return throwError(() => error);
  }

  return next(authReqAppKey);
};
