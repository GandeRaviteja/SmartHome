import intellicamPro from "@/assets/products/intellicam-pro.jpg";
import intellilockSecure from "@/assets/products/intellilock-secure.jpg";
import intellibellConnect from "@/assets/products/intellibell-connect.jpg";
import intellibulbA19 from "@/assets/products/intellibulb-a19.jpg";
import intelliplugMini from "@/assets/products/intelliplug-mini.jpg";
import intelliswitchPanel from "@/assets/products/intelliswitch-panel.jpg";
import intellihubCore from "@/assets/products/intellihub-core.jpg";
import intellithermX from "@/assets/products/intellitherm-x.jpg";

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: string;
  features: string[];
  specifications: Record<string, string>;
};

export const categories = [
  { id: "security", name: "Security", icon: "Shield", description: "Protect your home with intelligent security solutions" },
  { id: "lighting", name: "Lighting", icon: "Lightbulb", description: "Smart lighting for every mood and moment" },
  { id: "automation", name: "Automation", icon: "Cpu", description: "Seamless control and automation for your home" },
  { id: "climate", name: "Climate", icon: "Thermometer", description: "Optimal comfort with smart climate control" },
];

export const products: Product[] = [
  {
    id: "intellicam-pro",
    name: "IntelliCam Pro",
    shortDescription: "4K smart security camera with AI-powered motion detection and night vision.",
    fullDescription: "The IntelliCam Pro delivers crystal-clear 4K video with advanced AI-powered motion detection that distinguishes between people, vehicles, and animals. With enhanced infrared night vision up to 30 meters, two-way audio, and weatherproof IP67 rating, it provides comprehensive 24/7 surveillance for your property. Seamlessly integrates with IntelliHub Core for unified smart home control.",
    category: "security",
    image: intellicamPro,
    features: [
      "4K Ultra HD resolution with HDR",
      "AI-powered smart motion detection",
      "30m infrared night vision",
      "Two-way audio with noise cancellation",
      "IP67 weatherproof rating",
      "Cloud & local storage options",
      "Real-time mobile alerts",
      "Works with IntelliHub Core",
    ],
    specifications: {
      "Resolution": "3840 x 2160 (4K UHD)",
      "Field of View": "160° wide-angle",
      "Night Vision": "Up to 30m",
      "Connectivity": "Wi-Fi 6 (2.4GHz/5GHz)",
      "Storage": "microSD (up to 256GB) / Cloud",
      "Weather Rating": "IP67",
      "Power": "PoE / DC 12V",
      "Dimensions": "78 x 78 x 130mm",
    },
  },
  {
    id: "intellilock-secure",
    name: "IntelliLock Secure",
    shortDescription: "Biometric smart door lock with fingerprint, PIN, and app access.",
    fullDescription: "IntelliLock Secure combines military-grade security with everyday convenience. Unlock your door using fingerprint recognition, custom PIN codes, physical keys, or your smartphone app. The advanced biometric sensor stores up to 100 fingerprints and provides instant access in under 0.3 seconds. Auto-lock, tamper alerts, and access logs keep your home protected at all times.",
    category: "security",
    image: intellilockSecure,
    features: [
      "Multi-mode access: fingerprint, PIN, key, app",
      "Stores up to 100 fingerprints",
      "0.3-second fingerprint recognition",
      "Auto-lock & tamper alerts",
      "Access history logging",
      "Emergency power port",
      "ANSI Grade 1 security rating",
      "Integrates with IntelliHub Core",
    ],
    specifications: {
      "Lock Type": "Deadbolt + Latch",
      "Biometric Sensor": "Capacitive fingerprint",
      "Fingerprint Capacity": "100 prints",
      "PIN Length": "4-10 digits",
      "Connectivity": "Bluetooth 5.0 + Zigbee",
      "Battery": "4x AA (12-month life)",
      "Material": "Zinc alloy + tempered glass",
      "Certification": "ANSI/BHMA Grade 1",
    },
  },
  {
    id: "intellibell-connect",
    name: "IntelliBell Connect",
    shortDescription: "HD video doorbell with two-way talk and motion-activated alerts.",
    fullDescription: "IntelliBell Connect lets you see, hear, and speak to visitors from anywhere. Featuring 2K HDR video, a 180° ultra-wide field of view, and advanced motion zones, you'll never miss a delivery or visitor. Pre-roll recording captures 4 seconds before motion events, giving you the complete picture every time.",
    category: "security",
    image: intellibellConnect,
    features: [
      "2K HDR video quality",
      "180° ultra-wide field of view",
      "Two-way talk with noise reduction",
      "Advanced motion zones",
      "4-second pre-roll recording",
      "Quick-release rechargeable battery",
      "Wired or battery powered",
      "Real-time visitor notifications",
    ],
    specifications: {
      "Resolution": "2560 x 1920 (2K)",
      "Field of View": "180° diagonal",
      "Audio": "Full-duplex two-way",
      "Connectivity": "Wi-Fi 6 (2.4GHz/5GHz)",
      "Power": "Wired (8-24V AC) / Battery",
      "Battery Life": "Up to 6 months",
      "Weather Rating": "IP65",
      "Dimensions": "128 x 48 x 25mm",
    },
  },
  {
    id: "intellibulb-a19",
    name: "IntelliBulb A19",
    shortDescription: "16 million color smart bulb with tunable white and voice control.",
    fullDescription: "Transform any room's atmosphere with the IntelliBulb A19. Choose from 16 million colors and tunable white temperatures from warm candlelight to energizing daylight. Schedule lighting scenes, sync with music, and control via voice assistants or the IntelliHome app. Energy-efficient LED technology uses 80% less power than traditional bulbs.",
    category: "lighting",
    image: intellibulbA19,
    features: [
      "16 million colors + tunable white",
      "2700K-6500K color temperature range",
      "800 lumens brightness",
      "Music sync capability",
      "Scheduling & automation",
      "Voice control compatible",
      "80% energy savings vs incandescent",
      "25,000-hour lifespan",
    ],
    specifications: {
      "Bulb Type": "A19 (E26 base)",
      "Lumens": "800 lm",
      "Wattage": "9W (60W equivalent)",
      "Color Range": "16 million + 2700K-6500K",
      "Connectivity": "Wi-Fi + Bluetooth",
      "Dimmable": "1%-100%",
      "Lifespan": "25,000 hours",
      "Certification": "Energy Star, FCC",
    },
  },
  {
    id: "intelliplug-mini",
    name: "IntelliPlug Mini",
    shortDescription: "Compact smart plug with energy monitoring and scheduling.",
    fullDescription: "Make any device smart with the IntelliPlug Mini. This compact plug adds remote control, scheduling, and energy monitoring to any standard outlet. Monitor real-time power consumption, set automated schedules, and control devices from anywhere. Its ultra-compact design won't block adjacent outlets.",
    category: "automation",
    image: intelliplugMini,
    features: [
      "Real-time energy monitoring",
      "Remote on/off control",
      "Scheduling & timers",
      "Away mode simulation",
      "Ultra-compact design",
      "15A / 1800W capacity",
      "Voice assistant compatible",
      "No hub required",
    ],
    specifications: {
      "Max Load": "15A / 1800W",
      "Voltage": "120V AC, 60Hz",
      "Connectivity": "Wi-Fi (2.4GHz)",
      "Energy Monitoring": "Real-time wattage & kWh",
      "Certifications": "ETL, FCC",
      "Dimensions": "52 x 52 x 38mm",
      "Weight": "68g",
      "Hub Required": "No",
    },
  },
  {
    id: "intelliswitch-panel",
    name: "IntelliSwitch Panel",
    shortDescription: "Touch-sensitive smart switch with LED indicators and scene control.",
    fullDescription: "Replace your traditional switches with the elegant IntelliSwitch Panel. Its capacitive touch surface with LED backlighting provides a modern, seamless look. Control individual lights or create multi-device scenes with a single touch. Compatible with existing wiring and available in 1-4 gang configurations.",
    category: "automation",
    image: intelliswitchPanel,
    features: [
      "Capacitive touch controls",
      "LED backlit indicators",
      "Scene & group control",
      "Available in 1-4 gang options",
      "Works with existing wiring",
      "Tempered glass panel",
      "OTA firmware updates",
      "Works with IntelliHub Core",
    ],
    specifications: {
      "Switch Type": "Capacitive touch",
      "Gangs": "1 / 2 / 3 / 4",
      "Max Load": "10A per gang",
      "Connectivity": "Zigbee 3.0",
      "Panel Material": "Tempered glass",
      "Backlight": "Adjustable LED",
      "Installation": "Standard wall box",
      "Hub Required": "IntelliHub Core",
    },
  },
  {
    id: "intellihub-core",
    name: "IntelliHub Core",
    shortDescription: "Central smart home hub supporting Zigbee, Z-Wave, and Wi-Fi devices.",
    fullDescription: "IntelliHub Core is the brain of your smart home. Supporting Zigbee 3.0, Z-Wave Plus, Wi-Fi, and Bluetooth, it unifies all your IntelliHome devices into one seamless ecosystem. Create powerful automations, manage up to 200 devices, and enjoy local processing for instant response times even without internet.",
    category: "automation",
    image: intellihubCore,
    features: [
      "Multi-protocol: Zigbee, Z-Wave, Wi-Fi, BLE",
      "Supports up to 200 devices",
      "Local processing for instant response",
      "Advanced automation engine",
      "Works without internet",
      "Automatic device discovery",
      "OTA updates for all connected devices",
      "Secure encrypted communication",
    ],
    specifications: {
      "Protocols": "Zigbee 3.0, Z-Wave Plus, Wi-Fi 6, BLE 5.0",
      "Max Devices": "200",
      "Processor": "Quad-core ARM Cortex-A55",
      "Memory": "2GB RAM / 16GB eMMC",
      "Connectivity": "Ethernet + Wi-Fi 6",
      "Power": "USB-C (5V/2A)",
      "Dimensions": "110 x 110 x 32mm",
      "Weight": "185g",
    },
  },
  {
    id: "intellitherm-x",
    name: "IntelliTherm X",
    shortDescription: "AI-powered smart thermostat with learning schedules and energy reports.",
    fullDescription: "IntelliTherm X learns your comfort preferences and optimizes heating and cooling automatically. Its AI engine analyzes weather forecasts, occupancy patterns, and energy rates to minimize costs while maximizing comfort. The high-resolution touchscreen display shows real-time climate data, and detailed energy reports help you track savings over time.",
    category: "climate",
    image: intellithermX,
    features: [
      "AI-powered learning algorithm",
      "Weather-adaptive scheduling",
      "Occupancy sensing",
      "High-res color touchscreen",
      "Detailed energy reports",
      "Multi-zone support",
      "Geofencing auto-adjust",
      "Compatible with most HVAC systems",
    ],
    specifications: {
      "Display": "3.5\" IPS touchscreen",
      "Sensors": "Temperature, humidity, occupancy, ambient light",
      "Connectivity": "Wi-Fi (2.4GHz/5GHz)",
      "HVAC Compatibility": "Most 24V systems",
      "Power": "24V AC (C-wire) / Battery backup",
      "Accuracy": "±0.5°F / ±0.3°C",
      "Dimensions": "120 x 120 x 28mm",
      "Certifications": "Energy Star, FCC",
    },
  },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getProductsByCategory = (category: string) => products.filter((p) => p.category === category);
