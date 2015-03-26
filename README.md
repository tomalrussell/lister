# lister

## Why does lister exist?

Local storage in the browser is handy - you can save data that will persist
between page refreshes, and maybe avoid making network requests, whether
that's to let people use that data offline, or just to avoid making relatively
slow requests over the network.

HTML5 localStorage is well supported across browsers (http://caniuse.com/#feat=namevalue-storage).
On the other hand, it's basically just a key/value store for strings (http://diveintohtml5.info/storage.html#methods).

Lister is a small wrapper around HTML5 localStorage designed for storing
lists of things - probably objects, probably all identifiable by some id.

Hopefully it's nice to use - I wrote it as an 'I just want to...' module, hopefully
without making too many assumptions about other javascript/frameworks.


## How can I use lister?

Save some items in a list

```javascript
var posts = [
  {id:1, title:'First Post'},
  {id:2, title:'Another Post'},
]
lister.set("posts", posts);
```

Later, get them out again...

```javascript
var posts = lister.get("posts"); // returns posts array
```

Remove an item by id

```javascript
lister.remove("posts", 1);
```

Add a new item to a list

```javascript
var new_post = {id:3, title: 'New Post'};
lister.add("posts", new_post);
```


## Contribution

Feel free to file issues or open pull requests. I'll put issues in the tracker if I think of
anything.



## Surely this isn't new?

Nope, not at all. Here's Christian Heilmann excited about localStorage,
writing in 24ways back in 2010: http://24ways.org/2010/html5-local-storage/

### LocalStorage polyfills:

-  Cookie polyfill:
   https://gist.github.com/remy/350433

-  Non-cookie polyfill:
   https://github.com/marcuswestin/store.js

### Backbone localStorage adapter:
https://github.com/jeromegn/Backbone.localStorage


### Similar projects:

-  Depot:
   https://github.com/mkuklis/depot.js

-  Dustbin (with a Riak-inspired interface):
   http://morgul.github.io/dustbin/

-  Lawnchair (simple json storage):
   http://brian.io/lawnchair

-  Lockr (with a minimal Redis-style interface):
   https://github.com/tsironis/lockr

-  BankersBox (with a fuller Redis-style interface):
   https://github.com/twilio/BankersBox