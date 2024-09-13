const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('nav-active');
  burgerMenu.classList.toggle('toggle');
});



// Function to show the pop-up
function showPopup() {
  document.getElementById('followPopup').style.display = 'block';
}

// Function to hide the pop-up
function hidePopup() {
  document.getElementById('followPopup').style.display = 'none';
}

// Show the pop-up after 5 seconds
setTimeout(showPopup, 5000);

// Close the pop-up when the close button is clicked
document.getElementById('closePopup').addEventListener('click', hidePopup);

// Function to show the feedback pop-up
function showFeedbackPopup() {
  document.getElementById('feedbackPopup').style.display = 'block';
}

// Function to hide the feedback pop-up
function hideFeedbackPopup() {
  document.getElementById('feedbackPopup').style.display = 'none';
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Create the WhatsApp message URL
  const phoneNumber = '+27670643226'; // Your WhatsApp number
  const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

  // Redirect to WhatsApp with the pre-filled message
  window.location.href = whatsappURL;

  // Close the feedback pop-up
  hideFeedbackPopup();
}

// Show the pop-up after 10 seconds (adjust timing as needed)
setTimeout(showFeedbackPopup, 10000);

// Close the pop-up when the close button is clicked
document.getElementById('closeFeedback').addEventListener('click', hideFeedbackPopup);

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', handleFormSubmit);


// Predefined questions and answers
const qaResponses = {
  "What services do you offer?": "We offer Custom Website Development, eCommerce Solutions, Website Redesign, SEO Optimization, and Maintenance & Support.",
  "How much does a custom website cost?": "$1,500 - $5,000 depending on the complexity and requirements.",
  "What is included in your SEO Optimization service?": "Our SEO Optimization includes keyword research, on-page SEO, technical SEO, and performance tracking.",
  "Do you provide website maintenance?": "Yes, we offer maintenance and support plans ranging from $500 to $1,500 per year.",
  "What is the typical timeline for developing a website?": "A typical website development project takes 4 to 12 weeks, depending on the complexity and requirements.",
  "Can you help with website hosting?": "Yes, we can assist with setting up and managing website hosting services.",
  "What is a CMS?": "A Content Management System (CMS) allows you to create, manage, and modify digital content without needing extensive technical knowledge.",
  "How do you ensure my website is secure?": "We implement SSL certificates, regular updates, and security plugins to protect your website from threats.",
  "Can you integrate social media into my website?": "Yes, we can integrate social media feeds and sharing buttons into your website.",
  "What is responsive web design?": "Responsive web design ensures that your website looks and functions well on all devices, including desktops, tablets, and smartphones.",
  "How do you approach website design?": "We start with understanding your brand and goals, create wireframes, and design mockups to ensure the site meets your needs and expectations.",
  "What is included in your eCommerce Solutions?": "Our eCommerce Solutions include shopping cart setup, payment gateway integration, product management, and customer management features.",
  "Do you provide training for managing my website?": "Yes, we offer training to help you manage and update your website effectively.",
  "What is a website wireframe?": "A wireframe is a visual guide that represents the skeletal framework of a website.",
  "Can you help with domain registration?": "Yes, we can assist with domain name registration and management.",
  "What is the difference between front-end and back-end development?": "Front-end development deals with the visual elements of a website, while back-end development involves server-side logic and database management.",
  "How do you handle website SEO?": "We use a combination of keyword research, on-page optimization, and technical SEO strategies to improve your website’s search engine ranking.",
  "Can you create custom graphics for my website?": "Yes, we can design custom graphics, including logos, banners, and icons, tailored to your brand.",
  "What is a landing page?": "A landing page is a standalone web page created specifically for a marketing or advertising campaign.",
  "How do you test websites for functionality?": "We perform extensive testing across different devices and browsers to ensure functionality and compatibility.",
  "Can you assist with content creation for my website?": "Yes, we offer content creation services, including writing and editing website copy.",
  "What is a call-to-action (CTA)?": "A CTA is a prompt on your website that encourages users to take a specific action, such as 'Sign Up' or 'Buy Now'.",
  "How do you ensure cross-browser compatibility?": "We test your website on multiple browsers and devices to ensure it performs consistently across different platforms.",
  "What is website hosting?": "Website hosting is a service that allows individuals and organizations to publish their website online.",
  "How often should I update my website?": "Regular updates are recommended to keep your website secure, fresh, and relevant. Monthly or quarterly updates are ideal.",
  "Can you integrate third-party tools into my website?": "Yes, we can integrate various third-party tools and services, such as CRM systems and analytics tools.",
  "What is the importance of website speed?": "Website speed affects user experience and search engine rankings. Faster websites provide a better user experience and can improve SEO.",
  "How do you handle website backups?": "We implement regular backups to ensure that your website data is secure and can be restored in case of any issues.",
  "What is the difference between a static and dynamic website?": "A static website displays fixed content, while a dynamic website can change content based on user interactions or other factors.",
  "Can you help with website migration?": "Yes, we can assist with migrating your website from one host to another or from one platform to another.",
  "What are website analytics?": "Website analytics involve tracking and analyzing website traffic and user behavior to make data-driven decisions.",
  "How do you ensure a website is user-friendly?": "We focus on intuitive design, easy navigation, and clear calls-to-action to ensure a positive user experience.",
  "Can you create a blog for my website?": "Yes, we can set up and customize a blog on your website, including design and functionality.",
  "What is an SSL certificate?": "An SSL certificate encrypts data transferred between your website and its users, ensuring secure communication.",
  "How do you handle website errors?": "We diagnose and resolve website errors promptly, performing thorough testing to prevent future issues.",
  "What is a responsive layout?": "A responsive layout adjusts the website’s design and content to fit different screen sizes and devices.",
  "Can you assist with email marketing setup?": "Yes, we can help with setting up email marketing tools and integrating them with your website.",
  "What is a content delivery network (CDN)?": "A CDN is a network of servers that distributes website content to users based on their location, improving load times.",
  "How do you ensure website accessibility?": "We follow web accessibility guidelines to make sure your website is usable by people with disabilities, including screen reader compatibility and keyboard navigation.",
  "Can you help with logo design?": "Yes, we offer logo design services to create a unique and professional brand identity.",
  "What is a user persona?": "A user persona is a fictional character that represents a segment of your website’s target audience, used to guide design and content decisions.",
  "Can you create a portfolio website for me?": "Yes, we can design and develop a portfolio website to showcase your work and achievements.",
  "How do you handle website security?": "We implement security measures such as firewalls, malware scanning, and regular updates to protect your website from threats.",
  "What is A/B testing?": "A/B testing involves comparing two versions of a webpage to determine which performs better in terms of user engagement or conversion rates.",
  "Can you integrate payment gateways into my website?": "Yes, we can integrate various payment gateways to facilitate online transactions securely.",
  "What is a sitemap?": "A sitemap is a file that lists all the pages of your website, helping search engines crawl and index your site more efficiently.",
  "How do you approach website usability testing?": "We conduct usability testing to assess how easily users can navigate and interact with your website, making improvements based on feedback.",
  "Can you provide ongoing website support?": "Yes, we offer ongoing support and maintenance services to keep your website running smoothly.",
  "What is the importance of mobile optimization?": "Mobile optimization ensures that your website is accessible and functional on mobile devices, which is crucial for user experience and SEO.",
  "How do you handle website content updates?": "We can provide content management services or train you to update content through a CMS.",
  "Can you assist with online advertising?": "Yes, we can help with setting up and managing online advertising campaigns to drive traffic to your website.",
  "What is a landing page?": "A landing page is a dedicated page designed to convert visitors into leads or customers, often linked to marketing campaigns."
};

// Function to handle question submission
function submitQuestion() {
  const input = document.getElementById('user-question');
  const question = input.value.trim();
  if (question) {
    // Display user message
    addMessage(question, 'user');

    // Provide response
    const response = qaResponses[question] || "Sorry, I don't have an answer to that question.";
    addMessage(response, 'bot');

    // Clear input field
    input.value = '';
  }
}

// Function to add messages to the chat
function addMessage(text, type) {
  const messages = document.getElementById('qa-messages');
  const message = document.createElement('div');
  message.className = `message ${type}`;
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight; // Scroll to bottom
}

  // Function to handle the user's choice on ad blocking
    function handleAdBlockChoice(block) {
      const adsSection = document.getElementById('ads');
      const promptSection = document.getElementById('ad-blocker-prompt');
      
      if (block) {
        // User chose to block ads, so hide the ads
        adsSection.style.display = 'none';
        alert('Ads will be blocked on this site.');
      } else {
        // User chose not to block ads, show the ads
        adsSection.style.display = 'block';
        alert('Thank you for not blocking ads. Here is some content.');
      }
      
      // Hide the prompt
      promptSection.style.display = 'none';
    }

    // Function to detect ad blocker
    function detectAdBlocker() {
      const adTest = document.createElement('div');
      adTest.innerHTML = '&nbsp;';
      adTest.className = 'ads';
      document.body.appendChild(adTest);

      if (adTest.offsetHeight === 0) {
        // Ad blocker is detected
        document.getElementById('ad-blocker-prompt').style.display = 'block';
      } else {
        // No ad blocker detected
        document.getElementById('ads').style.display = 'block';
      }
      
      // Clean up
      document.body.removeChild(adTest);
    }

    // Run the ad blocker detection on page load
    window.onload = detectAdBlocker;
	

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Create the WhatsApp message URL
    const phoneNumber = '+27670643226'; // Your WhatsApp number
    const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    // Redirect to WhatsApp with the pre-filled message
    window.location.href = whatsappURL;
  }

  // Add event listener to the form
  document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

    
