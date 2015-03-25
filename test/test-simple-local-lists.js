var post_one = {id:1,string:'test1'};
var post_two = {id:2,string:'test2'};
var post_two_alt = {id:2,string:'test2 changed'};

var posts_in = [
  post_one,
  post_two,
  {id:3,string:'test3'},
];

var new_post = {id: 7,string:'test7'};

var posts_in_and_new = [
  post_one,
  post_two,
  {id:3,string:'test3'},
  new_post,
];

var more_posts = [
  {id:4,string:'test4'},
  {id:5,string:'test5'},
  {id:6,string:'test6'},
];

var all_posts = [
  post_one,
  post_two,
  {id:3,string:'test3'},
  {id:4,string:'test4'},
  {id:5,string:'test5'},
  {id:6,string:'test6'},
];

var posts_in_except_two = [
  post_one,
  {id:3,string:'test3'},
];

describe("Storage", function() {
  it("sets and gets a list by name", function(){
    lister.set("posts", posts_in);

    var posts = lister.get("posts");
    expect(posts).toEqual(posts_in);
  });

  it("gets an item from a list by id", function() {
    lister.set("posts", posts_in);

    var posts = lister.get("posts", 1);
    expect(posts).toEqual(post_one);
  });

  it("sets an item in a list by id", function() {
    lister.set("posts", posts_in);
    lister.set("posts", 2, post_two_alt);

    var posts = lister.get("posts", 2);
    expect(posts).toEqual(post_two_alt);
  });

  it("adds multiple items to a list", function(){
    lister.set("posts", posts_in);
    lister.add("posts", more_posts);

    var posts = lister.get("posts");
    expect(posts).toEqual(all_posts);
  });

  it("adds a single item to a list", function(){
    lister.set("posts", posts_in);
    lister.add("posts", new_post);

    var posts = lister.get("posts");
    expect(posts).toEqual(posts_in_and_new);
  });

  it("removes a list entirely", function(){
    lister.set("posts",posts_in);
    lister.remove("posts");
    var posts = lister.get("posts");
    expect(posts).toBe(null);
  });

  it("removes a single item from a list", function(){
    lister.set("posts",posts_in);
    lister.remove("posts",2);
    var posts = lister.get("posts");
    expect(posts).toEqual(posts_in_except_two);
  });

});