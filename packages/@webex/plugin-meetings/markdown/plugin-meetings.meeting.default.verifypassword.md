<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@webex/plugin-meetings](./plugin-meetings.md) &gt; [Meeting](./plugin-meetings.meeting.md) &gt; [default](./plugin-meetings.meeting.default.md) &gt; [verifyPassword](./plugin-meetings.meeting.default.verifypassword.md)

## Meeting.default.verifyPassword() method

Checks if the supplied password/host key is correct. It returns a promise with information whether the password and captcha code were correct or not.

**Signature:**

```typescript
verifyPassword(password: string, captchaCode: string): Promise<{
        isPasswordValid: boolean;
        requiredCaptcha: any;
        failureReason: string;
    } | {
        isPasswordValid: boolean;
        requiredCaptcha: any;
        failureReason: string;
    }>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  password | string | this can be either a password or a host key, can be undefined if only captcha was required |
|  captchaCode | string | <p>can be undefined if captcha was not required by the server</p><p> Meeting</p> |

**Returns:**

Promise&lt;{ isPasswordValid: boolean; requiredCaptcha: any; failureReason: string; } \| { isPasswordValid: boolean; requiredCaptcha: any; failureReason: string; }&gt;

{<!-- -->Promise<!-- -->&lt;<!-- -->{<!-- -->isPasswordValid: boolean, requiredCaptcha: boolean, failureReason: MEETING\_INFO\_FAILURE\_REASON<!-- -->}<!-- -->&gt;<!-- -->}
