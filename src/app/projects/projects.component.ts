import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Next Hire',
      technology: 'Angular 14, JavaScript, HTML5, CSS3, Bootstrap 3/4',
      developmentTool: 'Visual Studio Code',
      teamSize: 12,
      description: `Next Hire is a web application connecting employers with job seekers. Employers can post job vacancies, while job seekers can upload their profiles and apply for jobs. Key features include job posting, profile management, and direct communication between employers and candidates via email or SMS.`,
      responsibilities: [
        'Developed interactive UI using HTML5 and Bootstrap for cross-browser compatibility.',
        'Integrated frontend with backend using Angular and Bootstrap framework.',
        'Implemented Angular validations, created components and services, and managed routing and HTTP calls.',
        'Utilized lazy loading and dependency injection for performance optimization.'
      ]
    },
    {
      title: 'LTCG Consumer & Provider Portal',
      technology: 'Angular 12, JavaScript, HTML5, CSS3, Bootstrap 3/4',
      developmentTool: 'Visual Studio Code',
      teamSize: 10,
      description: `LTCG Consumer & Provider Portal is a web application for the Long Term Care Group, the largest LTC insurance administrator in the U.S. The portal allows users to create policies, manage claims, and access insurance details based on their policy ID. It includes modules for policy management, claims processing, and eligibility tracking.`,
      responsibilities: [
        'Designed and developed the user interface using Angular 12.',
        'Coded in HTML and Angular to meet client requirements.',
        'Addressed defect fixing and resolved client issues.'
      ]
    }
  ];
}
