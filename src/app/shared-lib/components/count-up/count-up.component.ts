import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-count-up',
  standalone: true,
  imports: [],
  template: `{{ displayNumber }}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './count-up.component.css',
})
export class CountUpComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() end: number = 0;
  @Input() duration: number = 2000;

  displayNumber: number = 0;
  private observer!: IntersectionObserver;
  private animationStarted = false;
  private intervalId: any;

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animationStarted) {
            this.animationStarted = true;
            this.animateCountUp();
            this.observer.disconnect(); // Non serve più osservare
          }
        });
      },
      {
        threshold: 0.1, // quando almeno il 10% è visibile
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  animateCountUp() {
    const start = 0;
    const range = this.end - start;
    const stepTime = 30;
    const steps = Math.ceil(this.duration / stepTime);
    let currentStep = 0;

    this.intervalId = setInterval(() => {
      currentStep++;
      this.displayNumber = Math.floor(start + (range * currentStep) / steps);
      this.cdr.detectChanges();

      if (currentStep >= steps) {
        this.displayNumber = this.end;
        this.cdr.detectChanges();
        clearInterval(this.intervalId);
      }
    }, stepTime);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
