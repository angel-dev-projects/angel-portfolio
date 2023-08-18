import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  projectId: any;
  project: any;

  projects = [
    {
      id: '1',
      name: 'NoteMe',
      description:
        'NoteMe is a personal note-taking application that I developed to help users organize their thoughts, tasks, and ideas efficiently. The application provides a user-friendly interface for creating, editing, and managing notes, allowing users to access their notes anytime, anywhere. I implemented the entire project, from designing the user interface to developing both frontend and backend functionalities. This project showcases my skills in frontend and backend development, user authentication, database management, and responsive design. It has been a rewarding experience to create a practical application that I can personally use for note-taking, and I am excited to continue improving and expanding its features.',
      image: 'assets/imgs/mockup_laptop_noteme.png',
      features: [
        {
          title: 'User Authentication',
          info: 'Users can create accounts, log in and securely store their notes.',
        },
        {
          title: 'Create and Edit Notes',
          info: 'Users can easily create new notes with titles and content, and update them as needed.',
        },
        {
          title: 'Color Customization',
          info: 'Each note can be assigned a color to help users visually categorize their notes.',
        },
        {
          title: 'Favorites',
          info: 'Users can mark notes as favorites, making it convenient to access important notes quickly.',
        },
        {
          title: 'Privacy Settings',
          info: 'Notes can be marked as private, ensuring that sensitive information remains secure.',
        },
        {
          title: 'Filtering',
          info: 'Users can filter notes showing only privates ones or/and only favorites ones.',
        },
        {
          title: 'Responsive Design',
          info: 'The application is responsive and works seamlessly on both desktop and mobile devices.',
        },
        {
          title: 'Pagination',
          info: 'Notes are paginated to provide a smooth browsing experience, especially when there are many notes.',
        },
        {
          title: 'User-Friendly Interface',
          info: 'The intuitive and clean interface ensures a smooth user experience.',
        },
        {
          title: 'User search',
          info: 'Users can search other users by their username and access their public notes.',
        },
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Express',
        'MongoDB',
        'Git',
        'Bootstrap',
      ],
      code_link: 'https://github.com/angel-dev-projects/NoteMeProject',
    },
    {
      id: '2',
      name: 'MealMate',
      description:
        'This project is a web application that I developed for my final degree project. It consists of planning and monitoring diets and exercise where users establish a goal (increase muscle mass, lose weight, tone up, improve performance...) which will help to generate a weekly diet plan (breakfast, lunch, snack and dinner ) and an exercise routine from Monday to Friday. These personalized plans will be viewed by users to track them and get information about each meal and exercise.',
      image: 'assets/imgs/mockup_laptop_mealmate.png',
      features: [
        {
          title: 'User Authentication',
          info: 'Users can create accounts and log in.',
        },
        {
          title: 'Profile Editing',
          info: 'Users have the ability to change their profile.',
        },
        {
          title: 'Account Verification',
          info: "When a new account is created, an email will be sent to the user's email to verify their account so they can enter the application.",
        },
        {
          title: 'Password Recovery',
          info: 'Users can recover their password if it has been forgotten. An email will be sent with a new automatically generated password.',
        },
        {
          title: 'Goal Selection',
          info: 'Users must select a fitness goal in order to generate their diets and exercises.',
        },
        {
          title: 'Generation of Diet and Routine',
          info: 'Once the fitness goal has been selected, the weekly diet and exercise routine can be generated according to the previously selected goal.',
        },
        {
          title: 'Meal and Exercise Specification',
          info: 'Users will be able to see the specifications of each meal (calories, fibers, carbohydrates...) and of each exercise (series, repetitions, description...)',
        },
        {
          title: 'User-Friendly Interface',
          info: 'The intuitive and clean interface ensures a smooth user experience.',
        },
        {
          title: 'Responsive Design',
          info: 'The application is responsive and works seamlessly on both desktop and mobile devices.',
        },
        {
          title: 'Admin Account',
          info: 'The administrator users can manage all the operations of reading, modifying and deleting the database tables.',
        },
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Express',
        'MongoDB',
        'Git',
        'Bootstrap',
      ],
      code_link: 'https://github.com/lilanguel/Proyecto_Integrado_DAW_MealMate',
    },
    {
      id: '3',
      name: 'Free To Game',
      description:
        'FreeToGame is an innovative web application that I conceptualized, designed, and developed to cater to gaming enthusiasts seeking to discover and explore a wide range of free-to-play games. With a user-centered design and robust features, FreeToGame empowers users to navigate through an extensive collection of games. Developing the frontend of FreeToGame provided me with a hands-on experience in creating a user-centric application that caters to a specific niche. I gained insights into designing effective filtering functionalities, as well as working with external APIs to fetch and display real-time data.',
      image: 'assets/imgs/mockup_laptop_freetogame.png',
      features: [
        {
          title: 'Comprehensive Game Library',
          info: 'FreeToGame boasts an extensive library of free-to-play games across various genres.',
        },
        {
          title: 'Informative Game Details',
          info: "Each game's dedicated page provides in-depth information, including game description, screenshots, and system requirements. This empowers users to make well-informed decisions before diving into a new game.",
        },
        {
          title: 'Filter',
          info: 'Users can easily filter and sort games based on their preferences, including release date, popularity, genre, platform...',
        },
        {
          title: 'User-Friendly Interface',
          info: "An intuitive user interface ensures effortless navigation, making it simple for users to explore and enjoy the platform's offerings.",
        },
        {
          title: 'Responsive Design',
          info: 'The application is responsive and works seamlessly on both desktop and mobile devices.',
        },
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Bootstrap'],
      live_link: 'https://angel-dev-projects.github.io/freetogame-react/',
      code_link: 'https://github.com/angel-dev-projects/freetogame-react',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {
    this.projectId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadProjectDetails();
  }

  loadProjectDetails(): void {
    if (this.projectId !== null) {
      this.project = this.projects.find((project) => {
        return project.id === this.projectId;
      });
    }
  }
}
