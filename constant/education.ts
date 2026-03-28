import { GraduationCapIcon, BrainCircuitIcon, BookOpenIcon, TrophyIcon, PercentIcon } from "lucide-react";

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "National University of Modern Languages (NUML)",
    period: "Feb 2022 — Jan 2026",

    description:
      "Strong foundation in Data Structures, OOP, DBMS, and Web Development with hands-on experience in full-stack MERN applications.",

    coursework: [
      "Data Structures",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Engineering",
      "Web Development",
    ],

    FYP: "AI-Based Credit Card Fraud Detection System",

    FYP_Description:
      "Developed a hybrid AI model combining machine learning and rule-based logic to detect fraudulent credit card transactions, achieving 98% accuracy with minimal false positives.",

    technologies: ["Python", "Machine Learning", "Scikit-learn", "Rule-Based Systems"],

    StatsCard: [
      {
        title: "CGPA",
        value: "3.83",
        icon: GraduationCapIcon,
      },
      {
        title: "Duration",
        value: "4 Years",
        icon: BookOpenIcon,
      },
      {
        title: "Focus",
        value: "MERN + AI",
        icon: BrainCircuitIcon,
      },
      {
        title: "FYP Results",
        value: "98% Accuracy",
        icon: TrophyIcon,
      },
    ],
  },

  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "FG Degree College",
    period: "Aug 2019 — July 2021",

    description:
      "Built foundational knowledge in programming, mathematics, and computer systems.",

    coursework: ["Programming Fundamentals", "Mathematics", "Computer Science Basics"],

    StatsCard: [
      {
        title: "Grade",
        value: "A",
        icon: GraduationCapIcon,
      },
      {
        title: "Percentage",
        value: "70.09%",
        icon: PercentIcon,
      },
    ],
  },
];
