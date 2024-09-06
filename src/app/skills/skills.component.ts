import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'Angular', description: 'Experienced in Angular 12/14, including Angular CLI, Material, and routing.' },
    { name: 'HTML5 & CSS3', description: 'Proficient in creating responsive layouts with HTML5 and CSS3.' },
    { name: 'JavaScript', description: 'Strong knowledge of JavaScript ES6+, including DOM manipulation and asynchronous programming.' },
    { name: 'Bootstrap', description: 'Skilled in using Bootstrap for responsive web design.' },
    { name: 'Git', description: 'Experienced in version control using Git.' },
    { name: 'Agile Development', description: 'Knowledgeable in Agile methodologies and practices.' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
