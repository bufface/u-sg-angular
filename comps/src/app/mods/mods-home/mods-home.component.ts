import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false
  items = [
    { title: 'Some random title', content: 'Some random text content'},
    { title: 'Some random title 1', content: 'Some random text content 1'},
    { title: 'Some random title 2', content: 'Some random text content 2'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen
  }
}
