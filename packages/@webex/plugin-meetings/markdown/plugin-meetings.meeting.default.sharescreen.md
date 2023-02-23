<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@webex/plugin-meetings](./plugin-meetings.md) &gt; [Meeting](./plugin-meetings.meeting.md) &gt; [default](./plugin-meetings.meeting.default.md) &gt; [shareScreen](./plugin-meetings.meeting.default.sharescreen.md)

## Meeting.default.shareScreen() method

NOTE: this method can only be used with transcoded meetings, for multistream use publishTrack()

**Signature:**

```typescript
shareScreen(options?: {
        sendAudio: boolean;
        sendShare: boolean;
        sharePreferences: {
            shareConstraints: MediaTrackConstraints;
        };
    }): any;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | { sendAudio: boolean; sendShare: boolean; sharePreferences: { shareConstraints: MediaTrackConstraints; }; } | _(Optional)_ parameter |

**Returns:**

any

{<!-- -->Promise<!-- -->}
