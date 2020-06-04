import { Component, OnInit } from "@angular/core";

import { MemberService } from "../member.service";

import { Member } from "../../classes/member";

@Component({
  selector: "app-member-list",
  templateUrl: "./member-list.component.html",
  styleUrls: ["./member-list.component.css"]
})
export class MemberListComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService
      .getMembers$()
      .subscribe(members => (this.members = <Member[]>members));
  }
}
