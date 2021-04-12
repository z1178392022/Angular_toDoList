import { Component, OnInit } from "@angular/core";
import { StorageService } from "../storage.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  peopleinfo: any = {
    username: this.storage.get("username"),
    sex: this.storage.get("sexy"),
    citys: ["NewYork", "LosAngeles", "California"],
    city: this.storage.get("city"),
    hobby: [
      {
        title: "Basketball",
        checked: this.storage.get("Basketball")
      },
      {
        title: "VideoGame",
        checked: this.storage.get("VideoGame")
      },
      {
        title: "Coding",
        checked: this.storage.get("Coding")
      }
    ],
    lastwords: this.storage.get("lastwrods")
  };
  constructor(public storage: StorageService) {}

  ngOnInit(): void {}
  dosubmit() {
    this.storage.set("username", this.peopleinfo.username);
    this.storage.set("sexy", this.peopleinfo.sex);
    this.storage.set("city", this.peopleinfo.city);
    this.storage.set("Basketball", this.peopleinfo.hobby[0].checked);
    this.storage.set("VideoGame", this.peopleinfo.hobby[1].checked);
    this.storage.set("Coding", this.peopleinfo.hobby[2].checked);
    this.storage.set("lastwrods", this.peopleinfo.lastwords);
    alert(
      "Information saved in your Local Storage successfully, try reflash the page."
    );
  }
}
