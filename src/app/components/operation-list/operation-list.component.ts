import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/model/operation';
import { OperationServiceService } from 'src/app/service/operation-service.service';

@Component({
  selector: 'app-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  operations: Operation[];

  constructor(private operationService: OperationServiceService) { }

  ngOnInit(): void {
    this.operationService.findAll().subscribe(data => {
      this.operations = data;
    });
  }
}
