import {  HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import axios from 'axios';
import { devEnvironment } from '../../environment/dev-environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http : HttpClient) { }

  router = inject(Router)
  //creating new Request
  async createData(ele : object){
    try {
      const responce = await axios.post(devEnvironment.backEndUrl, ele);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async updateData(id : number,ele : object){
    try {
      const responce = await axios.put(devEnvironment.backEndUrl+id, ele);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async findDataById(id : number){
    try {
      const responce = await axios.get(devEnvironment.backEndUrl+id);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }


  async findAllData(){
    try {
      const responce = await axios.get(devEnvironment.backEndUrl);
      if(responce){
        console.log(responce.data)
        return responce.data
      }
    } catch (error) {
      console.log(error)
    }
  }


  async deleteDataById(id : number){
    try {
      const responce = await axios.delete(devEnvironment.backEndUrl+id);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  
  //
  async secureData(){
    try {
      const responce = await axios.get(devEnvironment.backEndUrl);
      if(responce){
        console.log(responce.data)
        return responce.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  //
  async protectedData(){
    try {
      const token = sessionStorage.getItem("token");
      console.log("Token is "+token)
      const responce = await axios.get(devEnvironment.backEndUrl+"/admin",{
        headers: {
            'Authorization': `Bearer ${token}` // Make sure your token is properly formatted
        }
      });
      if(responce){
        console.log(responce.data)
        return responce.data
      }
    } catch (error) {
      console.log(error)
      // alert("Please Login , Redirecting to Login Page !!")
      // this.router.navigate(['login'])
    }
  }

  //login
  async loginUser(ele : object){
    try {
      const responce = await axios.post(devEnvironment.backEndUrl+ "/auth/login", ele);
      if(responce){
        console.log(responce.data.accessToken)
        sessionStorage.setItem("token", responce.data.accessToken)
        return responce.data.accessToken
      }
    } catch (error) {
      console.log(error)
    }
  }
}
