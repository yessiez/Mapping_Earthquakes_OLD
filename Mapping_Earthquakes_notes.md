# Introduction to Module 13

## 13.0.1: Visualizing Earthquake Data

One way we can tell stories with data is through interactive maps, which is what you'll create in this module. The video explains the technical tools you'll work with and the roles they play in enhancing data visualizations.

![roadmap](https://lh3.googleusercontent.com/1-tX8HxD5plAMtICMMUrRhiFE3xzkvEdyyeYUSlg1Ovg_j21HSEebPoBqD1igHFnlb-k=s85)


## 13.0.2: Module 13 Roadmap

### Looking Ahead

In this module, you will use the `Leaflet.js` Application Programming Interface (API) to populate a geographical map with GeoJSON earthquake data from a URL. Each earthquake will be visually represented by a circle and color, where a higher magnitude will have a larger diameter and will be darker in color. In addition, each earthquake will have a popup marker that, when clicked, will show the magnitude of the earthquake and the location of the earthquake.

### What You Will Learn

By the end of this module, you will be able to: 

- Create a branch from the main branch on GitHub.
- Add, commit, and push data to a GitHub branch.
- Merge a branch with the main branch on GitHub.
- Retrieve data from a GeoJSON file.
- Make API requests to a server to host geographical maps.
- Populate geographical maps with GeoJSON data using JavaScript and the Data-Driven Documents (D3) library.
- Add multiple map layers to geographical maps using Leaflet control plugins to add user interface controls.
- Use JavaScript ES6 functions to add GeoJSON data, features, and interactivity to maps.
- Render maps on a local server.

### Planning Your Schedule

Here's a quick look at the lessons and assignments you'll cover in this module. You can use the time estimates to help pace your learning and plan your schedule.

- Introduction to Module 13 (15 minutes)
- The Earthquake Mapping Project (30 minutes)
- Create Your First Map (1 hour)
- Don't Mess with the main Branch (1 hours)
- Map Geographical Features (2 hours)
- Map GeoJSON Data (2 hours)
- Map Earthquakes (2 hours)
- Application (5 hours)

## 13.0.3: Getting Ready for Virtual Class

Let’s make sure you’re prepared to join this week’s virtual classes! You’ll have the opportunity to practice your new skills with your instructional team, as well as ask any questions that you may have regarding this module’s content.

Please be sure to download the starter files below and have them ready on your computer prior to class. You do not need to complete any of the activities prior to class, but feel free to review the material ahead of time to see some of what will be covered.

## 13.0.4: Welcome to Mapping Earthquakes

You know you'll be creating interactive maps using GeoJSON data—but how and for what purpose? The following video covers the details of the specific project you'll be working on as you explore earthquakes around the world. 

# The Earthquake Mapping Project

## 13.1.1: Create and Clone a New GitHub Repository

<em>Before you get started, Basil wants to make sure you have access to GitHub. Once you have logged in to GitHub, create a new repository and clone the repository to your computer.</em>

Create a GitHub repository for your project and name it "Mapping_Earthquakes." Make the repository public. Then add a README for the repository and clone it on your computer.

## 13.1.2: Project Overview

<em>In your first team meeting, Basil assigns Sadhana as your mentor on this project, since she has created a similar map for severe weather. When you get back to your desk, you and Sadhana will go over the basic project plan and what you'll need to do.</em>

You're all set up in your office space and have cloned the GitHub repository onto your computer. Now it's time to review the plan for your project.

### Basic Project Plan

#### Purpose

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days.

#### Tasks

To complete this project, use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

#### Approach

Your approach will be to use the JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data. You'll use the Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.

Now that you have an overview of the project plan, let's set up a Mapbox account and get the API token you'll need to create geographical maps.

## 13.2.1: The Mapbox API

<em>Before you create any maps, you'll need to create a Mapbox account and get your access token. Sadhana is going to give you access to the company Mapbox account so you can create your own API key.</em>

Mapbox provides custom maps for websites and applications such as Strava, Facebook, the Financial Times, The Weather Channel, Snapchat, and Instacart. Since October 2019, Mapbox has been generating up to 14 billion individual sensor readings daily across 100,000 map updates on connected devices.

To get started, register for a Mapbox account and get an API key.

## Create a Mapbox Account

Follow the steps below to register for a Mapbox account and generate your API key so that you can render maps on the browser. Once you create an account, copy the access token and keep it somewhere safe.

The following video walks you through the process of creating your Mapbox account and generating your API key.

Now that you have your Mapbox API key, Sadhana will walk you through how to create a branch off the main branch where you'll add the code to create a simple map.

## 13.2.2: Create a Branch on Your Repository

<em>Before you add your folders and files to the `Mapping_Earthquakes !folder, Basil would like you to create a GitHub branch for the basic map. Basil informs you that creating a branch off the main branch allows you to create a new feature, or change some part of the original code. Once he has reviewed your code on your branch, Sadhana will show you how to merge it with the main branch.</em>

Branching makes it possible to create an isolated environment when creating a new feature, or to correct an issue in the main code no matter the scope.

Creating branches off the main branch is where Git shines. A branch allows you to make changes to the main code "off to the side," like a branch on a tree. Once the code on the branch has been reviewed and approved, only then can the branch be merged into the main branch. This ensures that the main branch always contains production-quality code.

Before we create a branch and add files to the new branch, make sure your copy of the main branch on your computer is up to date with the main branch on GitHub.

It's a best practice to either "pull" from the main branch to get the latest changes to the main branch, or pull "upstream" of the branch you are creating. This is important because your version of the main branch on your computer needs to be up to date with the main branch on GitHub.

Follow these steps to create a branch:

1. Navigate to the repository folder on your computer.
2. In Terminal on macOS or Git Bash on Windows, type `git pull` or `git pull origin main` and press Enter.
3. Type git `checkout -b Simple_Leaflet_Map` and press Enter.
    - `git checkout` lets us navigate between branches.
    - `-b` indicates we are creating a new branch.
    - The name of the new branch follows `-b`.

After pressing Enter, your terminal or Git Bash should return the following:
        
`Switched to a new branch 'Simple_Leaflet_Map'`

Now we are in the Simple_Leaflet_Map branch. Confirm this by typing `git branch` and pressing Enter. 

The output in Terminal or Git Bash should look as follows, with an asterisk next to the branch name:


    * Simple_Leaflet_Map
     main

At this point, the folder structure on your computer hasn't changed. The files you had in your main branch are now in your Simple_Leaflet_Map branch. Visually, the repository should look like the following:

![A visualization shows the main files in the Simple_Leaflet_Map
branch on
GitHub.](https://lh3.googleusercontent.com/zLIX_80r1bXzrqKMrMZyhWKe2qks6pd-Mv9pnwMHMVZhVmlAiBUu89We9iHuPiCVgGco3w=s147)

Next, we'll create a folder structure and write the code to create a simple map. When we are done, Sadhana will show us how to add folders and files to the Simple_Leaflet_Map branch.

## 13.2.3: Create an HTML Page and CSS File

<em>Now that you have your API token and your branch is set up, Sadhana will let you get familiar with the documentation for using Leaflet. Then, she's suggested you jump in and create an HTML and CSS file and add links to some stylesheets in the HTML file.</em>

Let's get familiar with Leaflet. Leaflet has a few links and simple HTML code that we will add to an `index.html` page.

### The Leaflet JavaScript Library

On the [Leaflet](https://leafletjs.com/index.html) homepage, scroll midpage and click the [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) link.

The Leaflet Quick Start Guide provides steps for setting up a Leaflet map. To begin, scroll midpage to the "Preparing your page" section.

The "Preparing your page" section includes links and HTML code that we'll add to our `index.html` page. First, we'll create a folder structure for our earthquake map webpage.

### Create an HTML Page

Open your Mapping_Earthquakes repository folder in Visual Studio Code (VS Code). Create a new folder called "Simple_Map." Inside the folder, create a new `index.html` file. Next, create a template for your `index.html` file.

#### REWIND

To create a template for an `html` file, type an ! (exclamation point) and press Tab or Enter, and the empty file will be filled with the complete HTML5 boilerplate code.

In our `index.html` file, we'll change the document title and add the code from the "Preparing your page" section.

1. Change the document title in the `<title>` element in the `<head>` section (`<title>Document</title>`) to "Leaflet-Basic-Map."

2. In the `<head>` section, just below the `<title>` element, add the following Leaflet CSS script from the "Preparing your page" section:

        <!-- Leaflet CSS -->
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin=""/>

3. In the body of our index.html file, add the Leaflet JavaScript script and id tag for the map inside a `<div>` element, as shown in the "Preparing your page" section:

        <!-- Leaflet JavaScript -->
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>

The Leaflet CSS and JavaScript files we added to the `index.html` file are referred to as content delivery networks (CDNs). Using CDNs has a security risk. To avoid the security risk, it's a best practice to include an integrity value with the CDN. Each file we added has its own integrity value, which is a Base64-encoded cryptographic hash of a resource that prevents the CDN from being hacked.

**NOTE:** For more about the Subresource Integrity value, please see the documentation on the [Download Leaflet webpage](https://leafletjs.com/download.html) and [Mozilla Developers' Subresource Integrity webpage](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).

Above the Leaflet JavaScript link script, add the following `<div>` element with the id tag for the map:

    <!-- The div that holds our map -->
    <div id="mapid"></div>

1. After adding the Leaflet CSS file, JavaScript file, and the `<div>` element with theid tag for the map.

#### IMPORTANT
Make sure you copy and paste the Leaflet CSS file and JavaScript script from the website as they appear. Do not edit the script by deleting empty spaces. This will prevent that script from working on the `index.html` file, resulting in the map not being shown on the webpage.

Next, we will modify our `#mapid` to be set at a specific height using CSS code. To do this, we'll need to create a `style.css` file.

### Create a CSS File

Before we create a `style.css` file, we'll need to create a folder for the file. 
1. In VS Code, create a new subfolder called "static" in our Simple_Map folder. 
   1. In this folder, create another subfolder named "css." In the css folder, create a new file and name it `style.css`.
2. Add the following CSS code to our `style.css` file to set the style for our map on our `index.html` page and save the file:

        html,
        body,
        #mapid {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }

5. Finally, we need to tell our `index.html` page to use the `style.css` file we created.
    - In the `<head>` section of our `index.html` page, add the following CSS link script below the Leaflet CSS and before the closing </head> element:

            <!-- Our CSS -->
            <link rel="stylesheet" type="text/css" href="static/css/style.css">

Next, we'll create the code for a simple map.

## 13.2.4: Create a Simple Map

<em>Now that you have added stylesheet links to your HTML page and CSS file, Sadhana will help you add the last two files you'll need to create a simple map—the config.js file for your API token and the logic.js file for your JavaScript and Leaflet code.</em>

To create a map, we'll need to add two final pieces to our Simple_Map folder:

- The `config.js` file, which will hold our Mapbox API key.
- The `logic.js` file, which will contain all the JavaScript and Leaflet code to create the map and add data to the map.


### Add the config.js File

In our Simple_Map folder, add a new folder in the static folder called "js." In the js folder, create a new file and name it config.js. This file will hold our Mapbox API key.

#### REWIND

The `config.js` file is like the `config.py` file we used to hold the OpenWeatherMap API and Google API keys.

On the first line of the `config.js file`, add the following code:

    // API key
    const API_KEY = "";

Add your Mapbox API key between the quotations and save the file.

### Add the logic.js File

Next, in the js folder, create a new file and name it, `logic.js`. Now we'll add some boilerplate code to the `logic.js` file. Most of this code can be reused for many of the maps we'll create later on in this module.

On the first line, add the following code:

    // Add console.log to check to see if our code is working.
    console.log("working");

The `console.log()` function with the phrase "working" inside the parentheses will help us confirm that our `logic.js` file is being accessed in the console on Chrome.

### Add a Map Object

Next, we'll add the map object, as shown on the Leaflet Quick Start Guide page with some slight modifications. We'll change the geographical center of the map to the approximate geographical center of the United States.

    // Create the map object with a center and zoom level.
    let map = L.map('mapid').setView([40.7, -94.5], 4);

In the code block above:

1. We're assigning the variable map to the object `L.map()`, and we'll instantiate the object with the given string `'mapid'`.
2. The `mapid` will reference the `id` tag in our `<div>` element on the `index.html` file.
3. The `setView()` method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

An alternative to using the `setView()` method is to modify each attribute in the map object using the curly braces notation as follows:

    // Create the map object with a center and zoom level.
    let map = L.map("mapid", {
    center: [
        40.7, -94.5
    ],
    zoom: 4
    });

This method is useful when we need to add multiple tile layers, or a background image of our map(s), which we will do later in this module.

### Add a Tile Layer for Our Map

Now, we will add the map tile layer method to the `logic.js` file. The tile layer is used to load and display a tile layer on the map. We have two options to create a tile layer.

### Use the Leaflet Documentation

The [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) provides the `tileLayer()` code:

We can copy this tile layer code and assign it to the streets variable, since the tile layer will create a street-level map. Add the following code block to your `logic.js` file:

    // We create the tile layer that will be the background of our map.
    let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: API_KEY
    });
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);

Let's break down what's happening in this code block:

1. We assign the `tileLayer()` method, as shown in the Quick Start Guide's "Setting up the map" section to the variable `streets`. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
2. The following URLs appear in the parentheses of our `tileLayer()` method:
    - The API URL with a reference to the `accessToken`
    - The `OpenStreetMap` URL inside the curly braces of our `tileLayer()` method
3. We add the `maxZoom` attribute and assign it a value of 18.
4. We add the `id` attribute and assign it `mapbox/streets-v11`, which will show the streets on the map.
5. We add the `accessToken` attribute and assign it the value of our `API_KEY`.
6. Finally, we call the `addTo()` function with our map object, map on our graymap object tile layer.  
   - The `addTo()` function will add the graymap object tile layer to our let map.


To change the map's style, change the map id using the list of Mapbox ids below:

- mapbox/streets-v11
- mapbox/outdoors-v11
- mapbox/light-v10
- mapbox/dark-v10
- mapbox/satellite-v9
- mapbox/satellite-streets-v11


### Use the Mapbox Styles API

To use the Mapbox Styles API, edit the URL in the Leaflet `tilelayer()` method, as detailed on the Leaflet website:

1. First, navigate to the [Mapbox Glossary](https://docs.mapbox.com/help/glossary/).
2. Search the [Static Tiles API](https://docs.mapbox.com/help/glossary/static-tiles-api/).
3. Copy this part of the URL: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/`.
4. In your `tileLayer()` code, replace this part of the URL, `https://api.tiles.mapbox.com/v4/{id}/`, with the Mapbox Styles API URL you copied.
5. Remove the `.png` from the URL.
6. Remove the `id` attribute and the map style reference.
7. The code for the tileLayer() should look like the following:

        // We create the tile layer that will be the background of our map.
        let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            accessToken: API_KEY
        });

        // Then we add our 'graymap' tile layer to the map.
        streets.addTo(map);

    **NOTE:** If you have trouble editing the URL, copy the URL above.

8. To change your map style, click on the [Static Tiles API documentation](https://docs.mapbox.com/api/maps/static-tiles/) link on the Static Tiles API page.
9. On the left sidebar, click on the [Styles](https://docs.mapbox.com/api/maps/styles/) link
10. Below the Styles subheading, find a list of different Mapbox styles.
11. To change the map style, use the style given in the URLs (e.g., "streets-v11," "dark-v10," etc.).

**NOTE:** For the rest of this module, we'll use the Static Tiles API format in the Leaflet `tileLayer()` method.

Next, we'll add the `logic.js` and `config.js` scripts to the HTML page.

### Add JavaScript Tags to HTML Page

The last step is to allow our `index.html` file to use the `logic.js` and `config.js` scripts. To do this, open up the `index.html` file and add the following `<script>` elements below the Leaflet JavaScript link script and above the closing `</body>` element, and save the file.

    <!-- API key -->
    <script type="text/javascript" src="static/js/config.js"></script>
    <!-- Our JavaScript -->
    <script type="text/javascript" src="static/js/logic.js"></script>

### Open the Map in the Browser

Now, open the `index.html` file.

To open the `index.html` file in the browser:

1. Open the command line and navigate to your  Mapping_Earthquakes folder. 
    - The `index.html` file should be in the top-level of that folder.
2. On the command line, type `python -m http.server` and press Enter.
    - Your web browser will launch a basic open street map of North America.

Congratulations on creating your first map using Leaflet and the Mapbox API!

**NOTE:**
For more information, see the [Leaflet documentation on methods using the map object and tile layer](https://leafletjs.com/reference-1.6.0.html#map-example). 

# Create Your First Map



# Don't Mess with the Main Branch



# Map Geographical Features



# Map GeoJSON Data



# Map Earthquakes



# Application
