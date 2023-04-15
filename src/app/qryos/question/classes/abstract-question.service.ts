import {Question} from "../interface/question";
import {Observable, Subject} from "rxjs";
import {QuestionListItem} from "../interface/question-list.item";
import {Injectable} from "@angular/core";
import {QuestionService} from "../services/question.service";

@Injectable({
  providedIn:"root",
  useClass:QuestionService,
})
export abstract class AbstractQuestionService{
  questions$: Subject<Question[]> = new Subject<Question[]>();
  question$: Subject<Question> = new Subject<Question>();

  abstract save(question: Question):void;
  abstract findAll():Observable<QuestionListItem[]>;
  abstract findOne(id: string):Observable<Question>;
}
