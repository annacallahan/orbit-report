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

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response){
      response.json().then(function(data){
        let fetchedSatellites = data.satellites;
        let newSatellite = {};
        for (let index = 0; index < fetchedSatellites.length; index++) {
        newSatellite = new Satellite(fetchedSatellites[index].name, fetchedSatellites[index].type, fetchedSatellites[index].launchDate, fetchedSatellites[index].orbitType, fetchedSatellites[index].operational);
        this.sourceList.push(newSatellite);
        console.log(this.sourceList);
        }
      }.bind(this));

    }.bind(this));
  }
}
