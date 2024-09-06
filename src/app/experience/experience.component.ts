import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experience = [
    {
      title: 'Software Engineer',
      company: 'Abilio IT Solutions Pvt. Ltd.',
      location: 'Hyderabad',
      duration: 'May 2022 - Present',
      responsibilities: [
        'Developing interactive UI with HTML5 and Bootstrap.',
        'Integrating frontend with backend using Angular framework.',
        'Implementing Angular validations, creating components, services, and managing routing.',
        'Utilizing lazy loading and dependency injection for performance optimization.'
      ]
    }
  ];
}
