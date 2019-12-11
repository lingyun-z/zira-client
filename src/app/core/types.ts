import { HttpHeaders } from '@angular/common/http';

export interface HttpErrorResponseInterface extends Error {
  error: string;
  headers: HttpHeaders;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
}
