thing
=====

Extreme lightweight object plugin without dependencies.

-----

At each plugin, there are object helper methods that are frequently used. The aim of this plugin is to decrease the time required for code rewriting while starting to a new plugin by providing some basic object utilities.

This plugin does not intend to be used by directly in the projects. For these cases, underscore or lazy.js like plugins can be used. 

Here are some basic examples,

**Thing.isArray**

Thing.isArray([2,4,5]) /// True
Thing.isArray("Smith") /// False

**Thing.allTrue**

Thing.allTrue([undefined,true]) /// False
Thing.allTrue([true,true,true]) /// True

**Thing.contains**

Thing.contains([2,4,5],2) /// True
Thing.contains([2,4,5],3) /// False

**.loop (CHAINABLE)**

Thing({name:"Smith",age:20}).loop(function(key,val){
console.log(key,val);
});

**.keys**

Thing({name:"Smith",age:20}).keys() /// ["name","age"]

**.values**

Thing({name:"Smith",age:20}).values() /// ["Smith",20]

**.get**

Thing({name:"Smith",age:20}).get("name") /// ["Smith"]

Thing({name:"Smith",age:20}).get(["name","age"]) /// ["Smith",20]

**.set (CHAINABLE)**

Thing({name:"Smith",age:20}).set({age:30,gender:"male"}) /// {name:"Smith","age":30,gender:"male"}

**.add (CHAINABLE)**

Thing({name:"Smith",age:20}).add("gender","male") /// {name:"Smith","age":20,gender:"male"}

**.containsKey **

Thing({name:"Smith",age:20}).containsKey("name") /// true

Thing({name:"Smith",age:20}).containsKey("gender") /// false

**.clone (CHAINABLE)**

var th = Thing({name:"Smith",age:20});

th.add("gender","male") /// th is {name:"Smith","age":20,gender:"male"}

th.clone().set({"name","Jack"}) /// th is still {name:"Smith","age":20,gender:"male"}

**NOTE: Thing is a wrapper object. To convert thing object to js object use the below method.**

Thing({name:"Smith",age:20}).toObject() /// JS object --> {name:"Smith",age:20}
