---
path: '/introduction-to-gradle'
date: '2021-03-10'
title: 'Introduction to Gradle'
description: 'Introduction to Gradle'
author: 'Adrian Zinko'
featured: "../../../images/howtolearn.jpg"
tags: 'java gradle dependency test'
---

![features of java](../../../images/features-of-java.png)

## What is Gradle?

Trying to describe __Gradle__ in one sentence, I would say that Gradle is a project-building tool. It allows you to automate this process. It uses a so-called domain language - __DSL (Domain Specific Language)__, which makes it easier to perform standard project-building tasks.

If so far you have dealt only with small projects that you have worked on yourself, you probably did not feel the need to use this type of tools. However, for larger projects, a tool that allows you to automate this process is very helpful.

## Other kinds of project-building tools

Of course, __Gradle__ is not the only tool to help you build projects. A few others should be mentioned here, such as [Ant](http://ant.apache.org/), [Maven](https://maven.apache.org/), [Ivy](http://ant.apache.org/ivy/), [Make](https://www.gnu.org/software/make/) or [Buildr](https://buildr.apache.org/). Of course, this is not a complete list.

Additionally, the problem of building a project occurs in every programming language, so similar tools exist for other languages as well.

## Installing Gradle

__Gradle__ itself is a program, in order for you to use it you have to install it on your computer. You can download the latest version of Gradle from [this](https://gradle.org/install/) page. Then unpack the downloaded file, set the `GRADLE_HOME` environment variable, which will point to the directory where you unpacked the previously downloaded package.

Next, modify the `path` (linux / macos) or path (windows) variable to include the bin directory inside the previously set `GRADLE_HOME`.

After this set of settings and restarting the terminal, you should be able to invoke `gradle --version`, which will print your Gradle version to the console.

## How Gradle can help

As mentioned earlier, __Gradle__ is used to build projects. Building projects is actually a whole bunch of small activities. Starting with the most basic, such as compiling the source code or creating a file with compiled classes, for example a __JAR file (Java Archive) 2__.

However, this is not all, it would be a good idea to run all the tests to validate the code before creating the JAR file. __Gradle__ can help you with this too. __Gradle__ will also help you manage project dependencies.

### Dependency management
Larger projects are based on external libraries. Examples of such external libraries include __Hibernate__, __Spring__, and __Guava__.

External libraries are available as compiled classes packed in JAR files. They can be downloaded from so-called repositories. One of the most used repositories is the __Maven Central Repository__.

Just as your project may depend on other libraries, so may these libraries, they may also have dependencies. In other words, your project can have so-called indirect / transitive dependencies. If your project requires a lot of additional libraries, managing all dependencies (direct and indirect) is not such an easy task.

__Gradle__ takes the dependencies you point to (the way you want it), taking care of indirect dependencies as well.

### Conventions
When programming in Java (and not only), it is good to follow certain accepted conventions that can be found in many projects. This approach helps in working on various projects, introduces a kind of order. __Gradle__ also uses such conventions, below I will describe two of them, the directory structure in the project and how to identify the project. They will help you understand the DSL basics that will come in the following paragraphs.

### Project structure
With simple projects, there is no need to use a special structure for the project. However, with the more advanced ones, a certain convention makes it easier to understand what is happening in a given project. Where to find test files, where the source code files can be, where the __JAR file__ that was created after building the project can be located. All this can be achieved thanks to a certain convention that is commonly used in the world of Java projects.

### Unique identification of the project
Before __Gradle__, developers used __Maven__ to build the project. Along with the __Maven__ used on a larger scale, some standard nomenclature has spread, which allows to uniquely identify the project. There are three for this:

- groupId,
- artifactId,
- version.

__Gradle__ also uses the three, but under slightly different names are group, name, and version respectively.

__group__ is the first identifier. The convention assumes that it will start with the inverted domain, just like package in classes. Additional members can be added to the reverse domain that more accurately specify the "group" of the project. In the case of a tutorial, it can be the programmer's tutorial or the programmer's tutorial.kursjava.

__name__ is the second identifier, it is part of the final JAR name with compiled classes. For a project with examples for the Java Tutorial, name can be examples or code-samples.

__version__ specifies the version of the project. The standard version is defined by three numbers separated by periods, for example 1.0.0 or 5.0.12. Additionally, if it is a development version, you can add -SNAPSHOT to get 1.0.0-SNAPSHOT.

Finally, the __name__ of the compiled class JAR will consist of name and version separated by a minus, for example `code-samples-1.0.0-SNAPSHOT.jar` or `examples-5.0.12.jar.`