import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'NoteMe',
      description:
        'I developed a social "network" to help manage notes in a simple and personalized way. Allowing to create, edit and organize notes in a simple way so that users registered in the application can view them.',
      image: 'assets/imgs/mockup_laptop_noteme.png',
      link: '1',
    },
    {
      name: 'MealMate',
      description:
        'This project consists of a web application for planning and monitoring diets and exercise where users establish a goal which will help to generate a weekly diet plan and an exercise routine',
      image: 'assets/imgs/mockup_laptop_mealmate.png',
      link: '2',
    },
    {
      name: 'Free To Game',
      description:
        'I developed the frontend for the use of the free API of FreeToGame to be able to show and filter the free games from its database.',
      image: 'assets/imgs/mockup_laptop_freetogame.png',
      link: '3',
    },
  ];
}
