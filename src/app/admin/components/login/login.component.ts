import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  durationInSeconds = 5;

  constructor(
    private fb: FormBuilder,
    private router:Router  ) { 

    this.buildForm();
    
  }

  private buildForm(){
    this.form=this.fb.group({
      user:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
    });
  }
  login(e:Event){ 
    e.preventDefault();
    /*const ss = this._snackBar.open('Ha logueado exitosamente', '', {
      duration: 2000,
      panelClass:['color-snack']
    });
    ss.afterDismissed().subscribe(()=>{
      this.router.navigate(["/admin"])
    });*/

  }//.login

  Registro(e:Event){
    e.preventDefault();
    
    return this.router.navigate(["/admin"])
  }
  ngOnInit() {
  }
  get FormUser (){
    return this.form.get('user');
  }
  get FormPass (){
    return this.form.get('password');
  }

}