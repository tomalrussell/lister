# lister


## Why does lister exist?

Local storage in the browser is handy - you can save data that will persist
between page refreshes, and maybe avoid making network requests, whether
that's to let people use it offline, or just to avoid making relatively
slow request over the network.

HTML5 localStorage is well supported across browsers. On the other hand, it's
just a key/value store for strings.

Lister is a small wrapper around HTML5 localStorage designed for storing
lists of things - probably objects, probably all identifiable by some id.

Hopefully it's nice to use - I wrote partly as an 'I just want to...' module,
originally for use in a PhoneGap/Backbone app.


## How can I use lister?

'''javascript

// save some items in a list
var posts = [
  {id:1, title:'First Post'},
  {id:2, title:'Another Post'},
]
lister.set("posts", posts);

// later, get them out agin...
var posts = lister.get("posts"); // returns posts array


// remove an item by id
lister.remove("posts", 1);

// add a new item to a list
var new_post = {id:3, title: 'New Post'};
lister.add("posts", new_post);

'''