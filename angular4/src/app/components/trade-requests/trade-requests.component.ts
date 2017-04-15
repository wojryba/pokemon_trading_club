import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-trade-requests',
  templateUrl: './trade-requests.component.html',
  styleUrls: ['./trade-requests.component.css'],
  animations: [
    // animations for displaing locations
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-15%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0%)', opacity: 1}))
        ]),
      ]
    ),
    trigger(
      'leaveAnimation', [
        transition(':leave', [
          style({opacity: 1}),
          animate('300ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class TradeRequestsComponent implements OnInit {
  @Output () traded: EventEmitter<string> = new EventEmitter();

  yourRequests = false;
  requestsForMe = false;
  myRequests: any;
  requestsMadeForMe: any;

  constructor(private api: ApiService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.api.getTradeRequests().subscribe(
      response => {
        const requests = JSON.parse(response['_body']);
        this.requestsMadeForMe = requests.forMe;
        this.myRequests = requests.my;
      },
      error => console.log(error),
      () => console.log('completed')
    );
  }

   openYourRequests() {
     if (this.yourRequests) {
       this.yourRequests = false;
     } else {
       this.requestsForMe = false;
       this.yourRequests = true;
     }
   }

   openRequestsForMe() {
     if (this.requestsForMe) {
       this.requestsForMe = false;
     } else {
       this.yourRequests = false;
       this.requestsForMe = true;
     }
   }

   acceptRequest(i) {
     this.api.acceptRequest(this.requestsMadeForMe[i]).subscribe(
       response => { console.log(response);
         if (response['_body'] === 'change accepted') {
           this.getRequests();
           this.traded.emit('traded');
         }
       },
       error => {
         this._flashMessagesService.show(error['_body'], { cssClass: 'alert-danger' });
         this.api.rejectOther(this.requestsMadeForMe[i]).subscribe(
           response => {
             this.getRequests();
           },
           error => console.log(error)
         )
       },
       () => {
        console.log('completed');
       }
     );
   }

   rejectRequest(i, f) {
     if (f === 'your') {
       this.api.rejectYours(this.myRequests[i]).subscribe(
         response => {
           if (response['_body'] === 'request rejected') {
             this.getRequests();
           }
         },
         error => console.log(error),
         () => {
           this.getRequests();
         }
       );
     } else if (f === 'forYou') {
       this.api.rejectOther(this.requestsMadeForMe[i]).subscribe(
         response => {
           if (response['_body'] === 'request rejected') {
             this.getRequests();
           }
         },
         error => console.log(error),
         () => {
           this.getRequests();
         }
       );
     }
   }
}
