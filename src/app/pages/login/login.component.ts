import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  apiService = inject(ApiRequestService)

  async login(form : NgForm){
    console.log(form.value)
    let responceToken:any = await this.apiService.loginUser(form.value)
    console.log(responceToken)
    //sessionStorage.setItem("token", token)
  }
}
