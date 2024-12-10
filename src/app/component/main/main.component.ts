import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  cards=[{
    title:" Grow Together",
    description:"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
     image:'../../../assets/images/illustration-grow-together.svg',
  },{
    title:"Flowing Conversations",
    description:"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    image:'../../../assets/images/illustration-flowing-conversation.svg'
  },{
    title:"Your Users",
    description:"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    image:"../../../assets/images/illustration-your-users.svg"
  }]

}
