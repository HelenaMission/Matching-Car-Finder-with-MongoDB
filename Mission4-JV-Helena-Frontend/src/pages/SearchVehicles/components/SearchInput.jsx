import React from "react";
import "./SearchInput.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { NewtonsCradle } from "@uiball/loaders";

const SearchInput = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [carModel, setCarModel] = useState("");
  const [carMake, setCarMake] = useState("");
  const [matchingCars, setMatchingCars] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    if (refresh) {
      window.location.reload();
    }
  }, [refresh]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
  };

  const handleUploadClick = async () => {
    if (uploadedImage) {
      setIsLoading(true);
      setIsClicked(true);
      try {
        // Convert data URL to a Blob object
        const imageBlob = await (await fetch(uploadedImage)).blob();

        // Create a FormData object to send the image as binary data
        const formData = new FormData();
        formData.append("image", imageBlob);

        // Send the FormData to the API endpoint using axios
        const response = await axios.post(
          "http://localhost:4000/car_Finder",
          formData
        );

        // Find out the car model tag name by using reduce function
        const carMakePredic = response.data.carMakePredic;
        const highestProbabilityPrediction = carMakePredic.predictions.reduce(
          (highest, prediction) =>
            prediction.probability > highest.probability ? prediction : highest,
          { probability: 0 }
        );

        setCarMake(highestProbabilityPrediction.tagName);

        // Find out the car make tag name by using reduce function
        const carModelPredic = response.data.carModelPredic;
        const highestProbabilityPrediction2 = carModelPredic.predictions.reduce(
          (highest, prediction) =>
            prediction.probability > highest.probability ? prediction : highest,
          { probability: 0 }
        );

        setCarModel(highestProbabilityPrediction2.tagName);
        setTimeout(() => {
          setIsLoading(false);
          setIsClicked(true);
        }, 3000);
      } catch (error) {
        console.error("Error processing image:", error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // Make the GET request here with the updated carModel and carMake
    if (carModel && carMake) {
      axios
        .get(
          `http://localhost:4000/car_Matcher?model=${carModel}&make=${carMake}`
        )
        .then((response) => {
          const matchingCars = response.data.cars;
          setMatchingCars(matchingCars);
        })
        .catch((error) => {
          console.error("Error fetching matching cars:", error);
        });
    }
  }, [carModel, carMake]);

  return (
    <div className="searchInputContainer">
      {!isClicked ? (
        <div>
          <div className="searchTextsContainer">
            <h1 className="searchHeader" data-aos="fade-left">
              Find The Car Of Your Dreams!
            </h1>
            <p className="searchText" data-aos="fade-right">
              Start by uploading a photo of the car you're looking for below:
            </p>
          </div>
          <div className="fileUploadContainer">
            {uploadedImage && (
              <div>
                <img
                  data-aos="zoom-in"
                  src={uploadedImage}
                  alt="Uploaded"
                  className="uploadedImage"
                />
                <button className="removeBtn" onClick={handleRemoveImage}>
                  x
                </button>
              </div>
            )}
            <input
              className="fileUpload"
              type="file"
              onChange={handleFileChange}
              data-aos="fade-up"
            />
            {uploadedImage && (
              <button
                className="uploadBtn"
                onClick={handleUploadClick}
                data-aos="zoom-in"
              >
                Upload
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="loadingDiv" data-aos="fade-in" data-aos-delay="500">
              <NewtonsCradle size={60} speed={1.2} color="black" />
              <p className="loadingText">Almost there.</p>
            </div>
          ) : (
            <div className="matchedCarsContainer">
              <h2 className="matchedCarsHeader" data-aos="fade-down">
                Matching Cars:
              </h2>
              <div className="matchedCarsSection">
                {matchingCars.map((car, index) => (
                  <div
                    key={index}
                    className="matchedCarsList"
                    data-aos="fade-right"
                  >
                    <img
                      src={`data:image/jpeg;base64,${car.img}`}
                      alt={`${car.make} ${car.model}`}
                      className="matchedCarImage"
                    />
                    <div className="matchedCarsTextContainer">
                      <p>
                        Make: <span className="matchedCarText">{car.make}</span>
                      </p>
                      <p>
                        Model:{" "}
                        <span className="matchedCarText">
                          {car.model.charAt(0).toUpperCase() +
                            car.model.slice(1)}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <h4 data-aos="fade-up">Want to look at another car?</h4>
              <button
                onClick={handleClickRefresh}
                className="matchedCarBtn"
                data-aos="fade-up"
              >
                Click Me
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchInput;
