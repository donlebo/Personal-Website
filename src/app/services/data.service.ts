import { Injectable } from '@angular/core';
import {
  Education,
  Introduction,
  Presentation,
  QualificationCard,
  Section,
  SkillCategory,
} from './data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getEducationQualifications(): QualificationCard[] {
    return [
      {
        title: 'Higher Technician Diploma for Technologies',
        subtitle: 'Steve Jobs Academy - Caltagirone(CT)',
        dateText: '2020 - 2022',
        text: 'Assessment: 81/100',
        previewAvailable: false,
      },
      {
        title: 'Training course for workers, medium risk',
        subtitle: 'Steve Jobs Academy - Caltagirone(CT)',
        dateText: '2022',
        text: 'Certified workplace safety training',
        previewAvailable: false,
      },
      {
        title: 'Company first aid officer',
        subtitle: 'E.C.I.P.A. - CNA Piazza dei Martiri, 8 (CT)',
        dateText: '2020',
        text: 'Qualification as First Aid Officer',
        previewAvailable: false,
      },
      {
        title: 'High school education diploma 90/100',
        subtitle: 'High school of human sciences G. Gentile - Caltagirone(CT)',
        dateText: '2019',
        text: 'Assessment: 90/100',
        previewAvailable: false,
      },
    ];
  }

  getWorkQualifications(): QualificationCard[] {
    return [
      {
        title: 'Angular Developer',
        subtitle: 'ALTEN ITALIA',
        dateText: '07/2023 • PRESENT',
        text: 'Angular developer. Within the CMP2 team at one of our clients, Aruba, where we work on the new CMP (Cloud Management System) platform. Every day we face stimulating challenges and help create innovative solutions for managing cloud services.',
        previewAvailable: true,
      },
      {
        title: 'Stage',
        subtitle: 'ALTEN ITALIA',
        dateText: '01/2023 • 06/2023',
        text: 'Acquired skills: PostgreSQL - Node.js - DevOps - NgRX - Json-server - Typescript - RxJS - HTML - Postman - Angular - Canva - Swagger - OOP - Bootstrap - English Language - HTML5 - CSS - JavaScript',
        previewAvailable: true,
      },
      {
        title: 'Curricular internship',
        subtitle: 'NIGITHOR',
        dateText: '05/2022 • 10/2022',
        text: 'Acquired skills: HTML - Postman - Angular - JDBC - Oracle - SQL - Development Swagger - Spring Framework - OOP - Java - English Language - Ionic Framework',
        previewAvailable: true,
      },
      {
        title: 'Upskill 4.0 project - Maize.plus',
        subtitle: 'Steve Jobs Academy - H-FARM',
        dateText: '09/2021 • 12/2021',
        text: 'Working in a team and using the Design Thinking methodology we were able to develop a mockup that illustrated areas for improvement for a company. We have worked on the five phases that this methodology provides, namely: Empathy, Definition, Ideation, Prototyping and Testing',
        previewAvailable: true,
      },
    ];
  }

  getIntroEducations(): Education[] {
    return [
      {
        end: 5,
        duration: 2500,
        time: 'Years',
        text: 'of personal study',
      },
      {
        end: 1080,
        duration: 2500,
        time: 'Hours',
        text: 'of lessons',
      },
      {
        end: 720,
        duration: 2500,
        time: 'Hours',
        text: 'of curricular internship',
      },
      {
        end: 6,
        duration: 2500,
        time: 'Months',
        text: 'of stage at Alten Italia',
      },
    ];
  }

  getIntroductions(): Introduction {
    return {
      title: 'About me',
      subtitle: 'My introduction',
      text: 'I love to get involved and face always new challenges that help me to increase and affirm my knowledge in the field. I took a course that gave me the basics on various programming languages, which opened up a world to me about it. My goal is to keep learning, I love this world.',
    };
  }

  getPresentation(): Presentation {
    return {
      title: 'Donato Bello',
      subtitle: 'Frontend Developer',
      text: 'I am fascinated by how people can invent, design and create solutions that improve our lives and that will save the planet. This is what we call innovation and it is achieved through cooperation and courage.',
      scrollText: 'Scroll down',
    };
  }

  getSkills(): SkillCategory[] {
    return [
      {
        icon: 'code',
        title: 'FE',
        description: 'More than 3 years',
        skills: [
          'HTML',
          'CSS',
          'Bootstrap',
          'JavaScript',
          'TypeScript',
          'SASS',
          'Angular',
          'Ionic',
          'React',
          'React Native',
        ],
        expanded: true,
      },
      {
        icon: 'storage',
        title: 'BE',
        description: 'Basic knowledge',
        skills: ['C', 'Java', 'Springboot', 'PHP', 'Node.js', 'Python', 'Swagger', 'C#'],
      },
      {
        icon: 'dns',
        title: 'Data',
        description: 'Basic knowledge',
        skills: ['MySQL', 'PostgreSQL', 'Oracle'],
      },
      {
        icon: 'sports_esports',
        title: 'Game',
        description: 'Basic knowledge',
        skills: ['Unity', 'Blender'],
      },
      {
        icon: 'brush',
        title: 'UI',
        description: 'More than 3 years',
        skills: ['Photoshop', 'Canva', 'Figma'],
      },
    ];
  }

  getSections(): Section[] {
    return [
      { id: 'about', label: 'About me', icon: 'person' },
      { id: 'skills', label: 'Skills', icon: 'work' },
      { id: 'qualifications', label: 'Qualifications', icon: 'build' },
      { id: 'contacts', label: 'Contacts', icon: 'email' },
    ];
  }
}
