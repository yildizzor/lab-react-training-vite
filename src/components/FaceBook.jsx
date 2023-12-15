import React from "react";
import "./FaceBook.css";
import profiles from "../data/berlin.json";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function FaceBook() {
  const [profileList, setProfileList] = useState(profiles);
  const [selectedCountry, setSelectedCountry] = useState("");
  const countryList = ["All"];

  profiles.forEach((profile) => {
    if (!countryList.includes(profile.country)) {
      countryList.push(profile.country);
    }
  });

  const selectCity = (country) => {
    setSelectedCountry(country);
    if (country === "All") {
      setProfileList(profiles);
    } else {
      const countryOfProfiles = profiles.filter((profile) => {
        return profile.country === country;
      });
      setProfileList(countryOfProfiles);
    }
  };

  return (
    <>
      <div>
        {countryList.map((country) => {
          return (
            <button
              className="button"
              key={uuidv4}
              onClick={() => selectCity(country)}
              style={{
                backgroundColor: selectedCountry === country ? "blue" : "white",
              }}
            >
              {country}
            </button>
          );
        })}
      </div>

      <div className="facebook">
        {profiles.map((profile) => {
          return (
            <div
              key={uuidv4()}
              className="profile"
              style={{
                backgroundColor:
                  selectedCountry === profile.country ||
                  selectedCountry === "All"
                    ? "blue"
                    : "white",
              }}
            >
              <img style={{ width: "200px" }} src={profile.img} />
              <div className="profile-info">
                <p>First name: {profile.firstName}</p>
                <p>Last name: {profile.lastName}</p>
                <p>Country: {profile.country}</p>
                <p>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FaceBook;
