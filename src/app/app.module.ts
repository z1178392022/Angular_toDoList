import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { TodolistComponent } from "./todolist/todolist.component";
import { FormComponent } from "./form/form.component";

import { StorageService } from "./storage.service";
import { AsideComponent } from "./aside/aside.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "todolist", component: TodolistComponent },
      { path: "form", component: FormComponent },
      { path: "**", redirectTo: "home" }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TodolistComponent,
    FormComponent,
    AsideComponent
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
