import { Injectable } from '@angular/core';
import { Project } from '../_modals/project';
import { Tag } from '../_modals/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "HDB Price Prediction", pictures: ["img/projects/hdbPricePrediction_01.png","img/projects/hdbPricePrediction_02.png"], projectLink: "//github.com/leecharlenej/fuzzy-eureka", summary: "Python project for data analytics on Singapore's HDB prices.", description: "This is a NUS school group project, under the module IT5006 Fundamentals of Data Analytics. A Streamlit app was developed to analyze the prices of resale and rental houses in Singapore. Various models such as random forest regression, linear regression and XGBoost were implemented to identify the best predictive model.", tags: [Tag.PYTHON]},
    {id: 1, name: "Distributed Systems Project", pictures: ["img/projects/distributedSystems_01.png"], projectLink: "//www.github.com/leecharlenej", summary: "Java project to build a linearizable, sharded key-value store.", description: "This is a NUS school project, under the module CS5223 Distributed Systems. There are 5 labs, each focusing on different aspects of distributed systems such as remote procedure calls, key-value store replication, Paxos consensus, sharding, and dynamic load balancing. It is similar to Amazon\'s DynamoDB or Google\'s Spanner. As this project is still being used at NUS, please contact me for the link.", tags: [Tag.JAVA]},
    {id: 2, name: "MCQ Quiz Generator", pictures: ["img/projects/mcqQuizGenerator_01.png","img/projects/mcqQuizGenerator_02.png","img/projects/mcqQuizGenerator_03.png"], projectLink: "//github.com/leecharlenej/mcq-quiz-generator", summary: "Python project that generates a MCQ quiz in Word.", description: "The MCQ Quiz Generator is a versatile tool crafted to assist educators and examiners in creating, modifying, and randomizing fact-based multiple-choice questions (MCQs) to ensure a varied testing experience. This innovative tool integrates ChatGPT to dynamically rephrase existing questions or to generate new ones, consistently testing the same concepts through varied phrasing.", tags: [Tag.PYTHON]},
    {id: 4, name: "Angular Portfolio", pictures: ["img/projects/angularPortfolio_01.png"], projectLink: "//github.com/leecharlenej/portfolio", summary: "Angular project to learn about framework and house portfolio.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR]},
    {id: 5, name: "Coding Practices", pictures: ["img/projects/codingPractices_01.png"], projectLink: "//github.com/leecharlenej/coding-practices", summary: "Exercises to practise coding in Java and Python.", description: "This repository holds my solutions for Katis and Leetcode. I practise whenever I can to improve my technical skills and deepen my understanding of algorithms and data structures. By tackling a variety of problems, I hope to become mroe proficient in writing clean and optimized code.", tags: [Tag.PYTHON, Tag.JAVA]},
    {id: 6, name: "The Odin Project", pictures: ["img/projects/theOdinProject_01.png","img/projects/theOdinProject_02.png","img/projects/theOdinProject_03.png"], projectLink: "//github.com/leecharlenej/theodinproject", summary:"Embarking on The Odin Project to learn about web development.", description: "I'm embarking on The Odin Project as part of my journey to become a full-stack developer. By working on hands-on projects and real-world applications, I aim to build a solid foundation in both front-end and back-end development. My goal is to acquire the skills necessary to create robust, full-stack web applications.", tags: [Tag.JAVASCRIPT, Tag.JAVA]}
  ];
  
  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find( project => project.id === id)

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id)
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let foundAll = true;

      filterTags.forEach(function (filterTags) {
        if (project.tags.includes(filterTags)==false){
          foundAll = false;
        }

      });

      if (foundAll) {
        filteredProjects.push(project);
      }


    });
    return filteredProjects;
  }
}
