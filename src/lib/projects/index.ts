import type { Project } from "../types";

import { nasa_proposal_estimator } from "./nasa-proposal-estimator";
import { local_llm_chat } from "./local-llm-chat";
import { agentic_patterns_mvps } from "./agentic-patterns-mvps";
import { game_clawtroller } from "./game-clawtroller";
import { ux_critique_tool } from "./ux-critique-tool";
import { hyperfocus_planner } from "./hyperfocus-planner";
import { joust_resurrected } from "./joust-resurrected";
import { inflation_calculator } from "./inflation-calculator";
import { asteroids_p5_ts } from "./asteroids-p5-ts";
import { es_vector_math } from "./es-vector-math";
import { motion_and_tween } from "./motion-and-tween";
import { system77_typescript } from "./system77-typescript";
import { jira_python_book } from "./jira-python-book";
import { react_with_clean_architecture } from "./react-with-clean-architecture";
import { pomodoro_vscode } from "./pomodoro-vscode";
import { hermes_mission_control } from "./hermes-mission-control";

export const SEED_PROJECTS: Project[] = [
  nasa_proposal_estimator,
  local_llm_chat,
  agentic_patterns_mvps,
  game_clawtroller,
  ux_critique_tool,
  hyperfocus_planner,
  joust_resurrected,
  inflation_calculator,
  asteroids_p5_ts,
  es_vector_math,
  motion_and_tween,
  system77_typescript,
  jira_python_book,
  react_with_clean_architecture,
  pomodoro_vscode,
  hermes_mission_control,
];

export const ABOUT = {
  name: "Rick Segrest",
  role: "Senior Software Engineer — NASA Engineering Materials (EM04)",
  bio: "Senior Software Engineer with 20+ years of experience at the intersection of UI/UX Design and Complex Systems Visualization. I'm a Full Stack Application Developer for NASA's Engineering Materials (EM04), building model-based systems-engineering tools that help scientists and engineers visualize the future of space exploration. I'm passionate about making complex technical tools accessible — bridging heavy technical data and human-readable interfaces. Background in Computer Science (BS), Modeling & Simulation (MS), and Visual Communication (BFA). NASA Team Innovation Award (2025).",
  expertise: [
    "Frontend: React, TypeScript, Semantic-UI, IBM Carbon, Material-UI, D3",
    "Backend: Python (Flask), Node.js, PostgreSQL, MongoDB",
    "DevOps: Docker, Git, Atlassian API automation",
  ],
  links: {
    github: "https://github.com/rsegrest",
    email: "rsegrest77+ghpg@gmail.com",
  },
};
