import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent {

  prompt:string = '';
  response:any;
  check_res:string='';

  history:{ques:string,ans:string}[]=[];

  constructor(private http : HttpClient) {
    // this.history.push({ques:'rem in css',ans:'In CSS, rem stands for root em. It is a unit of measurement relative to the font size of the root element (<html>), which is typically defined in the browsers default stylesheet.Using rem as a unit allows you to create more consistent and scalable designs because its based on the root font size rather than the font size of the individual element. This means that if you change the font size of the root element, all rem units in your stylesheet will be adjusted accordingly.'});
    // this.history.push({ques:'rem in css',ans:'In CSS, rem stands for root em. It is a unit of measurement relative to the font size of the root element (<html>), which is typically defined in the browsers default stylesheet.Using rem as a unit allows you to create more consistent and scalable designs because its based on the root font size rather than the font size of the individual element. This means that if you change the font size of the root element, all rem units in your stylesheet will be adjusted accordingly.'});
    // this.history.push({ques:'rem in css',ans:'In CSS, rem stands for root em. It is a unit of measurement relative to the font size of the root element (<html>), which is typically defined in the browsers default stylesheet.Using rem as a unit allows you to create more consistent and scalable designs because its based on the root font size rather than the font size of the individual element. This means that if you change the font size of the root element, all rem units in your stylesheet will be adjusted accordingly.'});
    // this.history.push({ques:'rem in css',ans:'In CSS, rem stands for root em. It is a unit of measurement relative to the font size of the root element (<html>), which is typically defined in the browsers default stylesheet.Using rem as a unit allows you to create more consistent and scalable designs because its based on the root font size rather than the font size of the individual element. This means that if you change the font size of the root element, all rem units in your stylesheet will be adjusted accordingly.'});
    // this.history.push({ques:'new',ans:'In CSS, rem stands for root em. It is a unit of measurement relative to the font size of the root element (<html>), which is typically defined in the browsers default stylesheet.Using rem as a unit allows you to create more consistent and scalable designs because its based on the root font size rather than the font size of the individual element. This means that if you change the font size of the root element, all rem units in your stylesheet will be adjusted accordingly.'});

  }

  onSubmit(){
    this.http.get<any>('http://localhost:8080/chat/ask', {
     params: {prompt:this.prompt}
    }).subscribe(response=>{
      this.response=response.response;
      this.history.push({ques:this.prompt, ans:this.response});
    });
  }

  onCheck(){
    this.http.get<any>('http://localhost:8080/chat/check').subscribe(data=>this.check_res=data.message);
  }

}
