import { Component } from '@angular/core';
import { Satellite} from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    this.displayList = [];

    window.fetch(satellitesUrl).then(function(response){
      response.json().then(function(data){
        let fetchedSatellites = data.satellites;
        let newSatellite = {};
        for (let index = 0; index < fetchedSatellites.length; index++) {
        newSatellite = new Satellite(fetchedSatellites[index].name, fetchedSatellites[index].type, fetchedSatellites[index].launchDate, fetchedSatellites[index].orbitType, fetchedSatellites[index].operational);
        this.sourceList.push(newSatellite);
        }
        this.displayList = this.sourceList.slice(0);
      }.bind(this));

    }.bind(this));
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    // assign this.displayList to be the the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
 }
}
