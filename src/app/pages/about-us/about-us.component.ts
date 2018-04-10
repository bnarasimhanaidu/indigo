import { Component, OnInit } from '@angular/core';
import { PARAGRAPS } from '../../hero';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  paragrap: PARAGRAPS = {
    name: 'Indigo Digital Press is foremost Synthetic photo printing press.This is the age of hi-fi, jets and computers. Rapid advancements in science and technology have made their impact on the Photo Printing industry in the world too. Upcoming technology is 2438 X 2438 dpi (LEP) Liquid Electro-photographic Printing; it helps us to print on Synthetic substrates also. Indigo Photo Books (Synthetic Album)  uses the same LEP technology. Indigo Digital Press aims to serve Synthetic Albums for all Photo-Labs across Nigeria and West African Countries',
    name1: 'As far as printing goes, anything you want us to do.<br>There is Indigo Digital Print Advantage for businesses. State of the art machines and calibration devices.Hawk eyed quality control. Lightning fast turnarounds. World-class posters, fliers, leaflets, coffee table books - you name it, we’ll print it.',
    name2: 'Passionate about photography? You’ll love #yougraphy. Gorgeous prints, posters, canvases and more. Turn your Instagram, Facebook, phone and DSLR photos into wall-to- wall awesomeness.</p><p>For life events best left to the pros, check out indigo digital Classifieds, India’s largest photographers’ directory. Browse professionals by location and budget or post an assignment and let us match you to the shooter you need.</p> <p>Got extra special memories that deserve extra special treatment? Our multiple international award winning photobooks are a rage with India’s top wedding and life event photographers. Ask your photographer for a indigo Digital&nbsp; photobook and relive your big day, everyday.'
  };

  constructor() { }

  ngOnInit() {
  }

}

