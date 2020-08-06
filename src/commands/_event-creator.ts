import { Message, User } from "discord.js";
import { sendMessage } from "../helpers";

export const _createEvent = async (message: Message) => {
  const newEvent = await workQuestionStack(message);
  console.log(newEvent);
};

class Event {
  uid: string = '';
  title: string = '';
  subTitle: string = '';
  datetime: number = new Date().getTime();
  reminders: number[] | undefined;
  roleMentions: string | undefined;
}

const questionStack = [
  {
    'question': 'What is the title for your event?',
    'key': 'title'
  },
  {
    'question': 'What is the subtitle for your event?',
    'key': 'subTitle'
  }
];

const workQuestionStack = async (message: Message): Promise<Event> => {
  let eventBuilder = new Event;
  for (const question of questionStack) {
    sendMessage(message.channel, question.question);
    const response = await awaitAuthorMessage(message);
    if (response) {
      //@ts-ignore
      eventBuilder[question.key] = response.content;
    }
  }
  return eventBuilder;
};

const awaitAuthorMessage = async(message: Message): Promise<Message | undefined> => {
  return new Promise((resolve) => {
    const collector = message.channel.createMessageCollector(
      (msg: Message) => msg.author === message.author,
      {
        time: 6000
      }
    );

    collector.on('collect', (msg: Message) => {
      resolve(msg);
      collector.stop();
    });

    collector.on('end', () => {
      resolve(undefined);
    });
  });
};
