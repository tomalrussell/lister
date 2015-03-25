describe("Storage", function() {
  it("sets and gets a list by name", function(){
    lister.set("posts", [
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
    ]);

    var posts = lister.get("posts");
    expect(posts).toEqual([
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
    ]);
  });

  it("gets an item from a list by id", function() {
    lister.set("posts", [
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
    ]);

    var posts = lister.get("posts", 1);
    expect(posts).toEqual({id:1,string:'test1'});
  });

  it("sets an item in a list by id", function() {
    lister.set("posts", [
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
    ]);
    lister.set("posts", 2, {id:2,string:'test2 changed'});

    var posts = lister.get("posts", 2);
    expect(posts).toEqual({id:2,string:'test2 changed'});
  });

  it("adds multiple items to a list", function(){
    lister.set("posts", [
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
    ]);
    lister.add("posts", [
      {id:4,string:'test4'},
      {id:5,string:'test5'},
      {id:6,string:'test6'},
    ]);

    var posts = lister.get("posts");
    expect(posts).toEqual([
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
      {id:4,string:'test4'},
      {id:5,string:'test5'},
      {id:6,string:'test6'},
    ]);
  });

  it("adds a single item to a list", function(){
    lister.set("posts", [
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
    ]);
    lister.add("posts", {id:7,string:'test7'});

    var posts = lister.get("posts");
    expect(posts).toEqual([
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
      {id:7,string:'test7'},
    ]);
  });

  it("removes a list entirely", function(){
    lister.set("posts",[
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
    ]);
    lister.remove("posts");

    var posts = lister.get("posts");
    expect(posts).toBe(null);
  });

  it("removes a single item from a list", function(){
    lister.set("posts",[
      {id:1,string:'test1'},
      {id:2,string:'test2'},
      {id:3,string:'test3'},
    ]);
    lister.remove("posts",2);

    var posts = lister.get("posts");
    expect(posts).toEqual([
      {id:1,string:'test1'},
      {id:3,string:'test3'},
    ]);
  });

});