import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";

@Injectable()
export class MemberService {
  constructor(private http: HttpClient) {}

  getMembers$() {
    return this.http.get("/assets/member.json");
  }
}
