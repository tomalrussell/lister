/**
 * Lister
 * - puts things in lists and gets them out again
 * - a thin layer over localStorage
 *
 */

(function (root, factory) {

  if(typeof define === "function" && define.amd) {
    // Handle AMD definitions
    define(["underscore"], function(_){
      return (root.lister = factory(_));
    });
  } else if(typeof module === "object" && module.exports) {
    // Handle commonJS / browserify require and exports
    module.exports = (root.lister = factory(require("underscore")));
  } else {
    // Simply register lister in the global namespace (probably window)
    root.lister = factory(root._);
  }

}(this, function(_) {

  function getList (list_name){
    return JSON.parse(localStorage.getItem(list_name));
  }

  function getItem (list_name, id){
    var list = getList(list_name);
    return _.findWhere(list,{id:id});
  }

  function setList (list_name,items){
    localStorage.setItem(list_name, JSON.stringify(items));
  }

  function setItem (list_name,id,item){
    removeItem(list_name,id);
    addItem(list_name,item);
  }

  function addItem (list_name,items){
    addItems(list_name,items);
  }

  function addItems (list_name,items){
    // make sure we're dealing with arrays
    var existing = getList(list_name) || [];
    if(!(items instanceof Array)) items = [items];

    // add only - no overwriting
    var to_add = _.filter(items, function(item){
      return !_.findWhere(existing,{id:item.id});
    });

    var to_save = existing.concat(to_add);

    setList(list_name,to_save);
  }

  function removeList (list_name){
    localStorage.removeItem(list_name);
  }

  function removeItem (list_name, id){
    var list = getList(list_name) || [];
    var filtered = _.filter(list, function(item){
      // check item doesn't have the id of the one we want to remove
      return item.id != id;
    });

    // replace this list with the filtered list
    setList(list_name,filtered);
  }


  return {
    get: function(list_name, id){
      if(id === undefined){
        return getList(list_name);
      } else {
        return getItem(list_name, id);
      }
    },

    set: function(list_name, id_or_items, item){
      if(id_or_items === undefined){
        return undefined;
      } else if(id_or_items instanceof Array){
        return setList(list_name, id_or_items);
      } else {
        return setItem(list_name, id_or_items, item);
      }
    },

    add: function(list_name, item_or_items){
      if(item_or_items === undefined){
        return undefined;
      } else {
        return addItems(list_name, item_or_items);
      }
    },

    remove: function(list_name, item){
      if(item === undefined){
        return removeList(list_name);
      } else {
        return removeItem(list_name, item);
      }
    },
  };

}));
