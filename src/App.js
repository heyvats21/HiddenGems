import React, { useState } from "react";
import "./styles.css";

// city API we can use other website api's also
const citiesList = {
  Delhi: [
    {
      Name: "India Gate",
      Image:
        "https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg",
      Rating: "5",
      Description:
        "India Gate, official name Delhi Memorial, originally called All-India War Memorial, monumental sandstone arch in New Delhi, dedicated to the troops of British India who died in wars fought between 1914 and 1919"
    },
    {
      Name: "Akshardham Temple",
      Image:
        "https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740ptZ4Mc.jpg",
      Rating: "5",
      Description:
        "Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture."
    },
    {
      Name: "Gurudwara Bangla Sahib",
      Image:
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS0odUt339ILKlAs-iPQOfuUzgJoFqdvvmFCWNxE8z8R_VQAKksNpN7nJ6Y9I_cS1gH",
      Rating: "5",
      Description:
        "Gurudwara Bangla Sahib is a prominent house of worship for the Sikh community and tourist spot in Delhi. This 17th-century shrine is dedicated to the memory of Guru Har Krishan, who was the eighth Sikh Guru."
    }
  ],
  Kolkata: [
    {
      Name: "Science City",
      Image:
        "https://kolkatatourism.travel/images/places-to-visit/headers/science-city-kolkata-entry-fee-timings-holidays-reviews-header.jpg",
      Rating: "4.8",
      Description:
        "Science City Kolkata is the largest science centre in Asia. It is managed by National Council of Science Museums, Ministry of Culture, Government of India."
    },
    {
      Name: "Victorial Memorial",
      Image:
        "https://static.trip101.com/paragraph_media/pictures/001/818/026/large/Victoria_memorial_Kolkata__India_-_01.jpg?1583152370",
      Rating: "5",
      Description:
        "The Victoria Memorial is a large marble building on the Maidan in Central Kolkata, built between 1906 and 1921. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901."
    },
    {
      Name: "Kalighat",
      Image:
        "https://kolkatatourism.travel/images/places-to-visit/headers/kalighat-kali-temple-kolkata-tourism-entry-fee-timings-holidays-reviews-header.jpg",
      Rating: "5",
      Description:
        "A densely populated neighborhood with a traditional vibe, Kalighat is known for Kalighat Kali, a revered Hindu temple complex from the early 1800s"
    }
  ],
  Lucknow: [
    {
      Name: "Chota Imambara",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Chhota_imambara_Lucknow.jpg",
      Rating: "5",
      Description:
        "Chota Imambara, also known as Imambara Hussainabad Mubarak is an imposing monument located in the city of Lucknow, Uttar Pradesh, India."
    },
    {
      Name: "Ambedkar Memorial Park",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Night_View_of_the_Ambedkar_Memorial_at_Lucknow.jpg",
      Rating: "4.9",
      Description:
        "Ambedkar Memorial Park, formally known as Dr. Bhimrao Ambedkar Samajik Parivartan Prateek Sthal, is a public park and memorial in Gomti Nagar, Lucknow, Uttar Pradesh, India"
    },
    {
      Name: "Rumi Darwaza",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Roomi_darwaza.jpg",
      Rating: "4.9",
      Description:
        "The Rumi Darwaza, in Lucknow, Uttar Pradesh, India, is an imposing gateway which was built by Nawab Asaf-Ud-Daula in 1784."
    }
  ]
};

export default function App() {
  // use state hooks here    selectCity= Delhi by default we can change to other city also
  const [selectCity, setCityName] = useState("Delhi");

  //we have made a func name CityClickHandler
  function CityClickHandler(cityName) {
    setCityName(cityName);
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">Hidden Gems💎</h1>
        <p>Click on the button to see there popular places </p>
        <nav className="city_Name_list">
          {Object.keys(citiesList).map((cityName) => (
            <button onClick={() => CityClickHandler(cityName)}>
              {cityName}
            </button>
          ))}
        </nav>
      </header>

      <div>
        <ul className="list-holder">
          {citiesList[selectCity].map((hidden) => (
            <li className="list">
              <div className="city-name">{hidden.Name}</div>
              <div>
                <img
                  className="hidden-img"
                  src={hidden.Image}
                  alt={hidden.name}
                />
              </div>
              <div className="rating">Rating: {hidden.Rating}</div>
              <div className="description-box">{hidden.Description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
