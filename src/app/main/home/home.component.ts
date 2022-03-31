import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { state } from '@angular/animations';
import { DataPassService } from 'src/app/services/data-pass.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [
    {
      id: 1,
      title: 'Spider-Man: No Way Home',
      tagline: 'The Multiverse unleashed.',
      image: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      review: '8.3',
      time: '2021 / 148 min',
      generes: 'Action, Adventure, Science Fiction',
      synopsis: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      actors: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch', 'Jacob Batalon']
    },
    {
      id: 2,
      title: 'RED NOTICE',
      tagline: 'PRO AND CONS',
      image: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg',
      review: '6.8',
      time: '2021 / 118 min',
      generes: 'Action, Comedy, Crime, Thriller',
      synopsis: "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
      actors: ['Dwayne Johnson', 'Ryan Reynolds', 'Gal Gadot', 'Ritu Arya']
    },
    {
      id: 3,
      title: 'The Originals',
      tagline: 'Evil walks with us.. Always and forever.',
      image: 'https://i.pinimg.com/564x/01/a5/bf/01a5bfc9836ba789f5e24350d178ac82.jpg',
      review: '8.4',
      time: '2013-2018 / (5 seasons, 92 episodes)',
      generes: 'Horror; Fantasy; Supernatural',
      synopsis: "The Original family of vampires settle down in the city of New Orleans that they helped to construct several decades ago. They encounter old buddies and confront new foes.",
      actors: ['Joseph Morgan', 'Daniel Gillies', 'Claire Holt', 'Phoebe Tonkin', 'Charles Michael Davis', 'Leah Pipes', 'Danielle Campbell']
    },
    {
      id: 4,
      title: 'The Vampire Diaries',
      tagline: 'Hot Blooded. How many will die so that one can live?',
      image: 'https://i.pinimg.com/564x/ac/67/86/ac6786bd6954adf9e4fd709257dfb689.jpg',
      review: '7.9',
      time: '2009-2017 / (8 seasons, 171 episodes)',
      generes: 'Horror; Romance; Drama; Supernatural; Thriller',
      synopsis: "The Original family of vampires settle down in the city of New Orleans that they helped to construct several decades ago. They encounter old buddies and confront new foes.",
      actors: ['Nina Dobrev', 'Paul Wesley', 'Ian Somerhalder', 'Steven R. McQueen', 'Sara Canning', 'Kat Graham', 'Candice King', 'Zach Roerig', 'Kayla Ewell', 'Michael Trevino', 'Matt Davis', 'Joseph Morgan', 'Michael Malarkey']
    },
    {
      id: 5,
      title: 'Vikings',
      tagline: 'Better to fight and fall than to live without hope.',
      image: 'https://images.hdqwalls.com/download/vikings-2021-6l-1440x2560.jpg',
      review: '8.6',
      time: '2013-2020 / (6 seasons, 89 episodes)',
      generes: 'Drama; War; Historical film; Adventure; Miniseries; Historical Fiction; Adventure fiction; Action fiction',
      synopsis: "The series tells the saga of Ragnar's band of Viking brothers and his family as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods: legend has it that he was a direct descendant of Odin, the god of war and warriors.",
      actors: ['Travis Fimmel', 'Katheryn Winnick', 'Clive Standen', 'Jessalyn Gilsig', 'Gustaf Skarsgård', 'Gabriel Byrne', 'George Blagden', 'Donal Logue', 'Alyssa Sutherland', 'Linus Roache', 'Alexander Ludwig', `Nathan O'Toole`, 'Ben Robson']
    },
  ];

  search: any;
  constructor(
    private router: Router,
    private datapass: DataPassService,
    private storage: StorageService
  ) { }

  ngOnInit() {
  }

  async showMore(data: any) {
    this.datapass.changeSubject(data);
    await this.router.navigate([`/main/home/${data.id}`]);
  }


}
