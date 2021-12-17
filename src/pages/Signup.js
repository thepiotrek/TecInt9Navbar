import { ButtonText, GreenButton, RedButton } from "../components/Button";
import { useState } from "react";
import Parse from "parse";
import GuestSignUpComponent from "../components/GuestSignUpComponent";
import CarSignUpComponent from "../components/CarSignUpComponent";
import { useNavigate } from "react-router";

export default function CreateSignUp() {

  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    fullname: "",
    birthday: "",
    address: "",
    email: "",
    phone: "",
    pref1: "",
    pref2: "",
    pref3: "",
    carStatus: false,
    noGuests: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setSignupData(prevState => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value
      }
    })
  };

  function handleSubmit(e) {
    e.preventDefault();
    // code here
  }

  function resetSignupData() {
    setSignupData({
      fullname: "",
      birthday: "",
      address: "",
      email: "",
      phone: "",
      pref1: "",
      pref2: "",
      pref3: "",
      carStatus: "",
      noGuests: "",
    })
  }

  //Calculates the age based on the birth date
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function getGuests() {
    //const guests = x;
    const myGuests = [];
    if (signupData.noGuests > 0 && signupData.noGuests < 5) {
      for (let index = 0; index < signupData.noGuests; index++) {
        myGuests.push(<GuestSignUpComponent index={index} />);
      }
    } else {
    }
    return myGuests;
  }

  function carAvailable(x) {
    if (signupData.carStatus) {
      return <CarSignUpComponent />;
    }
  }

  // function uploadSignUp() {
  //   const Participant = Parse.Object.extend("Participant");
  //   const participant = new Participant();
  //   participant.set("fullname", fullname);
  //   participant.set("name", fullname.split(" ")[0]);
  //   participant.set("birthday", birthday);
  //   participant.set("age", getAge(birthday));
  //   participant.set("address", address);
  //   participant.set("email", email);
  //   participant.set("phone", Number(phone));
  //   participant.set("preferences", preferences);
  //   participant.set("carStatus", carStatus);
  //   participant.set("numberOfGuests", Number(numberOfGuests));

  //   participant.save().then(
  //     (participant) => {
  //       navigate("/afterSignUp");
  //     },
  //     (error) => {
  //       alert("Something went wrong " + error.message);
  //     }
  //   );
  // }

  console.log(signupData);

  return (
    <div className="signup">
      <h3>Sign up for this year's annual excursion</h3>
      <br />
      <form className="create--form">
        <p>Full name:</p>
        <input
          className="create--input"
          type="text"
          placeholder="Full name"
          onChange={handleChange}
          name="fullname"
          value={signupData.fullname}
          required="required"
        />

        <p>Birthday:</p>
        <input
          className="create--input"
          type="date"
          placeholder="Birthday"
          onChange={handleChange}
          name="birthday"
          value={signupData.birthday}
          required="required"
        />

        <p>Address:</p>
        <input
          className="create--input"
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={signupData.address}
          required="required"
        />

        <p>Email:</p>
        <input
          className="create--input"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={signupData.email}
          required="required"
        />

        <p>Phone:</p>
        <input
          className="create--input"
          type="number"
          placeholder="Phone number"
          onChange={handleChange}
          name="phone"
          value={signupData.phone}
          required="required"
        />

        <p>Preferences:</p>
        <label>#1:</label>
        <select
          size="1"
          onChange={handleChange}
          name="pref1"
          value={signupData.pref1}
        >
          <option value="Cooking">Cooking</option>
        </select>
        <input
          className="create--input"
          type="text"
          placeholder="Preferences"
          onChange={handleChange}
          name="preferences"
          value={signupData.preferences}
          required="required"
        />

        <p>Car Status: </p>
        <label>Check this box if you will drive to the destination:        </label>
        <br />
        <input
          className="create--input"
          type="checkbox"
          checked={signupData.carStatus}
          onChange={handleChange}
          name="carStatus"
        />
      </form>
      {carAvailable()}
      <br />
      <br />
      <form className='create--form'>
        <p>Number of guests:</p>
        <input
          className="create--input"
          type="number"
          placeholder="Number of guests"
          onChange={handleChange}
          name="noGuests"
          value={signupData.noGuests}
          min="0"
          max="4"
          pattern="[0-9]+"
        />

        <br />
      </form>
      {getGuests(signupData.noGuests)}
      <GreenButton onClick={handleSubmit}>
        <ButtonText>Sign Up</ButtonText>
      </GreenButton>
      <RedButton onClick={resetSignupData}>
        <ButtonText>Cancel</ButtonText>
      </RedButton>
    </div>
  );
}
