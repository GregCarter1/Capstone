import html from "html-literal";
import tiedBelt from "../../assets/tied black belt.png";
import contact from "../../server/models/message.js";

export default state => html`
  <h1>Sensei Work Area</h1>

  <div class="senseiWork">
    <img src="${tiedBelt}" alt="tiedBlackBelt" />
  </div>
  <div class="sensei-student">
    <h2>Message to Students</h2>
    <form id="messagetoStudents" method="POST" action="">
    <label for="name">From Sensei</label>
    <select name="sensei" id="sensei">
      <option value="">---- </option>
      <option value="manny">Manny</option>
      <option value="ethan">Ethan</option>
      <option value="ryan">Ryan</option>
    </select><br>

    <label for="message">Message:</label><br>
      <textarea
        rows="10"
        cols="50"
        name="message"
        id="message"
        required=""
        >
      </textarea>
  <input type="submit" value="Submit" />
  </form>
  </div>
  <div class="messageFromStudent">
    <table id="incomingMail">
      <h2>From Students<h2>
    <tr>
      <th>Date Submitted</th>
      <th>Student Name</th>
      <th>Message</th>
    </tr>
</div>

  <table id="messages">
    <h2>Messages<h2>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Message</th>
    </tr>


    ${state.routermessage
      .map(routermessage => {
        return `<tr><td>${routermessage.name}}</td><td>${routermessage.email}</td><td>${routermessage.phone}</td><td>${routermessage.message}</td></tr>`;
      })
      .join("")}
  </table>
`;
