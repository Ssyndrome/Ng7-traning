import {Component, OnInit} from '@angular/core';
import {TableService} from './table.service';
import {Table} from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  characters: Table[];
  constructor(private tableService: TableService) {
  }

  ngOnInit() {
    this.tableService.getCharacters()
      .subscribe((data: Table[]) => {
        this.characters = data;
      });
  }

  goToSearchResult(searchResult) {
    window.location.href = searchResult;
  }
}
