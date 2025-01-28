import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  isPlaying: boolean = false;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Litmark : Organiza Your Bookmark With Ease;');
  }

  togglePlay(video: HTMLVideoElement) {
    if (this.isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
