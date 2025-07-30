import React from "react";
import { useParams } from "react-router-dom";

// Map of card details
const cardDetails = {
  medical: {
    title: "Medical",
    description:
      "Medical isotopes are essential in diagnostics and treatment—like Technetium-99m in imaging and Iodine-131 in cancer therapy.",
  },
  education: {
    title: "Education",
    description:
      "Isotopes are used in science education to demonstrate decay, nuclear structure, and radiation principles.",
  },
  agriculture: {
    title: "Agriculture",
    description:
      "Radioisotopes help improve crop yields by monitoring soil and water distribution, and inducing mutations.",
  },
  space: {
    title: "Space",
    description:
      "Space missions use isotopes like Plutonium-238 in RTGs to power spacecraft in deep space missions.",
  },
};

const CardDetailPage = () => {
  const { title } = useParams();
  const card = cardDetails[title.toLowerCase()];

  if (!card) {
    return (
      <div className="p-10 text-center text-red-600 font-bold text-xl">
        Card not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{card.title}</h1>
      <p className="text-gray-600 text-lg">{card.description}</p>
    </div>
  );
};

export default CardDetailPage;
