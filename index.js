import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Student") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const trainingList = event.target.elements;
      console.log("Input Element List", trainingList);

      const trainingData = {
        training: trainingList.training.value,
        kata: trainingList.kata.value,
        katapractice: trainingList.katapractice.value,
        distance: trainingList.distance.value,
        pace: trainingList.pace.value,
        time: trainingList.time.value,
        pushups: trainingList.pushups.value,
        crunches: trainingList.crunches.value,
        burpies: trainingList.burpies.value,
        wallsit: trainingList.wallsit.value
      };
      console.log("request Body", trainingData);

      axios
        .post(`${process.env.TRAINING_LOG_URL}/trainingrouter`, trainingData)
        .then(response => {
          console.log(response.data);
          store.Student.trainingLog.push(response.data);
          router.navigate("/Student");
        })
        .catch(error => {
          console.log("error", error);
        });
    });
  }

  if (state.view === "Contact") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      const requestData = {
        fullName: inputList.name.value,
        email: inputList.email.value,
        phone: inputList.phone.value,
        message: inputList.message.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.CONTACT_API_URL}/contact`, requestData)
        .then(response => {
          store.Instructor.messages.push(response.data);
          router.navigate("/Contact");
        })
        .catch(error => {
          console.log("error", error);
        });
    });
  }
}
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      // New Case for the Home View
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=boston`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };

            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      case "Contact":
        axios
          .get(`${process.env.CONTACT_API_URL}/routermessage`)
          .then(response => {
            console.log("response", response);
            store.Instructor.routermessage = response.data;

            done();
          })
          .catch(error => {
            console.log("error", error);
            done();
          });
        break;
      default:
        done();
    }
  },

  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      }
    }
  })
  .resolve();
