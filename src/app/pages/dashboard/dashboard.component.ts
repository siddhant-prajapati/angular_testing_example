import { Component, OnInit, inject } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  
  apiData = inject(ApiRequestService)

  renderData :any;
  protected: Promise<string> | undefined;
  async ngOnInit(): Promise<void> {
    this.renderData = await this.apiData.secureData()

    this.protected = await this.apiData.protectedData()
  }

  key(event:any){
    console.log("key "+ event.key + " , KeyCode =" + event.keyCode) 
    if(event.keyCode === 65){
      console.log("Hello")
    }

  }
}
