import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { CommonserviceService } from '../common/commonservice.service';


@Component({
  selector: 'app-sales-interaction',
  templateUrl: './sales-interaction.component.html',
   styles: [`.descDiv {
	height: calc(100vh - 324px);
	overflow:auto;
}
`]
})
export class SalesInteractionComponent implements OnInit {

  constructor(private fb: FormBuilder ,private commonserviceService : CommonserviceService) { }
  public salesInteractionForm: any;
  public salesFormObj : any = {};
// getter syntax to create an salesDescField class property to retrieve the salesCaseDtos's form array control from the parent form group.
 public  get salesDescField() {
  return this.salesInteractionForm.get('salesCaseDtos') as FormArray;
}  
 //adding caseDesc to formArray salesCaseDtos
   private salesCaseatrribute(): FormGroup {
         return this.fb.group({
       caseDesc :'',
       })
         }
  //Add more field for description
  public addDesc() {
  this.salesDescField.push(this.salesCaseatrribute());
     }
 //get customers Detail based on orgId
   public getcustomersDetail(orgData){
	this.salesFormObj.customerData = [];
	this.salesInteractionForm.get('customer').value = {};
	this.salesDescField.clear();
	this.commonserviceService.getCustById(orgData.source.value.organizationID).subscribe((data: any) => {
		this.salesFormObj.customerData = data;
		})
   }
  //create sales request api call
  public createsalesReq(){
	this.commonserviceService.showLoader();
	let  reqData : any = {};
	reqData.createdBy = "Deepika";
	reqData.customerID = this.salesInteractionForm.get('customer').value.customerID;
	reqData.salesCaseDtos = this.salesDescField.value;
	let formData : any = [];
	formData.push(reqData);
	this.commonserviceService.createSaleReq(formData).subscribe((data: any) => {
		 this.commonserviceService.hideLoader();
         this.commonserviceService.showSnackBarMsg("Case Added Successfully")
    }, () => { this.commonserviceService.hideLoader(); });
	
  }

  ngOnInit(): void {
	
	//Form Declaration
	  this.salesInteractionForm = this.fb.group({
        orgName: [''],
        customer:[''],
        salesCaseDtos: this.fb.array([])
        
      });
     
     

     //get organization names 
       this.commonserviceService.getOrgName().subscribe((data: any) => {
		   this.salesFormObj.orgData = data;
		})
   
  }

}
