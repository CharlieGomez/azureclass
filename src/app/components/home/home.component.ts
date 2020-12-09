import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AOS from 'aos';
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  progSkills: any[] = [];
  otherSkills: any[] = [];
  otherSkills2: any[] = [];
  profile: any;

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', null);
    this.http.get('assets/translate/profile.json').subscribe(data => {
      this.progSkills = data['prog_skill'];
      this.profile = data['profile'];
      this.otherSkills = data['other_skill'];
      this.otherSkills2 = data['other_skill2'];
    });
    AOS.init();
  }
}

