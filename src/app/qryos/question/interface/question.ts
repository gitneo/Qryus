import {ListItemInterface} from "../../shared/list/list-Item.interface";
import {User} from "../../shared/user/user.interface";

export interface Question {
  title:string;
  body:string;
  user:User;
  comment?:string[];
  tags?:string[];
  dateAsked?:string;
  noOfModifications?:string;
  noOfViews?:string;
}
