import html from "html-literal";
import blackBeltBoard from "../../assets/bbc wall.webp";

export default state => html`
  <div class = "main">
    <div class="grid-container3">
    <div class ="grid-item3">
      <img src= "${blackBeltBoard}" alt="BlackBelt" />
    </div>

    <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>

    <div class="grid-container4">
    <div class ="grid-item4">
    <h1>Elite Freestyle Karate Performance Tracking App</h1>
      <p>During your journey, whether you are beginning White Belts or experienced Black Belts,
  You have, or will in the future, needed to track your performance of the skills you learn.
  You will also have a need to track the progress you are making towards your next goal.
  This EFK application is for you, the martial artist.  You have accepted the challenge of
  embarking on this life ong journey, now we place the responsibility of tracking performance
  and requirements in your capable hands.  Your Sensei's will teach you all of the skills
  and techniques, they will push you to ever greater heights and they will take pride in<
  your achievements.  You will listen to them, apply what they teach and take responsibility
  for achieving your goals.  Your Sensei's can guide, push and pull you, but you will have to
  Want It.  This journey is all yours.  You will have help, but it is up to you to take
  each step.  The achievements are all yours, but you do have to earn them.
      </p>
      <p>Good luck in this next adventure of your life.  It will change you for the better and it is<br>
  an experience that you wil never forget!  Welcome to Elite Freestyle Karate.
      </p>
    </div>
  </div>
  <!-- <div class="signup">
    <div class="studentinfo1">
      <h2>Sign Up Here</h2><br>
    <form>
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
    </div><br>
    <input type="submit" value="Submit" />
    </form>
  </div> -->
  <div class="grid-container1">
    <div class ="grid-item1">
      <h2>Track and Progress</h2>
        <p>This application will enable you to progress in karate.  It is designed to help you plan
  your classes, your training days, as well as the skills and techniques that you have mastered
  and those that still need to be mastered.  It will assist you achieving your physical fitness
  goals and testing requirements.  It will give you a broad view of what you are practicing
  and what you have been neglecting.  Please use this application to improve your performance,
  both fitness and techniques.
      </p>
    </div>
    <div class = "grid-item2">
      <h2 id = "use">Using this Application</h2>
        <ul>
          <li>Upon completing each training session, sign into the student portal.</li>
          <li>Fill in the techniques that were taught and practiced in class.</li>
          <li>Fill in the exercises that you completed in class, to include the repetitions.</li>
          <li>When training outside of class, fill in the techniques that you practiced.</li>
            <li>When exercising outside of class (to include at school) fill in the exercises, repetitions.</li>
          <li>Weekly, check your messages to see what advice your Sensei has provided you.</li>
          <li>Monthly, take a broad view of your training and exercise plan:  see what was neglected and what was overemphasized</li>
          <li>Monthly, modify training based on results of previous month.</li>
        </ul></p>
    </div>
</div>
`;
