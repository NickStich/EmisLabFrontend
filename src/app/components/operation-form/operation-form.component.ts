import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/model/operation';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationServiceService } from 'src/app/service/operation-service.service';

@Component({
  selector: 'app-operation-form',
  templateUrl: './operation-form.component.html',
  styleUrls: ['./operation-form.component.css']
})
export class OperationFormComponent {


  operation: Operation;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private operationService: OperationServiceService) {
      this.operation = new Operation();
    }

    onSubmit() {
      this.operationService.save(this.operation).subscribe(result => this.gotoOperationList());
    }

    gotoOperationList(){
      this.router.navigate(['/operations']);
    }

    selectChangeHandler(event: any) {
      this.operation.worktype = event.target.value;
    }

    validy(): boolean{
      return this.operation.worktype === undefined;
    }

}
