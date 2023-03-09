FILES
- index.html holds the entire content
- css/styles.css custom css styling
- js/scripts.js custom js code with settings for sliders, filterable grid and more
- images folder contains all the images


PLUGINS
- Bootstrap https://getbootstrap.com/
- Isotope https://isotope.metafizzy.co/
- Purecounter https://www.cssscript.com/scroll-triggered-counter/
- ReplaceMe: https://adrianklimek.github.io/replaceme/
- Swiper https://swiperjs.com/
- Font Awesome for icons https://fontawesome.com/


IMAGES
All images are included in the download package and can be reused in your projects. The ones mentioned below come for outside resources. The ones not mentioned come from inside resources. Either way you can use them for free in your project if you want.
- Header background: https://www.pexels.com/photo/mountain-scenery-1450082/ 
- Intro image: https://www.pexels.com/photo/woman-wearing-grey-long-sleeved-top-photography-1122868/
- Services: https://www.pexels.com/photo/white-ceramic-teacup-in-white-ceramic-saucer-on-railings-2490932/ 
- Services: https://www.pexels.com/photo/white-book-on-sand-during-daytime-159597/
- Services: https://www.pexels.com/photo/person-wearing-blue-denim-pants-and-brown-boots-sitting-on-brown-and-black-stone-in-front-of-body-of-water-185771/  
- Details 1: https://www.pexels.com/photo/foggy-lake-2166695/
- Details 2: https://www.pexels.com/photo/nature-forest-trees-fog-4827/
- Testimonial authors: https://www.pexels.com/photo/photo-of-people-standing-near-blackboard-3184393/
- Projects: https://www.pexels.com/photo/boat-island-ocean-sea-218999/
- Projects: https://www.pexels.com/photo/sea-mountains-sky-beach-65614/ 
- Projects: https://www.pexels.com/photo/gray-rail-road-in-the-mountain-868677/ 
- Projects: https://www.pexels.com/photo/black-canon-dslr-camera-facing-the-mountains-during-day-1785001/ ,
- Projects: https://www.pexels.com/photo/blur-branches-depth-of-field-dry-leaves-242201/ 
- Projects: https://www.pexels.com/photo/empty-boats-on-shore-near-mountains-1756874/
- Projects: https://www.pexels.com/photo/adult-adventure-backpack-daylight-442559/
- Projects: https://www.pexels.com/photo/round-grey-and-black-compass-1736222/
- About: https://www.pexels.com/photo/mountain-scenery-1450082/
- Article details image large: https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/ 
- Article details image small: https://www.pexels.com/photo/apple-office-internet-ipad-38544/


CREDITS
- Images by Pexels: https://www.pexels.com/


-----------------------------------------------------


Updating The Projects Section
The Projects section uses Isotope plugin which can be configured as described here https://isotope.metafizzy.co/

Adding A New Project
To add a new project in the projects section, you need to:
- Open for editing index.html and find the Projects section
- Here focus on the code area just below
<div class="grid">

- You can copy the following piece of code:
<div class="element-item development">
    <a href="article.html" data-bs-toggle="modal" data-bs-target="#modal1">
        <div class="element-item-overlay"><span>Online Banking</span></div>
        <img class="img-fluid" src="images/project-1.jpg" alt="alternative">
    </a>
</div>

- And paste it wherever you want your project to be in the Show All order
- Now replace the name and the image as per your requirements
- Also add it to a designated category. Now it's set for "development" as you can see from the code but you can change it to any category you define
- You can also designate it to multiple categories, just add the category as a class name like "design development marketing"

Adding A New Category
To add a new project category in the projects section, you need to:
- Open for editing index.html and find the Projects section
- Here in the Filter section duplicate a line like the one below:
<a class="button" data-filter=".development"><span>DEVELOPMENT</span></a>

- And replace the word "development" in both locations with your category name
- Then also add it to the project line below
<div class="element-item development">

- By replacing "development" with your category name


-----------------------------------------------------


Change Testimonials Slider Properties
- Open for editing js/scripts.js
- Find the section /* Card Slider - Swiper */
- And then fiddle with the settings using the documentation here: https://swiperjs.com/swiper-api


-----------------------------------------------------


Update Statistics Number Settings
- To change the statistics numbers find the /* Counter */ section and update the data-purecounter-end="" attribute
- You can also set the speed of each counter with data-purecounter-duration="3"
- The count speed can be adjusted to have all counters finish almost at the same time
- If you give bigger numbers less time to be counted to then they will finish close the the smaller ones