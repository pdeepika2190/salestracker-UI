import { Component } from '@angular/core';
import { CommonserviceService } from './common/commonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	 constructor(
    public commonserviceService: CommonserviceService,
   
  ) { }
  title = 'salestracker-UI';

public isLoaderVisible() {
    return this.commonserviceService.utilObj.isProgress;
  }
}
