---
path: '/iterator-interface'
date: '2021-02-22'
title: 'Iterator Interface'
description: 'Iterator Interface'
author: 'Adrian Zinko'
featured: "../../images/howtolearn.jpg"
tags: 'java collection interface iterable while for-each'
---

![how to learn](../../images/howtolearn.jpg)

## Iterator Interface

Each collection implements the `Iterable` interface, so we can use it in for-each loops. We will take a closer look at this issue.

The `Iterable` interface imposes that any class that implements it exposes a class that implements the `Iterator` interface. For example, the `ArrayList` class has a method called `iterator ()` that returns an object that implements the `Iterator` interface.

## What is an iterator?

The easiest way to imagine a collection __iterator__ is as a cursor in an editor on a text document. Initially, when the document is opened, the cursor is positioned in front of the first character of the text. Imagine the cursor can execute two commands:

- answer the question whether there is any sign on the right side of it or whether it has already reached the end of the text,
- take the character to the right of the cursor and move one place to the right.
We can imagine that with these two commands, we are able to move the cursor through the entire text. Each time we check if there is any character left to the right of the cursor. If so, we read this character and move the cursor one place to the right.

This is exactly how the `Iterator` interface works - of course, it does not operate on text, but on objects contained in the collection. The `Iterator` interface actually has several methods, but two of them are the most important:

- `boolean hasNext ()` - returns true when the collection contains more elements to be read,
- `E next ()` - takes the value of the next object of type __E__ from the collection and moves the __iterator__ "cursor" one place to the right.

Following snippet shows example of the __iterator__:

```java

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class ExternalIteratorDemo 
{
  public static void main(String[] args) 
  {
	List<String> names = new LinkedList<>();
	names.add("Agata");
	names.add("Grzegorz");
	names.add("Zbigniew");
	
	// Getting Iterator
	Iterator<String> namesIterator = names.iterator();
		
	// Traversing elements
	while(namesIterator.hasNext()){
		System.out.println(namesIterator.next());			
	}	
	
  }
}
```

The same operation with __for-each__ loop:

```java
import java.util.LinkedList;
import java.util.List;

public class InternalIteratorDemo 
{
  public static void main(String[] args) 
  {
	List<String> names = new LinkedList<>();
	names.add("Agata");
	names.add("Grzegorz");
	names.add("Zbigniew");
		
	for(String name: names){
		System.out.println(name);			
	}	
	
  }
}
```

The __for-each__ loop uses this mechanism internally for collections that implement the `Iterable` interface, and thus the `Iterator` interface.

## Example with the use of while loop

```java
/* Class Employee represents an employee in the company */
class Employee {

   String firstName;
   String lastName;
   LocalDate birthDate;

   // Constructor
   public Employee(String firstName, String lastName, int yearOfBirth,
               int monthOfBirth, int dayOfBirth) {
      this.firstName = firstName;
      this.lastName = lastName;
      // Class LocalDate provided by java.time library is used
      // to store dates. Constructor of(int year, int month, int day) could be
      // used to initialize LocalDate variable value
      this.birthDate = LocalDate.of(yearOfBirth, monthOfBirth, dayOfBirth);
   }

   @Override
   public int hashCode() {
      // methods getYear() and getMonthValue() of LocalDate class could be used
      // to retrieve a year and month of stored date
      return birthDate.getYear() * 100 + birthDate.getMonthValue();
   }

   @Override
   public boolean equals(Object o) {
      Employee e = (Employee) o;
      return (firstName.equals(e.getFirstName())) &&
         (lastName.equals(e.getLastName())) &&
         (birthDate.getYear() == e.getBirthDate().getYear()) &&
         (birthDate.getMonthValue() == e.getBirthDate().getMonthValue()) &&
         (birthDate.getDayOfMonth() == e.getBirthDate().getDayOfMonth());
   }

   @Override
   public String toString() {
      return firstName + ", " + lastName + ", born: " + birthDate;
   }

   // getters
   public String getFirstName() {
      return firstName;
   }

   public String getLastName() {
      return lastName;
   }

   public LocalDate getBirthDate() {
      return birthDate;
   }
}

/* Name of the class has to be "Main" only if the class is public. */
class HashSetExample {

   public static void main (String[] args) throws java.lang.Exception {
      // Creating 5 example Employee objects
      Employee worker1 = new Employee("Steven", "Newmack", 1987, 6, 30);
      Employee worker2 = new Employee("Jennifer", "Nowak", 1988, 2, 28);
      Employee worker3 = new Employee("Robert", "Greenfield", 1987, 6, 15);
      Employee worker4 = new Employee("Monica", "Smith", 1984, 10, 18);
      Employee worker5 = new Employee("Stephanie", "Jackson", 1985, 4, 3);

      // Creating a HashSet and filling it with objects
      Set<Employee> workersSet = new HashSet<>();
      workersSet.add(worker1);
      workersSet.add(worker2);
      workersSet.add(worker3);
      workersSet.add(worker4);
      workersSet.add(worker5);

      // Print out every worker from the set using while loop
      Iterator<Employee> iteratorWorkersSet = workersSet.iterator();
      while (iteratorWorkersSet.hasNext()) { 

         Employee currentWorker = iteratorWorkersSet.next();

         System.out.println(currentWorker);
      }
      System.out.println("Loop has finished its work");
   }
}
```

The __while__ loop executes as long as the loop condition returns `true`. The __while__ loop has many uses - it is used almost as often as the __for__ loop. Its typical use (apart from iterating through collection objects) is waiting for an event to occur.
