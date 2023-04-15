import {AbstractQuestionService} from "../classes/abstract-question.service";
import {from, Observable, of, Subject} from "rxjs";
import {Question} from "../interface/question";
import {QuestionListItem} from "../interface/question-list.item";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";


@Injectable()
export class QuestionService{

  questionItems:QuestionListItem[] =[
    {
      name:'question',
      title:'How to install Docker',
      body:"lorem",
      askedById:{id:'xxxx',name:'Jonathan Burke',pic:''},
      tags:[],
      dateAsked:"string",
      noOfViews:"string"
    },
    {
      name:'question',
      title:'How to install Docker',
      body:"lorem",
      askedById:{id:'xxxx',name:'Jonathan Burke',pic:''},
      tags:[],
      dateAsked:"string",
      noOfViews:"string"
    },
    {
      name:'question',
      title:'How to install Docker',
      body:"lorem",
      askedById:{id:'xxxx',name:'Jonathan Burke',pic:''},
      tags:[],
      dateAsked:"string",
      noOfViews:"string"
    },
  ];

  constructor(private http: HttpClient) {
  }

  findOne(id: string): Observable<Question> {
    return new Observable<Question>();
  }

  save(question: Question){
    this.http.post("localhost:9001/questionService/api/v1/question",question);
  }

  findAll(): Observable<QuestionListItem[]> {
    return of(this.questionItems);
  }
}
