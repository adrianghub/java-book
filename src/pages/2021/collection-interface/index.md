---
path: '/collection-interface'
date: '2021-02-12'
title: 'Collection Interface Part 1'
description: 'Collection Interface'
author: 'Adrian Zinko'
featured: "../../../images/howtolearn.jpg"
tags: 'java collection'
---

![how to learn](../../../images/howtolearn.jpg)

## Collection in real-life examples

Let's consider what it is like in the real world - a collection can be, for example, a collection of paintings, a collection of stamps or a collection of tickets. Generally, we can say that a collection is a collection of collected items (objects), in which we have the ability to view individual items, we also have the ability to add new items to the collection and remove items from the collection. It is also important that we store objects of the same type within the collection - for example, a binder with postage stamps stores only stamps, a package with drugs only drugs, and so on.

In programming, it is similar - a collection is a set of objects on which we can perform operations: adding an object to a collection, removing objects from a collection, and viewing objects included in the collection. Collections can be ordered (e.g., alphabetically) or disordered.

## Types of Collections

Collections can be organized in a variety of ways. The simplest type of collection is a list, which roughly corresponds to postage stamps arranged sequentially according to price in a cluster (ordered collection).

Another type of collection is a set, which corresponds to postage stamps placed loosely in a box (unordered collection), and yet another type is a map.

A map is a collection of key-value or key-value elements. How to understand? Imagine a library with books. Each book is assigned a library signature number, i.e. a unique book identifier. In programming, we call such an identifier a key.

If we look at a library with books, it is a collection of the map type, because it unambiguously maps (maps) book identifiers (keys) to the books themselves (i.e. objects or, in other words - values). In such a collection we can search both by key and by object (value). You will learn more about maps later in the module.

## Popular libraries


The standard Java libraries include (the most frequently used):

`java.io` - a library used to perform tasks related to data exchange, inter alia, by reading and writing to a file (io - abbreviation for Input / Output, input / output),
`java.net` - a library for communicating via the Internet,
`java.lang` - basic Java library. This library does not have to be imported into written classes - it is included by default by the Java compiler to each class,
`java.util` - library containing a set of tools for manipulating on collections, dates and calendars.
The full list of libraries included in Java 14 SE is available in the Java documentation at this [link](https://docs.oracle.com/en/java/javase/14/).

The list of interfaces and classes provided by individual libraries is also available in the Java documentation at the location indicated above. For example, a full description of the `java.util` library content can be found at this [link](https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/util/package-summary.html).

Of course, you don't have to memorize it - a programmer most often works with the documentation at hand and looks at it often when he needs something. However, it is worth knowing the basic elements of libraries, if only to know that they are in these libraries and to know in which part of the documentation to look for details.

Tools for manipulating collections are contained in the `java.util` library.
## java.util library

In the `java.util` library there are interfaces for handling collections. The most important of them are:

- interface `Collection` - the basic interface for a collection,
- interface `List` - interface for collections implemented as lists (inherits from the `Collection` interface),
- interface `Map` - interface for collections realized as maps.
As you already know, an interface is just a "contract" definition, that is, it defines what methods can be called in classes that implement the interface.

The `java.util` package also includes a collection of classes for collections that implement the `List` and `Map` interfaces mentioned above. What exactly are these classes, you will find out in a moment.

The above-mentioned interfaces are of course not all the collection mechanisms that can be found in the `java.util` library. However, the knowledge of the above is crucial, and the others are their various modifications, mutations and extensions.

## Attaching the library

```java
import java.util;
```
