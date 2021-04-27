---
path: '/abstract-class'
date: '2021-02-19'
title: 'Abstract Class'
description: 'Abstract Class'
author: 'Adrian Zinko'
featured: "../../../images/howtolearn.jpg"
tags: 'java interface'
---

![features of java](../../../images/features-of-java.png)

## What is an abstract class?

An abstract class is a class that closely resembles an interface. Historically, abstract classes used to be much more powerful than interfaces. However, over time, the interfaces were enhanced with default and static methods, which contributed to the suppression of abstract classes. Abstract classes are still used, but much less frequently than before.

It's important to note that __abstract classes are inherited and interfaces are implemented__. Java allows you to inherit only one class and implement multiple interfaces, which makes interfaces more useful tools when building an application. However, as you know, everything can be overstated - it is not good practice to implement 3-4 interfaces in one class, because as you know, it is difficult to lead to a single class responsibility.

Abstract classes are classes that, like interfaces, cannot be created with the new operator. It can be explained that they are not full-fledged classes on the basis of which an object can be created. These are "incomplete" classes, defining only a certain scheme for the classes that inherit those schemas, but requiring the programmer to program all the rest in the inheriting class to make sense. Let's see what an example abstract class looks like:

```java
abstract class Person {

   /**
    * Attribute same as basic class
    */
   private String name;

   /**
    * Constructor same as basic class
    */
   public Person(String name) {
      this.name = name;
   }

   /**
    * Public method same as basic class
    */
   public String getName() {
      return this.name;
   }

   /**
    * Abstract method which requires implementation in class that
    * extends abstract class Person.
    */
   abstract void voice();
}
```

As you can see, an abstract class can have a constructor and class attributes, which allows you to create getter, while keeping the classes that will inherit it clean. However, as mentioned before, an abstract class cannot be created with the new operator. The only chance to pass a value to the constructor of the abstract class is the previously known `super ()` method called in the constructor of the class, which inherits from the abstract class. As you probably remember, the `super ()` method calls the constructor of the class we inherit from - this allows us to call the constructor of the abstract class without using the new keyword. You can observe this in the example below:

```java
abstract class Person {

   /**
    * Attribute same as basic class
    */
   private String name;

   /**
    * Constructor same as basic class
    */
   public Person(String name) {
     this.name = name;
   }

   /**
    * Public method same as basic class
    */
   public String getName() {
     return this.name;
   }

   /**
    * Abstract method which requires implementation in class that
    * extends abstract class Person.
    */
   abstract public void voice();
}

class Male extends Person {

   public Male(String name) {
      super(name);
   }

   public void voice() {
      System.out.println("Hey there!");
   }
}

class Application {

   public static void main(String args[]) {
      Male male = new Male("John");
      String name = male.getName();

      System.out.println(name);
      male.voice();
   }
}
```

To sum up, abstract classes can be briefly described as a combination of interfaces and inheritance.

## Use case

First of all, we can use an abstract class to implement basic functionality to classes that will inherit from it, but just creating its object would be too abstract and would not add much to the program.

A good use of an abstract class is also to extract the code common to each of the classes that will inherit from it, while requiring the implementation of other methods specific to the inheriting classes, just like in the interface. To visualize this, let's create an example abstract class:

```java
abstract class ComplicatedAlgorithm {

   abstract protected void firstMethodToExecute();
   abstract protected void secondMethodToExecute();

   private void thirdMethodToExecute() {
      System.out.println("This is third method to execute!");
   }

   private void fourthMethodToExecute() {
      System.out.println("This is fourth method to execute.");
   }

   public void run() {
      this.firstMethodToExecute();
      this.secondMethodToExecute();
      this.thirdMethodToExecute();
      this.fourthMethodToExecute();
   }
}
```

Two methods of the abstract class (`firstMethodToExecute ()` and `secondMethodToExecute ()`) require implementation. Otherwise, the program will not compile and we will receive an error stating that despite the obligation to implement the methods, they were not created in the class inheriting from the abstract class. The other three methods already have instructions in them. Two of them are responsible for informing about which method is being called. However, in the `run ()` method, we can see all the methods contained in the class are called, along with those methods that require their own implementation.

## Protected methods

A new term that has appeared in the code for an abstract class (this term is also available to all classes except interface) is protected - what does it mean? Well, __this is a limitation of the accessibility of the method for the inheriting class__. In other words, the abstract class tells the class that inherits from it that protected methods will be available within it and all the classes that inherit from it.

What is this operation for? It is very useful if we know the specific behavior of the created algorithm (we know what exactly follows each other), but each class inheriting from an abstract class is required to create instructions for the first two methods for efficient algorithm invocation.

This is a new term, and it's worth noting that __we can use it in any class, not just abstract classes__.

## @ Adnotation

Java has annotations that tell Java what exactly to do before executing any code. Annotations are marked with the `@` sign, followed by the name of the annotation.

`@Override`: this annotation allows us to completely change the override method according to our needs.


