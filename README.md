thing
=====

Extreme lightweight object plugin without dependencies.

-----

At each plugin, there are object helper methods that are frequently used. The aim of this plugin is to decrease the time required for code rewriting while starting to a new plugin by providing some basic object utilities.

This plugin does not intend to be used by directly in the projects. For these cases, underscore or lazy.js like plugins can be used. 

Here are some basic examples,

**Thing.isArray**

<code>Thing.isArray([2,4,5])</code> */// True*  
<code>Thing.isArray("Smith")</code> */// False*

**Thing.allTrue**

<code>Thing.allTrue([undefined,true])</code> */// False*
<code>Thing.allTrue([true,true,true])</code> */// True*

**Thing.contains**

<code>Thing.contains([2,4,5],2)</code> */// True*
<code>Thing.contains([2,4,5],3)</code> */// False*

**.loop (CHAINABLE)**

<code>Thing({name:"Smith",age:20}).loop(function(key,val){
console.log(key,val);
});</code>

**.keys**

<code>Thing({name:"Smith",age:20}).keys()</code> */// ["name","age"]*

**.values**

<code>Thing({name:"Smith",age:20}).values()</code> */// ["Smith",20]*

**.get**

<code>Thing({name:"Smith",age:20}).get("name")</code> */// ["Smith"]*

<code>Thing({name:"Smith",age:20}).get(["name","age"])</code> */// ["Smith",20]*

**.set (CHAINABLE)**

<code>Thing({name:"Smith",age:20}).set({age:30,gender:"male"})</code> */// {name:"Smith","age":30,gender:"male"}*

**.add (CHAINABLE)**

<code>Thing({name:"Smith",age:20}).add("gender","male")</code> /// *{name:"Smith","age":20,gender:"male"}*

**.containsKey**

<code>Thing({name:"Smith",age:20}).containsKey("name")</code> */// true*

<code>Thing({name:"Smith",age:20}).containsKey("gender")</code> */// false*

**.clone (CHAINABLE)**
<pre>
<code>
var th = Thing({name:"Smith",age:20});

th.add("gender","male") /// th is {name:"Smith","age":20,gender:"male"}

th.clone().set({"name","Jack"}) /// th is still {name:"Smith","age":20,gender:"male"}
</code>
</pre>

**NOTE: Thing is a wrapper object. To convert thing object to js object use the below method.**

<code>Thing({name:"Smith",age:20}).toObject()</code> */// JS object --> {name:"Smith",age:20}*
