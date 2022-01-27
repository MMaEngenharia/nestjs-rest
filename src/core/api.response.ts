export class APIResponse {
  pageNumber: number = 1;
  pageCount: number = 10;
  result: any = {};
  errors: any = [];
  message: string;

  ok = (result: any): APIResponse => {
    this.result = result || {};
    this.message = 'Solicitação concluída com sucesso.';
    return this;
  };

  error = (errors: any, message: string): APIResponse => {
    this.errors = errors || [];
    this.message = message;
    return this;
  };
}
