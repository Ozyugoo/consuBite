import { useState } from "react";
import Input from "../../components/InputFields/Input";

const statesInNigeria = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

function SelectState({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      required className="bg-custom-greyLight py-2 px-3 w-full rounded-xl"
    >
      <option value="" disabled className="w-full">
        Select State
      </option>
      {statesInNigeria.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
}

function State() {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected State:", selectedState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectState value={selectedState} onChange={handleStateChange} />
    </form>
  );
}

export default State;
