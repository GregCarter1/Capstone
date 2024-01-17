import html from "html-literal";

export default () => html`
  <div class="contactDesign">
    <div class="flex-container2">
      <div class="flex-item2">
        <h2>Contact Us:</h2>
        <div class="form">
          <form id="contact" method="POST" action="">
            <label for="full-name">Full Name: </label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="John A. Doe"
              required
            />
            <br />
            <label for="emailAddress">Email Address: </label>
            <input
              type="email"
              name="email"
              id="email-address"
              placeholder="youremail@provider.com"
              required=""
            />
            <br />
            <label for="phone">Phone Number: </label>
            <input
              type="tel"
              name="phone"
              id="tel-number"
              placeholder="555-555-5555"
            />
            <br />
            <label for="message">Message:</label>
            <br />
            <textarea
              rows="10"
              cols="50"
              name="message"
              id="message"
              required=""
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
    <div class="flex-container1">
      <h2>EFK Contact Information</h2>
      <h2 id="contact">Contact Us</h2>
      <p>Elite Freestyle Karate</p>
      <p>Phone: (781) 942-9898</p>
      <p>email: efkinfobedford@gmail.com</p>
      <p>Address: 285 Great Rd, Bedford, MA</p>
    </div>
  </div>
`;
