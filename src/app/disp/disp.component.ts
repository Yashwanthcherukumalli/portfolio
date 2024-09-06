import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrl: './disp.component.scss'
})
export class DispComponent {
  aboutMe = {
    name: 'Cherukumalli Yashwanth',
    phone: '+91 8096537193',
    email: 'Yashwanthch2223@gmail.com',
    linkedin: 'https://www.linkedin.com/in/yashwanth-cherukumalli-ch',
    whatsapp: 'https://wa.me/918096537193',
    summary: `I am Cherukumalli Yashwanth, an Angular Developer with over 2.2 years of experience in crafting dynamic and responsive web applications. My expertise lies in leveraging the latest web technologies to build robust user interfaces and deliver engaging user experiences. I hold a B. Tech in Electronics and Communication Engineering from Siddhartha Institute of Engineering & Technology.`,
    professionalBackground: `I specialize in Angular development, utilizing HTML5, CSS3, and JavaScript to create seamless, responsive user interfaces. My experience includes working with Angular versions 12 and 14, implementing Angular Material concepts, and managing complex web applications using Angular CLI. I am adept at employing Bootstrap for responsive design and ensuring cross-browser compatibility.

    Currently, I am working as a Software Engineer at Abilio IT Solutions Pvt. Ltd., where I am responsible for developing interactive UI components, integrating frontend with backend systems, and optimizing application performance through techniques like lazy loading and dependency injection. My role involves collaborating with cross-functional teams to deliver high-quality software solutions in an Agile environment.`,
    notableProjects: [
      {
        title: 'Next Hire',
        technologies: 'Angular 14, JavaScript, HTML5, CSS3, Bootstrap 3/4',
        description: `An online web application that connects employers with job seekers. Employers can post job vacancies, and job seekers can create profiles and apply for jobs. The platform supports direct communication between employers and candidates via email or SMS.`,
        responsibilities: `Developed interactive UI, integrated frontend and backend using Angular, implemented Angular validations, created components and services, and utilized lazy loading for performance enhancement.`
      },
      {
        title: 'LTCG Consumer & Provider Portal',
        technologies: 'Angular 12, JavaScript, HTML5, CSS3, Bootstrap 3/4',
        description: `A web application for Long Term Care Group, the largest LTC insurance administrator in the U.S. The portal allows users to manage insurance policies, claims, and personal details. It includes various modules based on user eligibility.`,
        responsibilities: `Designed and developed the user interface, addressed client issues, and resolved defects.`
      }
    ],
    skillsAndExpertise: [
      'Proficient in Angular, HTML5, CSS3, Bootstrap, JavaScript, TypeScript, and Git.',
      'Experienced with Visual Studio Code and various IDEs.',
      'Skilled in Agile development practices with a focus on iterative improvements and adaptive planning.',
      'Strong problem-solving skills and ability to create innovative solutions tailored to user needs.',
      'Expertise in making webpages mobile-friendly and ensuring a consistent experience across different devices.'
    ]
  };

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
