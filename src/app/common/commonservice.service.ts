import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar,) { }

  private baseUrl = 'http://localhost:8090/'

  public utilObj : any = {
	isProgress: false,
    loaderCount: 0,
  }
  private urlObj: any = {
    createSalesReqApi: "SalesInteractions",
    getOrgNameApi:"Organizations",
    getCustomersApi:"Customers/",
    getsalesApi:"SalesInteractions"
 }
//ShowLoader/hider in application
 public showLoader(mode?: string) {
    if (mode === undefined) {
      this.utilObj.loaderCount++;
      this.utilObj.isProgress = true;
    }
  }

  public hideLoader() {
    this.utilObj.loaderCount--;
    if (this.utilObj.loaderCount === 0) {
      this.utilObj.isProgress = false;
    }
  }
 //Show Toast Message
public showSnackBarMsg(key: string) {
    this.snackBar.open(key, "", { duration: 4000, verticalPosition: 'top' });
  }

  public createSaleReq(formData) {
    return this.http.post(this.baseUrl + this.urlObj.createSalesReqApi, formData);
  }
  public getOrgName() {
    return this.http.get(this.baseUrl + this.urlObj.getOrgNameApi);
  }
  public getCustById(orgId) {
    return this.http.get(this.baseUrl + this.urlObj.getCustomersApi + orgId);
  }
//Manage Case Api
  public getSale() {
    return this.http.get(this.baseUrl + this.urlObj.getsalesApi);
  }

}
