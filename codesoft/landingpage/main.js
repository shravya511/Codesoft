const mainContent = document.getElementById('main-content');

function loadContent(page) {
  let content = '';
  switch(page) {
    case 'home':
      content = `
        <header class="header__container" id="header-content">
          <div class="header__image">
            <div class="header__image__cards">
              <div class="header__image__card header__image__card-1">
                <span><i class="ri-key-line"></i></span>
                Hotel Booking
              </div>
              <div class="header__image__card header__image__card-2">
                <span><i class="ri-passport-line"></i></span>
                Flight Tickets
              </div>
              <div class="header__image__card header__image__card-3">
                <span><i class="ri-map-2-line"></i></span>
                Local Events
              </div>
              <div class="header__image__card header__image__card-4">
                <span><i class="ri-guide-line"></i></span>
                Tour Guide
              </div>
            </div>
            <img src="assets/header.jpeg" alt="header" />
          </div>
          <div class="header__content">
            <h1>LET'S GO!<br />THE <span>ADVENTURE</span> IS WAITING FOR YOU</h1>
            <p>
              Embark on Your Journey Today and Discover Uncharted Wonders Around the
              World - Your Adventure Awaits with Exciting Experiences, Unforgettable
              Memories, and Endless Opportunities
            </p>
            <form id="search-form">
              <div class="input__row">
                <div class="input__group">
                  <h5>Destination</h5>
                  <div>
                    <span><i class="ri-map-pin-line"></i></span>
                    <input type="text" placeholder="Paris, France" />
                  </div>
                </div>
                <div class="input__group">
                  <h5>Date</h5>
                  <div>
                    <span><i class="ri-calendar-2-line"></i></span>
                    <input type="text" placeholder="17 July 2024" />
                  </div>
                </div>
              </div>
              <button type="submit">Search</button>
            </form>
            <div class="bar">
              Copyright © 2024 Web Design Mastery. All rights reserved.
            </div>
          </div>
        </header>
      `;
      break;
      case 'destination':
        content = `
          <div class="content destination-page">
            <h2>Destination</h2>
            <p>Explore our top destinations around the world.</p>
            <div class="destination__list">
              <div class="destination__item">
                <img src="assets/paris.jpeg" alt="Paris" />
                <h3>Paris, France</h3>
                <p>The City of Lights awaits with its romantic charm, iconic landmarks, and vibrant culture.</p>
              </div>
              <div class="destination__item">
                <img src="assets/tokyo.jpeg" alt="Tokyo" />
                <h3>Tokyo, Japan</h3>
                <p>Experience the perfect blend of tradition and modernity in Japan's bustling capital.</p>
              </div>
              <div class="destination__item">
                <img src="assets/newyork.jpeg" alt="New York" />
                <h3>New York, USA</h3>
                <p>The city that never sleeps, offering endless entertainment, shopping, and cultural experiences.</p>
              </div>
            </div>
          </div>
        `;
        break;
      
      
      case 'package':
        content = `
          <div class="content">
            <h2>Exclusive Travel Packages</h2>
            <p>Discover our specially designed travel packages that cater to various interests and budgets, ensuring a memorable journey for everyone.</p>
            
            <div class="package__list">
              <div class="package__item">
                <h3>Beach Vacation</h3>
                <p>Relax and unwind with our beach packages that include luxury accommodations, water sports, and more.</p>
                <button>Learn More</button>
              </div>
              <div class="package__item">
                <h3>Adventure Trip</h3>
                <p>Get your adrenaline pumping with our adventure packages featuring hiking, rafting, and more.</p>
                <button>Learn More</button>
              </div>
              <div class="package__item">
                <h3>Cultural Tour</h3>
                <p>Immerse yourself in the rich culture and history of your chosen destination with our cultural tours.</p>
                <button>Learn More</button>
              </div>
              <!-- Add more packages as needed -->
            </div>
          </div>
        `;
        break;
  
      case 'blog':
        content = `
          <div class="content">
            <h1>Travel Blog</h1>
            <p>Stay updated with our latest travel tips, destination guides, and inspirational stories from our travel experts.</p>
            
            <div class="blog__list">
              <div class="blog__post">
                <h3>10 Tips for Traveling on a Budget</h3>
                <p>Learn how to make the most of your travel experience without breaking the bank.</p>
              </div>
              <div class="blog__post">
                <h3>The Ultimate Guide to Solo Travel</h3>
                <p>Discover the joys and challenges of traveling alone with our comprehensive guide.</p>
                
              </div>
              <div class="blog__post">
                <h3>Top 5 Destinations for Food Lovers</h3>
                <p>Explore the best places to indulge your taste buds with our top picks for food enthusiasts.</p>
                
              </div>
              <!-- Add more blog posts as needed -->
            </div>
          </div>
        `;
        break;
  
      case 'about':
        content = `
          <div class="content">
            <h2>About Us</h2>
            <p>Welcome to Soul Trip, your ultimate travel companion. Our mission is to provide unforgettable travel experiences through exceptional service and a passion for adventure.</p>
            <h3>Our Story</h3>
            <p>Founded in 2023, Soul Trip was born out of a love for exploring new places and a desire to share that passion with others. Our team of travel experts works tirelessly to curate the best travel experiences for our clients.</p>
            <h3>Our Team</h3>
            <p>Meet the passionate individuals behind Soul Trip, each dedicated to making your travel dreams a reality.</p>
            <div class="team__list">
              <div class="team__member">
                <h4>John Doe</h4>
                <p>Founder & CEO</p>
              </div>
              <div class="team__member">
                <h4>Jane Smith</h4>
                <p>Travel Consultant</p>
              </div>
              <!-- Add more team members as needed -->
            </div>
          </div>
        `;
        break;
  
      break;
      case 'contact':
        content = `
          <div class="content">
            <h2>Contact</h2>
            <h3>Get in touch with us for any inquiries. We're here to help!</h3>
            <h4>Contact Information</h4>
            <h4>Contact Form</h4>
            <form id="contact-form">
              <div class="form.;__group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form__group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form__group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        `;
        break;
  
    case 'signup':
      content = `
        <div class="content">
          <h2>Sign Up</h2>
          <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      `;
      break;
    case 'signin':
      content = `
        <div class="content">
          <h2>Sign In</h2>
          <form>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br>
            <button type="submit">Sign In</button>
          </form>
        </div>
      `;
      break;
    default:
      content = `
        <div class="content">
          <h2>Page not found</h2>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      `;
  }

  mainContent.innerHTML = content;
}

// Initialize the default content
loadContent('home');
