## Reflection

*Documentation*

In this project, I developed a profile page with a responsive sidebar, main content area, and sections for profile information, services, and a footer. The project involved HTML structuring for accessibility and functionality, CSS for styling and layout adjustments, and external libraries (such as Font Awesome for icons). Key features included scrollable sidebar navigation, anchor links for smooth scrolling, and embedded images with responsive design in mind. 

*What I Learned*

This project taught me several essential skills in HTML, CSS, and user experience design:
1. *HTML Structure & Navigation*: Creating a well-structured HTML layout that connects page sections with anchor links was insightful. I learned about the importance of id attributes for navigation and accessibility.
2. *CSS Flexbox and Grid*: Flexbox was instrumental in making the sidebar and main content responsive. The flexibility of Flexbox enabled smooth alignment of elements while ensuring a visually appealing layout.
3. *Responsive Design*: I learned to create responsive images and icons by using CSS properties like object-fit and controlling their dimensions with max-height and width.
4. *Smooth Scrolling*: Implementing scroll-behavior: smooth was a useful feature to enhance user experience when navigating to different sections on the page.

*Challenges Faced*

1. *Responsive Sidebar Design*: Initially, making the sidebar extend to the bottom of the viewport was challenging as it would not stretch correctly during scrolling. This issue arose due to misalignment in height properties between the sidebar and main content.
   
   *Solution*: I addressed this by applying height: 100vh to the sidebar and adjusting its position properties to be fixed, ensuring that it covered the full height of the screen regardless of scrolling.

2. *Image Fitting within Service Cards*: Another challenge was ensuring that images within the service cards didn’t stretch or lose their aspect ratio. Initially, images appeared oversized or distorted.

   *Solution*: To resolve this, I used the object-fit: contain CSS property, which allows the images to scale to the card dimensions while maintaining their original aspect ratio. Additionally, applying max-height helped prevent the images from stretching vertically.

3. *Navigation Linking*: Implementing the anchor link for “About Me” was tricky, as it initially didn’t scroll to the exact location of the profile section.

 *Solution*: 
 
 I used the id attribute for the profile section and referenced it in the sidebar’s “About Me” link. Adding scroll-behavior: smooth to the HTML also ensured a seamless transition to the profile section when the link was clicked.

*Conclusion*

 Overall, this project strengthened my skills in front-end development. Through addressing challenges and experimenting with new features, I gained a better understanding of how to design user-friendly, responsive web layouts that enhance navigation and aesthetics. These skills will serve as a solid foundation for future web development projects, especially those requiring dynamic and responsive designs.