import type { ExperienceItem } from "../models/ExperienceItem";

export const experiences: ExperienceItem[] = [
  {
    title: "Mobile Developer",
    company: "Navigate Technologies",
    period: "2022–2025",
    highlights: [
      "Internal Configuration App: Developed a .NET MAUI mobile app for configuring and testing vehicle units via commands, streamlining field technician workflows. One of the earliest MAUI apps adopted in production.",
      "Developed a cross-platform (iOS/Android) mobile application for professional drivers using React Native and Expo.",
      "Implemented trip management, cargo and CMR editing, incident reporting, and work log tracking functionality.",
      "Enabled real-time data synchronization using RESTful APIs and SQLite for robust offline support.",
      "Employed Expo Router for file-based routing and modular screen design.",
      "Enhanced user experience with custom UI components, localization, and biometric authentication (FaceID/Fingerprint).",
      "Integrated with native iOS development tools (Xcode, CocoaPods) to ensure smooth deployment and testing.",
      "Maintained high code quality with modular controllers, reusable components, and unit testing using Jest.",
    ],
    tech: [
      "React Native",
      ".NET MAUI",
      "Expo",
      "TypeScript",
      "SQLite",
      "REST APIs",
      "Expo Router",
      "Jest",
      "Biometrics",
      "Xcode",
      "CocoaPods",
      "JWT Auth",
    ],
  },
  // Add more experiences here in the future
];
