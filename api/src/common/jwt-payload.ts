export class JwtUserPayload {
  constructor(payload: JwtUserPayload) {
    this.id = payload.id;
  }
  id: string;
}
