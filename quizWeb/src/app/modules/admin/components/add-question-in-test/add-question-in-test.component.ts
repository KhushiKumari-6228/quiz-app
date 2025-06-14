import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-question-in-test',
  imports: [SharedModule],
  templateUrl: './add-question-in-test.component.html',
  styleUrl: './add-question-in-test.component.scss'
})
export class AddQuestionInTestComponent {
  router: any;

  constructor(private fb:FormBuilder,
    private adminService:AdminService,
    private notification:NzNotificationService,
    private route:Router,
    private activatedRoute:ActivatedRoute

  ){}
  id:number|null;
  questionsForm!:FormGroup;

  ngOnInit() {
    this.questionsForm = this.fb.group({
      questionText: [null, [Validators.required]],
      optionA: [null, [Validators.required]],
      optionB: [null, [Validators.required]],
      optionC: [null, [Validators.required]],
      optionD: [null, [Validators.required]],
      correctOption: [null, [Validators.required]],
    });
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  submitForm(){
    const questionDto= this.questionsForm.value;
    questionDto.id=this.id;

    this.adminService.addQuestionInTest(questionDto).subscribe(res=>{
      this.notification
      .success(
        'SUCCESS',
        `Question Created Successfully`,
        {nzDuration:5000}
      );
      this.route.navigateByUrl("/admin/dashboard");

    },error=>{
      this.notification
      .error(
        'ERROR',
        `${error.error}`,
        {nzDuration: 5000}
      );
    })
  }
}
