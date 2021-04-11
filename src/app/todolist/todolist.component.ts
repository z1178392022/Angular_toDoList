import { Component, OnInit } from "@angular/core";
import { StorageService } from "../storage.service";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  public keywords: any;
  public historyList: any[] = [];

  constructor(public Storage: StorageService) {}

  ngOnInit(): void {
    var todolist: any = this.Storage.get("Akey");
    if (todolist) {
      this.todolist = todolist;
    }
  }

  //Parttwos
  public goingtodo: any;
  public todolist: any[] = [];

  doAdd(e: any) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todolist, this.goingtodo)) {
        this.todolist.push({
          title: this.goingtodo,
          status: 0
        });
        this.Storage.set("Akey", this.todolist);
      } else {
        alert("Data existed");
      }
      this.goingtodo = "";
    }
  }

  doSearch_two() {
    if (!this.todolistHasKeyword(this.todolist, this.goingtodo)) {
      this.todolist.push({
        title: this.goingtodo,
        status: 0
      });
      this.Storage.set("Akey", this.todolist);
    } else {
      alert("Data existed");
    }
    this.goingtodo = "";
  }

  deleteTodo(key: any) {
    this.todolist.splice(key, 1);
    this.Storage.set("Akey", this.todolist);
  }
  todolistHasKeyword(todolist: any, goingtodo: any) {
    if (!goingtodo) return false;
    else {
      for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].title == goingtodo) {
          return true;
        }
      }
    }
    return 0;
  }

  checkboxchanged() {
    this.Storage.set("Akey", this.todolist);
  }
}
