import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import med1 from "../assets/med1.jpg";
import med2 from "../assets/med2.jpg";
import space1 from "../assets/space1.jpg";

const cardDetails = {
  medical: {
    title: "Medical",
    description:
      "Isotopes play a vital role in modern medicine, especially in diagnostics, where their radioactive properties allow accurate imaging and organ function assessment. In nuclear medicine, tracers made from isotopes target specific organs and processes, which can then be visualized using techniques like SPECT with Technetium-99m (Tc-99m)—the most widely used medical isotope for heart, bone, brain, kidney, liver, and thyroid scans. Similarly, PET scans use positron emitters like Fluorine-18 (F-18) to track metabolic activity, proving highly effective in cancer detection, heart disease, and brain studies. Other isotopes, such as Iodine-123 for thyroid testing, Thallium-201 for heart damage, and stable Carbon-13 in breath tests, further highlight their diagnostic usefulness.",
    description2:
      "In therapy, isotopes are central to radiotherapy, delivering targeted radiation to kill diseased cells while protecting healthy tissue. Iodine-131 treats thyroid disorders, while Lutetium-177 and Yttrium-90 are used for cancers such as neuroendocrine tumors, prostate, and liver cancers. Radium-223, an alpha emitter, is effective against prostate cancer that has spread to bones, and isotopes like Strontium-89 and Samarium-153 help ease bone pain in palliative care. In addition, Cobalt-60 and Iridium-192 are widely used in external beam therapy and brachytherapy, while Cobalt-60 also sterilizes medical equipment. Together, these applications make isotopes indispensable in improving diagnosis, treatment, and patient care.",
    image: med1,
    image2: med2,
  },
  education: {
    title: "Education",
    description: "...",
    description2: "",
  },
  agriculture: {
    title: "Agriculture",
    description: "...",
    description2: "",
  },
  space: {
    title: "Space",
    description:
      "Isotopes are vital in *space exploration* because of their radioactivity and long half-lives, which make them reliable energy sources. *Radioisotope Power Systems (RPS), such as **Radioisotope Thermoelectric Generators (RTGs), convert the heat from radioactive decay into electricity, powering missions where solar energy is impractical, like deep space or shadowed regions. *Plutonium-238 (Pu-238), with its long half-life and high heat output, has powered spacecraft such as Voyager, Cassini, New Horizons, and Mars rovers. Alternatives like Americium-241 are being explored for even longer missions. Smaller *Radioisotope Heater Units (RHUs)* use Pu-238 to keep instruments warm, while *Stirling Radioisotope Generators (SRGs)* promise greater efficiency for future missions.",
    description2:
      "Beyond power, isotopes also support *propulsion and scientific research. Concepts like **Radioisotope Thermal Rockets* use decay heat to produce low thrust but highly efficient propulsion, while *Nuclear Electric Propulsion (NEP)* can power ion thrusters for faster crewed missions to Mars and beyond. Isotopes are also used in *scientific instruments*, such as spectrometers for analyzing planetary surfaces and neutron sources for detecting elements like water ice. Together, these applications make isotopes indispensable for extending mission lifetimes, enabling deep-space travel, and advancing scientific discovery far from the Sun’s reach.",
    image: space1,
  },
};

const CardDetailPage = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const card = cardDetails[title.toLowerCase()];

  if (!card) {
    return (
      <div className="p-10 text-center text-red-600 font-bold text-xl">
        Card not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">{card.title}</h1>

      <div className="space-y-4">
        <p className="text-gray-700 text-lg">{card.description}</p>
        <p className="text-gray-700 text-lg">{card.description2}</p>
      </div>

      {(card.image || card.image2) && (
        <div className="flex flex-col md:flex-row gap-6">
          {card.image && (
            <img
              src={card.image}
              alt={`${card.title} image 1`}
              className="rounded shadow-md w-full md:w-1/2 max-h-[400px] object-cover"
            />
          )}
          {card.image2 && (
            <img
              src={card.image2}
              alt={`${card.title} image 2`}
              className="rounded shadow-md w-full md:w-1/2 max-h-[400px] object-cover"
            />
          )}
        </div>
      )}

      {/* Quiz Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate(`/quiz`)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
};

export default CardDetailPage;
