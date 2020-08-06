# RAID Bot

## Preset callsign
The preset callsign for this bot will be `.gr`

## Command structure

- `@RAID`
  Make bot respond with a random confirmation string.

- `createEvent` || `ce` (eventData?: {title: string, dungeonName: string, datetime: string})
  Create a new event.

- `removeEvent` || `re` (eventId?: number)
  Remove a event.

- `listEvents` || `le`
  Lists all events.

- `advertiseEvent` || `ae` (eventId: number, channel: string | channelRef)
  Advertise an event in a provided channel.

## Event creation flow

- What is the title of the event?
- What is the subtitle of the event?
- What is the description of your event?
- When is the event taking place?
  *you can write `finish` at any point now to finish the creation of the event or write `skip` to skip one step.*
- Want to add a picture to your event?
- Want to link to a website when clicking on title, subtitle or image?
- Want to add a larger image to the bottom of the event-message?
