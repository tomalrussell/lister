/**
 * simple-local-lists
 * - a thin layer over localStorage
 * - stores things in lists and gets them out again
 * 
 * - initial design: to be used for storing lists of posts, keyed by type
 * 
 */

(function (root, factory) {
  
  if(typeof define === "function" && define.amd) {
    // Handle AMD definitions
    define(["underscore"], function(_){
      return (root.SimpleLocalLists = factory(_));
    });
  } else if(typeof module === "object" && module.exports) {
    // Handle commonJS / browserify require and exports
    module.exports = (root.SimpleLocalLists = factory(require("underscore")));
  } else {
    // Simply register SimpleLocalLists in the global namespace (probably window)
    root.SimpleLocalLists = factory(root._);
  }
  
}(this, function(_) {

	var SimpleLocalLists = {
	  getList: function(listName){
	    return JSON.parse(localStorage.getItem(listName));
	  },
	  getItem: function(listName, id){
	    var list = this.get(listName);
	    return _.findWhere(list,{id:id});
	  },
	  getItemsWhere: function(listName, test){
		  var list = this.get(listName);
	    return _.filter(list, test(item) );
	  },
	  
	  setList: function(listName,items){
	    localStorage.setItem(listName, JSON.stringify(items));
	  },
	  setItem: function(listName,item){
	    this.removeItem(listName,item.id);
	    this.addItem(list,item);
	  },
	  
	  addList: function(listName){
	    this.setList(listName, []);
	  }
	  addItem: function(listName,item){
	    this.addItems(listName,item);
	  },
	  addItems: function(listName,item){
	    // make sure we're dealing with arrays
	    var existing = this.getList(listName) || [];
	    if(!(item instanceof Array)) item = [item];
	    
	    // add only - no overwriting
	    var to_add = _.filter(value, function(item){
	      return !_.findWhere(existing,{id:item.id});
	    });
	    
	    var to_save = existing.concat(to_add);
	    
	    this.setList(listName,to_save);
	  },
	  
	  removeList: function(listName){
	    localStorage.removeItem(listName);
	  },
	  removeItem: function(listName, id){
		  var list = this.getList(listName) || [];
		  var filtered = _.filter(list, function(item){
			  // check item doesn't have the id of the one we want to remove
			  return item.id != args.id;
		  });
	
		  // replace this list with the filtered list
		  this.setList(listName,filtered);
	  },
	  removeAll: function(){
	    localStorage.clear();
	  }
	};
	
	
  return SimpleLocalLists;
  
});
