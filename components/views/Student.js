import html from "html-literal";
import blackBeltBoard from "../../assets/bbc wall.webp";
export default state => html`
  <h1>Ninja Log and Tracker</h1>
  <img src="${blackBeltBoard}" alt="BlackBelt" />
  <div class="student-info">
    <div class="studentinfo1">
      <h2>Student Information:</h2>
      <label for="fullName">Full Name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="'John Doe'"
      />
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" />
      <label for="belt">Belt Level:</label>
      <select name="belt" id="belt-level">
        <option value="">--Select your Belt-- </option>
        <option value="white">White</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="red">Red</option>
        <option value="brown">Brown</option>
        <option value="black">Black</option>
      </select>
    </div>
  </div>
  <div class="training-log">
  <form id="training-Log" method="POST" action="">
    <h2>Training Log Submission</h2>
    <label for="train">Training:</label>
    <input
      type="date"
      id="start"
      name="trip-start"
      value="2024-01-13"
      min="2024-01-13"
      max="2024-01-13"
    />

    <label for="kata">Kata level</label>
    <select name="belt" id="belt-level">
      <option value="">--Select Your Kata-- </option>
      <option value="white">White</option>
      <option value="yellow">Yellow</option>
      <option value="orange">Orange</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="purple">Purple</option>
      <option value="red">Red</option>
      <option value="brown">Brown</option>
      <option value="black">Black</option>
    </select>
    <label for="katapractrice">Minutes Practiced:</label>
    <input type="number" id="minutes" name="Minutes" value="minutes" /><br

    <label for="distance">Running: Distance:</label>
    <input type="number" id="distance" name="distance" min="1" max="20" />
    <label for="pace">Pace (minutes per mile):</label>
    <input type="number" id="pace" name="pace" value="minute/mile" />
    <label for="time">Total Time (in minutes):</label>
    <input type="number" id="minutes" name="minutes" /><br

    <label for="push-ups">Push-ups:</label>
    <input type="number" id="push-ups" name="push-ups" /><br

    <label for="crunches">Crunches:</label>
    <input type="number" id="crunches" name="crunches" /><br

    <label for="burpies">Burpies:</label>
    <input type="number" id="burpies" name="burpies" /><br

    <label for="wall-sit">Wall-Sit:</label>
    <input type="number" id="minutes" name="minutes" /><br
    />
  <input type="submit" value="Save" />
  </form>
  </div>
  <div class="student-sensei">
    <h2>Send Senei a message</h2>
    <form id="messagetosensei" method="POST" action="">
    <label for="submitDate">Date Submitted:</label>
    <input
      type="date"
      id="start"
      name="trip-start"
      value="2024-01-13"
      min="2024-01-13"
      max="2024-01-13"
    />
    <label for="name">Student Name</label>
    <input
        type="text"
        id="studentName"
        name="studentName"
        placeholder="'John Doe'" /><br
    <label for="message">Message:</label><br />
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
  <div class="trainingComplete">
  <table id="trainingCompleteLog">
    <h2>Completed Training<h2>
    <tr>
      <th>Date</th>
      <th>Kata level</th>
      <th>Running Distance:</th>
      <th>Push-ups:</th>
      <th>Crunches:<th>
      <th>Burpies:<th>
      <th>Wall-Sit:<th>
    </tr>
</div>
`;
