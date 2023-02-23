<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@webex/plugin-meetings](./plugin-meetings.md) &gt; [Meeting](./plugin-meetings.meeting.md) &gt; [default](./plugin-meetings.meeting.default.md) &gt; [updateShare](./plugin-meetings.meeting.default.updateshare.md)

## Meeting.default.updateShare() method

Update the share streams, can be used to start sharing

NOTE: this method can only be used with transcoded meetings, for multistream meetings use publishTrack()

**Signature:**

```typescript
updateShare(options: {
        sendShare?: boolean;
        receiveShare?: boolean;
        stream?: any;
        skipSignalingCheck?: boolean;
    }): any;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | { sendShare?: boolean; receiveShare?: boolean; stream?: any; skipSignalingCheck?: boolean; } |  |

**Returns:**

any

{<!-- -->Promise<!-- -->}

 Meeting
