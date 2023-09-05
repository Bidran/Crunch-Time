# Crunch Time!

"Crunch Time!" is a website hosting a clicker game in which your goal is to gain as much points as possible in given time using clicks and power-ups. 

View the live site: [Chalk Climbing Centre](https://bidran.github.io/Crunch-Time/)

![Amiresponsive image of Crunch Time!]()

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)
  * [W3C Validator](#w3c-validator)
  * [Lighthouse](#lighthouse)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)
  * [Functional testing](#functional-testing)

* [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)



## User Experience (UX)

### Initial Discussion
"Crunch Time!" is a clicker game with power-ups.

#### Key information for the site

* What is "Crunch Time!".
* What are the controls.
* The main game.
* The final score.

### User Stories

#### Client Goals

* To be able to view the site on a range of device sizes.
* To make it easy for everyone to find out how to play.
* To have fun.

#### First Time Visitor Goals

* I want to find out what is "Crunch Time!".
* I want to be able to navigate the site easily to find information.
* I want to be able to know the controls.

#### Returning Visitor Goals

* I want to play the game again.
* I want to refresh my memory on rules.
* I want to be able to beat my high-score.

#### Frequent Visitor Goals

* I want to be able to try beating my high-score.


## Design

### Typography

Font family VT323 was used with monospace functioning as a backup font.

### Imagery

Images used were from stock images websites Shutterstock, ArtStation and Pixilart. They have been credited in the [credits](#Credits) section.

### Wireframes

Wireframes created for desktop and mobile showing the original idea behind the project.

#### Introduction

<img src="" alt= “” width="value" height="500px">

<img src="" alt= “” width="value" height="500px">

#### Game

<img src="" alt= “” width="value" height="500px">

<img src="" alt= “” width="value" height="500px">

#### Score

<img src="" alt= “” width="value" height="500px">

<img src="" alt= “” width="value" height="500px">


### Features

The website is comprised of three pages. Introduction page, game page & 404 page.

### General features on each page


#### Intro Page.
  * Intro Section.

    * An introduction on what "Crunch Time!" is.
    * Gives basic info about the game such as time, controls and power-ups.

        <img src="">

 * Start button.
    
    * A button.
    * This allows the user to start the game, leading to another page.

        <img src="">

#### Game page.

 * Header section.
    * Consists of "Clicks" and "Time". 
    * Allows the user to know how many clicks they have and how much time they have left.

        <img src="">
        <img src="">
      
 * Keyboard section.
    * Contains an image of a keyboard. 
    * Allows user to click the keyboard to gain points. 

        <img src="">

  * Power-Ups section.

    * Contains an three buttons with different attributes.
    * This section gives the users the option to spend their earned points on upgrades (Auto-Click, x2 Clicks & x4 Clicks).

    <img src="">

* End screen section.

    * Contains an final score and a retry button.
    * This section gives the users the option to view their final score and to reset the game to try again.

    <img src="">


#### 404 page.
  * 404 section.

    * Contains text with a button to lead to the home page.
    * This section provides users with the opportunity to go back to the home page with a click of a button if their page returns 404 error.
      
      <img src="">


### Accessibility
[Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

Manual tests were also performed to ensure the website was accessible as possible and an accessibility issue was identified.

Issue #1: Wave showed contrast error for power-ups text.

Fix: Switched to black color text with a white text shadow for better accessibility.



## Technologies Used

* [Visual Studio Code](https://code.visualstudio.com) - To code the website.

* [Balsamiq](https://balsamiq.com/wireframes/) - Used to create wireframes.

* [Git](https://git-scm.com) - For version control.

* [Github](https://github.com) - To save and store the files for the website.

* [Font Awesome](https://fontawesome.com) - For the iconography on the website.

* [Google Dev Tools](https://developer.chrome.com/docs/devtools/) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [ChatGPT](https://chat.openai.com) - To create some of content specific text.

* [11zon](https://www.11zon.com/) - To compress images.

* [Shutterstock](https://www.shutterstock.com/) - To acquire royalty free images.

* [Pexels](https://www.pexels.com/) - To acquire royalty free images.

* [Favicon.io](https://favicon.io/) - To create favicon.

* [Am I Responsive?](http://ami.responsivedesign.is/) - To show the website image on a range of devices.

* [Pixlr](https://pixlr.com/) - To edit the images to fit the theme of the website.


### Languages Used

* The structure of the website was developed using HTML as the main language.

* The website was styled using CSS.


## Deployment & Local Development

### Deployment

The site was created using the Visual Studio code editor and pushed to github to the remote repository ‘Crunch-Time’.

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, Crunch-Time.
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork

To fork the Crunch-Time repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, bidran/Crunch-Time.
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Crunch-Time repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, bidran/Crunch-Time.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.


## Testing

### W3C Validator
* HTML
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

![Introduction HTML Validator Results]()

![Game HTML Validator Results]()

![404 HTML Validator Results]()

* CSS
    * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)
      
        <p>
        <a href="https://jigsaw.w3.org/css-validator/check/referer">
          <img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue"alt="Valid CSS!" />
        </a>
        </p>
![CSS Validator Results]()
    

### Lighthouse

<details>
<summary>Desktop lighthouse testing</summary>
<br>
<img src="./assets/docs/testing/lighthouse/lighthousehomedesktop.PNG" alt= “Lighthouse home desktop” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthouseaboutdesktop.PNG" alt= “Lighthouse about desktop” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthouseinductiondesktop.PNG" alt= “Lighthouse induction desktop” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthousemembershipdesktop.PNG" alt= “Lighthouse membership desktop” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthousenewsdesktop.PNG" alt= “Lighthouse news desktop” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthouse404desktop.PNG" alt= “Lighthouse 404 desktop” >
</details>

<details>
<summary>Mobile lighthouse testing</summary>
<br>
<img src="./assets/docs/testing/lighthouse/lighthousehomemobile.PNG" alt= “Lighthouse home mobile” >
<br> 
<img src="./assets/docs/testing/lighthouse/lighthouseaboutmobile.PNG" alt= “Lighthouse about mobile” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthouseinductionmobile.PNG" alt= “Lighthouse induction mobile” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthousemembershipmobile.PNG" alt= “Lighthouse membership mobile” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthousenewsmobile.PNG" alt= “Lighthouse news mobile” >
<br>
<img src="./assets/docs/testing/lighthouse/lighthouse404mobile.PNG" alt= “Lighthouse news mobile” >
</details>

### Solved Bugs

 



### Known Bugs

No bugs were found by when testing the final version of the website.

### Functional Testing

Functional testing was made troughout the development on various browsers (Opera, Chrome & Firefox) and devices (PC & Samsung A23 5G)





---------



## Credits


### Content

Parts of the website were inspired by [Brooklyn Boulders](https://brooklynboulders.com)

### Media
A variety of stock images from [Pexels](https://www.pexels.com/) & [Shutterstock](https://www.shutterstock.com/) were used for this project.

* Introduction
    * [Keyboard by Symuhn](https://www.pixilart.com/art/rfp-gaming-keyboard-588fd42e13fb9f2?)
    * [Button icons by Nela Gluhak ](https://www.artstation.com/artwork/qQP2vL)

* Game page
    * [Background image by Symuhn](https://www.pixilart.com/art/rfp-gaming-keyboard-588fd42e13fb9f2?)
    * [Keyboard by Symuhn](https://www.pixilart.com/art/rfp-gaming-keyboard-588fd42e13fb9f2?)

    * [Button icons by VectorPixelStar ](https://www.shutterstock.com/image-vector/automation-icons-set-robotics-logo-mechanical-778219618)

    
   


### Acknowledgments

I would like to thank following people for helping me with my first project:
    
* [Gareth McGirr](https://github.com/Gareth-McGirr/) - My mentor, for helping me troughout this project with his advice
