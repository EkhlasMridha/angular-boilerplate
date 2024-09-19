import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionNumberService {
  private currentQuestion: number = 1;
  private questionNumber$: BehaviorSubject<number> = new BehaviorSubject(
    this.current
  );

  constructor() {}

  get current() {
    return this.currentQuestion;
  }

  set setQuestionNumber(val: number) {
    this.currentQuestion = val;
    this.questionNumber$.next(val);
  }

  get questionNumberListener(): Observable<number> {
    return this.questionNumber$.asObservable();
  }
}
