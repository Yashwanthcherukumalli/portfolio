import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = [
    {
      degree: 'B. Tech (ECE)',
      institution: 'Siddhartha Institute of Engineering & Technology',
      location: 'Hyderabad',
      year: 2022
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      location: 'Khammam',
      year: 2018
    },
    {
      degree: 'SSC',
      institution: 'Greenwood High School',
      location: 'Khammam',
      year: 2016
    }
  ];
}
