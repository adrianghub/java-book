---
path: '/collection-interface'
date: '2021-02-10'
title: 'Collection Interface'
author: 'Adrian Zinko'
featured: "../../images/howtolearn.jpg"
---

![how to learn](../../images/howtolearn.jpg)

## Collection in real-life examples

Let's consider what it is like in the real world - a collection can be, for example, a collection of paintings, a collection of stamps or a collection of tickets. Generally, we can say that a collection is a collection of collected items (objects), in which we have the ability to view individual items, we also have the ability to add new items to the collection and remove items from the collection. It is also important that we store objects of the same type within the collection - for example, a binder with postage stamps stores only stamps, a package with drugs only drugs, and so on.

In programming, it is similar - a collection is a set of objects on which we can perform operations: adding an object to a collection, removing objects from a collection, and viewing objects included in the collection. Collections can be ordered (e.g., alphabetically) or disordered.

## Console log?

```java
import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class IterableTest
{
	public static void main (String[] args) throws java.lang.Exception
	{
		//Creating ArrayList, which implements the Iterable interface and fill it
		ArrayList<String> theList = new ArrayList<String>();
		theList.add("object 1");
		theList.add("object 2");
		theList.add("object 3");
		theList.add("object 4");
		theList.add("object 5");
		//Displaying the list using Iterable interface and for-each loop
		for(String theObject: theList){
			System.out.println(theObject);
		}
	}
}
```