import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  tests=[];
  
  constructor(private notification: NzNotificationService,
    private testService: AdminService // Replace with actual service type
  ){}

  ngOnInit() {
    this.getAllTests();
    // this.deleteTest(); // Removed because deleteTest requires an id argument
  }

  getAllTests() {this.testService.getAllTest().subscribe(res=>{
    this.tests=res;
  }, error => {
    this.notification
    .error(
      'Error',
      `Something Went Wrong. Please try again later.`,
      { nzDuration: 5000 }
    )
  })
}

  getFormattedTime(time): string {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    return `${minutes} mins ${seconds} seconds`;
}

}
