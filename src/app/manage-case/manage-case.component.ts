import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../common/commonservice.service';

@Component({
  selector: 'app-manage-case',
  templateUrl: './manage-case.component.html',
  styleUrls: ['./manage-case.component.scss']
})
export class ManageCaseComponent implements OnInit {
 

  constructor(private commonserviceService : CommonserviceService) { }
public manageData : any = {};
  ngOnInit(): void {
	//get Sales Data
	    
       this.commonserviceService.getOrgName().subscribe((data: any) => {
		   this.manageData.salesData = data;
		})

  }

}
