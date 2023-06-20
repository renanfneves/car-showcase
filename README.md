<h1 align="center">
    <img alt="Car Showcase" title="#CarShowcase" src="./public/banner.png" />
</h1>

<div id="about" />

# Car Showcase

<p>
This is a landing page written to search for cars in catalog hub.
The idea of this project was to test and practice NextJs 13 features like async components, also responsive layouts.
I have used two apis in background to generate the data and content. Which are <strong>IMAGIN.studio</strong> and <strong>RapidApi</strong>.
You can find the deployed version <a href="https://car-showcase-rust.vercel.app">here</a>
</p>

## Content Table
<!--ts-->
   * [About](#about)
   * [Usage](#usage)
      * [Prerequisites](#prerequisites)
      * [Local files](#local-files)
      * [Commands](#commands)
   * [Features](#features)
   * [Technologies](#technologies)
<!--te-->

## Usage
<p id="usage">To run the project you need to follow the steps below:</p>

### Prerequisites
<ul style="list-style-type: none;" id="prerequisites">
  <li>Node v18 or higher</li>
  <li>IMAGIN.studio Api Key</li>
  <li>RapidAPI key</li>
</ul>

### Local Files
<ul style="list-style-type: none;" id="local-files">
  <li>NEXT_PUBLIC_IMAGIN_API_KEY (IMAGIN.studio)</li>
  <li>NEXT_PUBLIC_IMAGIN_HOST (IMAGIN.studio)</li>
  <li>RAPID_API_KEY (RapidApi)</li>
  <li>RAPID_API_HOST (RapidApi)</li>
</ul>

### Commands
<ul style="list-style-type: none;" id="local-files">
  <li>npm install</li>
  <li>npm run dev</li>
</ul>

## Features
<ul style="list-style-type: none;" id="features">
  <li>
    <h3>Home</h3>
    <img style="width: 100%; height: auto; object-fit: cover;" alt="Cars" title="Cars" src="./public/list.png" />
  </li>
  <li>
    <h3>Car Details</h3>
     <img style="width: 100%; height: auto; object-fit: cover;" alt="Details" title="Details" src="./public/details.png" />
  </li>
   <li>
      <h3>Mobile Version</h3>
      <div style="display: flex; justify-content: space-between; width: 100%; height: 400px;">
        <img style="width: 30%; height: 100%; object-fit: cover;" alt="Mobile Hero" title="Mobile Hero" src="./public/mobile-hero.png" />
        <img style="width: 30%; height: 100%; object-fit: cover;" alt="Mobile Catalog" title="Mobile Catalog" src="./public/mobile-catalog.png" />
        <img style="width: 30%; height: 100%; object-fit: cover;" alt="Mobile Details" title="Mobile Details" src="./public/mobile-details.png" />
      </div>
  </li>
</div>
</ul>

## Technologies
<ul style="list-style-type: none;" id="features">
  <li>React 18</li>
  <li>Next.js 13.4</li>
  <li>Typescript</li>
  <li>TailwindCSS</li>
  <li>Vercel</li>
</ul>
