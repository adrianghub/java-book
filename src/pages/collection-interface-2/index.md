---
path: '/collection-interface-2'
date: '2021-02-14'
title: 'Collection Interface Part 2 - ArrayList'
description: 'Collection Interface'
author: 'Adrian Zinko'
featured: "../../images/howtolearn.jpg"
tags: 'java collection arraylist linkedlist'
---

![how to learn](../../images/howtolearn.jpg)

## ArrayList

How are list collections organized? In java.util we can find several different implementations of this type of collection. The most important (most commonly used) and simplest type of collection is an array type list.

A class that implements the List interface in an array-like manner is called ArrayList. We've covered boards before, so you more or less remember how they're organized. As a reminder - arrays contain elements in subsequent "cells", and access to the contents of these cells is obtained through the index (number) of a given cell.

## Creating an ArrayList

Now imagine that you could create this type of collection in Java. How to do it? Create a new ArrayList object (this class is available in the java.util library, so you do not have to write it yourself), and then use the add (Object o) method to add more items to the collection. The code that creates such a collection looks like this:

```java
import java.util.*;
import java.lang.*;
import java.io.*;

class ArrayListTest
{
	public static void main (String[] args) throws java.lang.Exception
	{
		ArrayList<String> library = new ArrayList<String>(); // [1]
		
    	library.add("50 Shades of Grey");
		library.add("Sherlock Holmes");
		library.add("The Last of the Mohicans");
		library.add("The Infinity");
		library.add("Better Call Saul");
		library.add("Journey to the Center of the Earth");
		library.add("Binary Death");
		library.add("Breaking Bad");
		library.add("Twenty Thousand Leagues Under the Sea");
		library.add("The Titanfall");
		library.add("Coma");
		library.add("Of Ants and Men");
		library.add("To Understand a Woman");
		library.add("Neverending Story");
		library.add("The Jungle Book");
		
		System.out.println(library.size()); // [17]
	}
}
```

The line [1] in which the ArrayList collection is created is sure to catch your eye:

```
ArrayList<String> library = new ArrayList<>();
```

Immediately after the class name `(ArrayList)`, `<String>` appears on that line. This way we tell the Java compiler what type the objects making up the list will be. In this case, these will be strings, i.e. String. As you can see, we create collections in the same way as objects :)

Of course, they can be any object type. If we want to store more complex data structures in the collection (eg Title + Author + Publication year), it is best to define a separate Book class with title, author and year attributes and store Book objects within the collection.

__We cannot mix different types in a collection - all items in a collection must be of the same type.__

This strange notation (i.e. `<String>` after the class name) is necessary because the ArrayList class uses the so-called generic types. You will learn more about generic types in later modules - for now, just remember that in the case of a collection, after the class name (or the interface name), you should specify the types of objects that will be stored in the collection in angle brackets.

__The objects stored in the collection must be object types - they cannot be primitive types such as int, boolean, and the like. Instead, use the corresponding object types, ie the wrappers: Integer, Boolean, etc. The exception here is the String type, which is always an object type and does not exist as a base type.__

The program we have just discussed is divided into three functional parts:

- creating an ArrayList collection (line [1]),
- filling the collection with data using the add (Object o) method,
- checking if the collection contains the data entered into it by displaying its current size using the size() method (line [17]).

Following script: 

`ArrayList<String> library = new ArrayList<>();`

is often replaced by such a notation:

`List<String> library = new ArrayList<>();`

where the variable's type is `List`, not `ArrayList`. As you remember, `List` is an interface. If the type of the variable is interface, it means that you can assign to it an object of any class that implements that interface. The latter writing method is better and more often used in real programming.

## Retreving data stored in a collection of the ArrayList type

How can we operate on the data stored in the collection? First, let's think about reading the data. As mentioned earlier, we can refer to collection objects using the `get (int index)` method, giving the number (index) of the collection element as an argument.

Let's modify the program so that after filling the collection, all its contents will be displayed in the console.

We'll use a for loop for this. With this loop we will go through all the elements of the collection and display each of them. We will use the fact that we know the size of the collection - the `size ()` method tells us about it. We'll use it in the loop condition to see if we've reached the end of the collection while rendering. Take a look at the code below:

```java
import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class ArrayListAndForLoop {

   public static void main (String[] args) throws java.lang.Exception {
      List<String> library = new ArrayList<>();

      library.add("50 Shades of Grey");
      library.add("Sherlock Holmes");
      library.add("The Last of the Mohicans");
      library.add("The Infinity");
      library.add("Better Call Saul");
      library.add("Journey to the Center of the Earth");
      library.add("Binary Death");
      library.add("Breaking Bad");
      library.add("Twenty Thousand Leagues Under the Sea");
      library.add("The Titanfall");
      library.add("Coma");
      library.add("Of Ants and Men");
      library.add("To Understand a Woman");
      library.add("Neverending Story");
      library.add("The Jungle Book");

      for (int n=0; n < library.size(); n++) {
         System.out.println("Element " + n + " of the library is: " + library.get(n));
      }
   }
}
```

Since all collections implement the `Iterable` interface, as mentioned earlier, we can also use a for-each loop which does not require us to reference the loop control variable. It is just called for each object in the collection. You can observe this solution in the following program:

```java
import java.util.*;
import java.lang.*;
import java.io.*;

class Ideone
{
	public static void main (String[] args) throws java.lang.Exception
	{
		ArrayList<String> library = new ArrayList<String>();

    	library.add("50 Shades of Grey");
		library.add("Sherlock Holmes");
		library.add("The Last of the Mohicans");
		library.add("The Infinity");
		library.add("Better Call Saul");
		library.add("Journey to the Center of the Earth");
		library.add("Binary Death");
		library.add("Breaking Bad");
		library.add("Twenty Thousand Leagues Under the Sea");
		library.add("The Titanfall");
		library.add("Coma");
		library.add("Of Ants and Men");
		library.add("To Understand a Woman");
		library.add("Neverending Story");
		library.add("The Jungle Book");
		
		for(String book: library) {
			System.out.println("Element of the library is: " + book);
		}
	}
}
```

In the example above, let's recall how the __for-each__ loop works. In each loop, another element from the library collection is inserted into the variable book of the String type. We then use the variable book to display the title of the book item in the library on the console screen. Note that we do not have an explicit item index number here.

## Removing data from the ArrayList collection

To remove an item from a collection, use the `remove (int index)` method. The argument of this method is the index number of the object to be deleted.

## Collection reorganization after item has been deleted

How is the array in which the collection internally stores data is reorganized? When it comes to removing the last element, the matter is simple: the size of the array is simply reduced by one.

The more complicated situation is when you want to delete an item in the middle of a collection or at the beginning of it. If we delete an object with index n, then all objects in the collection in further positions __(n + 1, n + 2, ...)__ must be moved up one place in the internal collection array __(n + 1 in place n, n + 2 for n + 1, ...)__. After the elements are moved, the size of the array is reduced by one.

## Adding data to the collection

A similar situation occurs when adding items to a collection. When we add a new item to the end of a collection (array), the time it takes to do so is negligible.

However, if we would like to add an element at the position marked with index zero (i.e. at the beginning of the internal collection table) or somewhere in the middle of the collection, then the execution of adding the object will be much longer, because this operation will consist in creating a new array, filling in the element with index zero, and then copying the entire existing table.

The `add (Object o)` method, apart from the form presented earlier, also has a second form - a two-parameter `add (int index, Object o)`. In the first parameter, we can specify the index number on which the object in the collection should be placed. For example, it might look like this:

```java
library.add(0, "Metro 2020");
```

Following this instruction, the __"Metro 2020"__ object will be added to the collection at the very beginning of the collection (at the position with index 0).

## Summarize ArrayList

When is it worth using an `ArrayList` collection? It is definitely the most convenient for small data sets. It is also very simple - it works practically like the arrays you already know.

However, it is not recommended when you want to insert or remove items from the middle or the beginning of a large collection, as these operations will take a long time. In this situation, a `LinkedList` list collection will be better suited.

