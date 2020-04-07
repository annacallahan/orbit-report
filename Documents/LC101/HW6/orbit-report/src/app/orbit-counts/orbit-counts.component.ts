import { Component, OnInit, Input } from '@angular/core';
import {Satellite} from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() {
   }

  ngOnInit() {
  }

totalCounts(): number {
  return this.satellites.length;
}

spaceDebrisCounts(): number {
  let count = 0;
  for(let item of this.satellites){
    if(item.type === 'Space Debris'){
      count += 1;
    }
  } return count;
}

communicationCounts(): number {
  let count = 0;
  for(let item of this.satellites){
    if(item.type === 'Communication'){
      count += 1;
    }
  } return count;
}

probeCounts(): number {
  let count = 0;
  for(let item of this.satellites){
    if(item.type === 'Probe'){
      count += 1;
    }
  } return count;
}

positioningCounts(): number {
  let count = 0;
  for(let item of this.satellites){
    if(item.type === 'Positioning'){
      count += 1;
    }
  } return count;
}

spaceStationCounts(): number {
  let count = 0;
  for(let item of this.satellites){
    if(item.type === 'Space Station'){
      count += 1;
    }
  } return count;
}

telescopeCounts(): number {
  let count = 0;
  for(let item of this.satellites){
    if(item.type === 'Telescope'){
      count += 1;
    }
  } return count;
}

}
