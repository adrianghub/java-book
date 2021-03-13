---
path: '/interface-1'
date: '2021-02-17'
title: 'Interface'
description: 'Interface'
author: 'Adrian Zinko'
featured: "../../images/howtolearn.jpg"
tags: 'java interface'
---

![how to learn](../../images/howtolearn.jpg);

## Interface

An interface can be described as a set of requirements that we set to a class about its methods that it should contain.

For example, if we have several classes in our code, each of which should contain `sayHello ()` and `sayGoodbye ()` methods, we could use the interface to impose this requirement on individual classes. This makes the code immune to the actions of other programmers who may wish to remove these methods or implement the class without them.

Note that the interface is not a class, therefore we cannot inherit from it or use the new operator on it. In addition, the code containing the interfaces is more readable: we know in advance what methods to expect in the code, and we also agree that the class should assume some specific "shape" shared with other classes.

Of course, for now, this whole interface sounds very abstract - let's describe it using an example from everyday life. Imagine a class mapping a kitchen blender that has a socket (our interface) that accepts a variety of attachments that will perform tasks like mixing, chopping and mixing. Each of these terminals, i.e. classes that implement the socket interface (compatible with this socket), must have the same input shape so that they fit that socket (in other words, meet the interface requirements), and the individual terminals differ in the way the task is performed and effect. Thanks to the use of a socket for various tips in the blender, it becomes more multifunctional, and adding new possibilities to it is easier.

This is also the case with the interface in programming.

Moreover, the interface is also said to be the __guarantor of implementation__ - what does that mean? Well, as we mentioned earlier, any class that implements an interface has to have its methods in it. To translate this into human language, we can refer to the blender example again. The socket for the tips by itself does nothing, but it guarantees that something will happen when the tip is inserted (mixing, chopping, mixing). Likewise, the interface itself does nothing and provides no methods, but it assures us that all classes that implement it will contain the methods it specifies.

Obtaining such an __implementation guarantee__ is very helpful in everyday software development, for example when creating an application that has a selection of various geometric figures to draw in the browser.

## Using the interface for the class project

```java
interface Shape {

   void draw();

}

class Circle implements Shape {

   public void draw() {
      System.out.println("I am drawing a Circle!");
   }

}

class Rectangle implements Shape {

   public void draw() {
      System.out.println("I am drawing a Rectangle!");
   }

}

class Square implements Shape {

   public void draw() {
      System.out.println("I am drawing a Square!");
   }

}

class ShapeDrawer {

   private Shape shape;

   public ShapeDrawer(Shape shape) {
      this.shape = shape;
   }

   public void process() {
      System.out.println("Starting drawing choosen shape...");
      this.shape.draw();
      System.out.println("Shape has been drawed");
   }

}

class Application {

   public static void main(String args[]) {
      Shape circle = new Circle();
      ShapeDrawer shapeDrawer = new ShapeDrawer(circle);

      shapeDrawer.process();

   }

}
```

Let's focus on the `ShapeDrawer` class.

This class contains a constructor whose argument is the `interface`. As you might have guessed, an `interface` is a data type as well as `int`, `double`, and `String`. In the constructor, it performs a very interesting task, which we will get to in a moment - for now we will focus on the `ShapeDrawer` class.

Apart from the constructor, in the `ShapeDrawer` class there is also a class attribute of the `Shape` interface type, to which we will assign the value provided when creating a new `ShapeDrawer` object.

Inside the class there is also a `process ()` method which follows the following instructions:

1. Displays information about starting drawing,
2. Calls an interface method - `draw ()`,
3. Displays information when drawing is completed.

We create the `ShapeDrawer` object, then we pass the newly created `Circle` object in the argument of the `ShapeDrawer` constructor.

Then we call the `process ()` method, which belongs to `ShapeDrawer`.

## Interfaces in newer versions of Java

Starting from version 8, interfaces in Java have been enriched with several new functionalities that revolutionized them and gave them an even wider range of possibilities.

### Default methods

These methods have accomplished the impossible! Default methods can have a body and follow the instructions in them. The interface may force the implementation of individual methods or contain it immediately.

```java
interface Telephone {

   void callTo();

   default void callToMom() {
      System.out.println("I am calling to my mom!");
   }

}
```

The first method (`callTo ()`) requires implementation on the class side, while the second (`callToMom ()`) waits for a call only when it is needed. To visualize it, we created the following program:

```java
interface Telephone {

   void callTo(String name);

   default void callToMom() {
      System.out.println("I am calling to my mom!");
   }

}

class Mobile implements Telephone {

   public void callTo(String name) {
      System.out.println("Calling to " + name);
   }

}

class Application {
   public static void main (String[] args) throws java.lang.Exception {
      Mobile mobile = new Mobile();

      mobile.callTo("Adam");
      mobile.callToMom();
   }
}
```

### Static methods

We haven't mentioned anything about static methods before, but we've already seen a method called `main` - you must know it! Well, in Java you can also create static methods not only with that name 😉 What exactly is this static method?

A static method is a method assigned to a class, in other words, __we don't need to create an object to use it__. Unfortunately, the fact that it is easy to call and you don't have to create an object doesn't mean it's better. It has a lot of limitations and drawbacks.

```java
interface Telephone {

   void callTo(String name);

   default void callToMom() {
      System.out.println("I am calling to my mom!");
   }

   static String getMyNumber() {
      return "+48 909 901 928";
   }

}

class Application {
   public static void main (String[] args) throws java.lang.Exception {
      System.out.println(Telephone.getMyNumber());
   }
}
```
