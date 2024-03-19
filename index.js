// A user enters the website and finds a list of the names, dates, times, locations, and descriptions of all the parties that are happening.

/* event names, dates/times, locations, & description
{
    id: 1,
    name: "Event Name",
    description: "This is a description of the event.",
    date: "2021-09-30T00:00:00.000Z", // Date ISO string
    location: "123 Street"
  }
  */

// attach base URL w/ cohort identifier
// sync API/render
// create event resources API (x4)
// created return response
// include "fetch"

const COHORT = "2402-FTB-ET-WEB-FT";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
// used same URL from guided practice - changed artists to events (is that ok?)

const state = {
  events: [],
};

const eventList = document.querySelector("#events");

const addEventForm = document.querySelector("#addEvent");
addEventForm.addEventListener("submit", addEvent);

async function render() {
  await getEvents();
  renderEvents();
}
render();

async function getEvents() {
  try {
    
    const response = await fetch(API_URL);
    console.log(response);

    const json = await response.json();
    console.log(json);
    console.log(json.data);


    console.log(state.events);
    state.events = json.data;
    console.log(state.events);
  } catch (error) {
    console.log(error);
  }
}