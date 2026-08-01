import combatVessels from "../../../assets/dgma-logo.jpg";
import weaponSystems from "../../../assets/dgma-logo.jpg";
import sensors from "../../../assets/dgma-logo.jpg";
import communications from "../../../assets/dgma-logo.jpg";
import supportSystems from "../../../assets/dgma-logo.jpg";
import ammunition from "../../../assets/dgma-logo.jpg";

const navalProducts = [
  {
    id: "01",
    title: "Naval Combat Vessels",
    image: combatVessels,
    description:
      "Advanced naval platforms designed for coastal defence, maritime security and modern naval operations.",
    products: [
      "Patrol Boats",
      "Fast Attack Craft",
      "Missile Boats",
      "Corvettes",
      "Offshore Patrol Vessels",
      "Support Vessels",
    ],
  },

  {
    id: "02",
    title: "Naval Weapon Systems",
    image: weaponSystems,
    description:
      "Integrated naval weapon systems providing precision, firepower and operational superiority.",
    products: [
      "Naval Guns",
      "Remote Weapon Stations",
      "Missile Systems",
      "Torpedo Systems",
      "Close-In Weapon Systems",
    ],
  },

  {
    id: "03",
    title: "Naval Electronics & Sensors",
    image: sensors,
    description:
      "Advanced surveillance and navigation systems supporting modern maritime missions.",
    products: [
      "Naval Radar",
      "Sonar Systems",
      "Fire Control Systems",
      "Electro-Optical Systems",
      "Navigation Systems",
    ],
  },

  {
    id: "04",
    title: "Maritime Communication Systems",
    image: communications,
    description:
      "Reliable communication technologies enabling secure coordination during naval operations.",
    products: [
      "Naval Communications",
      "Satellite Communications",
      "Data Links",
      "Tactical Radio Systems",
      "Integrated Networks",
    ],
  },

  {
    id: "05",
    title: "Shipboard Support Systems",
    image: supportSystems,
    description:
      "Essential engineering systems ensuring reliable performance of naval platforms.",
    products: [
      "Marine Engines",
      "Power Distribution",
      "Auxiliary Systems",
      "HVAC Systems",
      "Damage Control Equipment",
    ],
  },

  {
    id: "06",
    title: "Naval Ammunition & Defence Equipment",
    image: ammunition,
    description:
      "Mission-ready ammunition and defence equipment supporting maritime operations.",
    products: [
      "Naval Ammunition",
      "Missiles",
      "Torpedoes",
      "Naval Mines",
      "Countermeasure Systems",
    ],
  },
];

export default navalProducts;