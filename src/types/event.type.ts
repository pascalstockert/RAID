export interface Event {
  uid: string;
  title: string;
  subTitle: string;
  datetime: number;
  reminders: number[];
  roleMentions: string;
}
