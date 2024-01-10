import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit{
  squares: any[] | undefined;
  whoIsNext: boolean | undefined;
  winner: string | undefined;

  constructor(){

  }

  ngOnInit(): void {
    this.newRound();
  }

  newRound() {
    this.squares = Array(9).fill(null);
    this.whoIsNext = true;
    this.winner = '';
  }

}
