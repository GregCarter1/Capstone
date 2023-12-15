import html from "html-literal";

export default () => html`
<div class="flex-container2">
    <div class="flex-item2">
      <h2>Contact Us:</h2>
      <form action="" method="get"class="form">
        <div class="form">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="'John'">
        </div>
          <div class="form">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="'Doe'">
          <div class="form">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="'johndoe@gmail.com'">
          <div class="form">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phoneNum" name="phoneNum">
          <div class="form">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="10" cols="50"></textarea>
          <div class="form">
            <input type="submit" value="Submit"/>
          </div>
      </form>
    </div>
    <div class = "flex-item1">
      <h2>EFK Information</h2>
        <h2 id = "contact">Contact Us</h2>
        <p>Elite Freestyle Karate</p>
        <p>Phone: (781) 942-9898</p>
        <p>Phone: (781) 942-9898</p>
        <p>email: efkinfobedford@gmail.com</p>
        <p>Address: 285 Great Rd, Bedford, MA</p>
    </div>
  </div>
  `;
