# RAID Bot

## Preset callsign
The preset callsign for this bot will be `.gr`

## Command structure

- `@RAID`
  Make bot respond with a random confirmation string.

- `setCallsign` || `sc` (callsign?: string)
  Set the callsign for a instance.

- `createEvent` || `ce` (eventData?: {title: string, dungeonName: string, datetime: string})
  Create a new event.

- `removeEvent` || `re` (eventId?: number)
  Remove a event.

- `listEvents` || `le`
  Lists all events.

- `advertiseEvent` || `ae` (eventId: number, channel: string | channelRef)
  Advertise an event in a provided channel.
