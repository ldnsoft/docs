# API Usage

Learn how to use Safebrowsing API in few minutes

### First steps

API URL: `https://safebrowsing.lodine.xyz`

### Check website

GET Request: `/check/[DOMAIN]`

Response (Not flagged): 
```json
{
  "domain": "lodine.xyz",
  "flagged": false
}
```

Response (Flagged): 
```json
{
  "domain": "reallybadwebsite.com",
  "category": "phishing",
  "flagged": true
}
```

***

### How we parse requested domain?

Examples:

* _Before:_ `www.google.com` _After:_ `google.com`
* _Before:_ `www.strangesubdomain.what.strangewebsite.com` _After:_ `strangewebsite.com`
* _Before:_ `www.com.fake.shop` _After:_ `fake.shop`

***

### Swagger UI

[Swagger UI](https://safebrowsing.lodine.xyz/docs)

### FAQ

Q: Can i send URL instead of domain in request?

A: No, if you pass a URL instead of a domain you will get a "Not found" error

Q: Do I need to pay to use the API?

A: No, our services are free for both personal and commercial use, but please be kind and indicate that you are using our API, it will help us grow a lot