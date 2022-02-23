import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fontColor = 'pink';
sayHelloId = 1;
canClick = false;
message = 'Hello, World';

sayMessage() {
  // alert(this.message)
}
show1(){
 alert( this.nothing)
  
}
my(){
  alert(this.firstname1)
}
  // loginForm: FormGroup;
  // submitted = false;
  public firstname:any;
  public show:boolean=false;
  public open:boolean=true;
  public array=[
    20,30,50,70
  ]
  public arrname='madhuri'
  // public name='madhuri';
  public array1=[
    {
      'name':'umesh'
    },
    {
      'name':'madhu'
    },
    {
      'name':'uma'
    },
    
  ]
  public array2=[
    {
      'last':'rapolu'
    },
    {
      'last':'rapolu'
    },
    {
    'last':'rapolu'
    }
  ]

  public womenpower=[
    {
      'miss':'madhu'
    
    },
    {
      'miss':'shashi'
    },
    {
      'miss':'ramya'
    },
    {
      'miss':'sony'
    }

  ]
  public username='shashis'
  public nothing=""
  public firstname1=''
  public lastname=''

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    // this.loginForm=this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    // }) 
    const cars = ["Saab", "Volvo", "BMW"];
    cars.push("rd")
    console.log(cars)
    console.log(cars[2])
   
   

    const names =["madhu","uday","uma"]
    names.push("sudhakar")
    console.log(names)
    console.log(names.length)
   for(let i=0;i<names.length;i++){
     console.log(names[i])
     console.log(i)
     let test='uday';
if(names[i]==test){
 console.log("iam uday")
}
else{
  console.log("iam not uday")
}
}
   
    for(let i=1;i<100;i++){
      
    // if(i*5==0) {
    //   console.log(i);
      
    
    //   } 
    if (i%7==0){
    
      console.log(i+"iam the winner");
    }
    else {
      console.log(i+"iam the loser")
    }
      
    
      
      
      
    
    }
   
     
   

  
  }
  udayFun() {
    console.log("fuc call")
    console.log(this.username+"iss username")
    this.show=true;
    this.open=false;
  }

  
  

  }
 


  
