import { Component } from '@angular/core';
import { PostServices } from '../services/posts.services';

@Component({
  // id: moduleId.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PostServices]
})
export class DashboardComponent { 
  profile: interfaceprofile;
  showPosts: boolean;
  posts: PostData[];

  constructor(private postsServices: PostServices){
    this.profile = {
      fname: ' Tameshwar',
      lname: 'Nirmalkar',
      age: 34,
      profession: 'Sr. Technical Lead',
      technologies: ['JS', 'AngularJS', 'ReactJs', 'Lodash']
    };
    this.showPosts = false;

    this.postsServices.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  toggleTechnology(){
    if(this.showPosts){
      this.showPosts = false;
    }
    else{
      this.showPosts = true;
    }
  }
}

interface interfaceprofile {
  fname: string;
  lname: string;
  age: number;
  profession: string;
  technologies: string[]
};

interface PostData {
  id: number,
  title: string,
  body: string
}