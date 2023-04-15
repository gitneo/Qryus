import {ListItemInterface} from "../../shared/list/list-Item.interface";
import {User} from "../../shared/user/user.interface";

export interface QuestionListItem extends ListItemInterface{
  title:string;
  body:string;
  askedById:User;
  tags:string[];
  dateAsked:string;
  noOfViews:string;
}
