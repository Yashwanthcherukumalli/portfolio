import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactDetails = {
    phone: '+91 8096537193',
    email: 'Yashwanthch2223@gmail.com',
    linkedin: 'https://www.linkedin.com/in/yashwanth-cherukumalli-ch',
    whatsapp: 'https://wa.me/918096537193'
  };
}
