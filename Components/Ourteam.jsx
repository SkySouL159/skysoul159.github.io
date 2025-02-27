"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/Team/dogs/sneha.jpg",
    image2:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/Team/dogs/nelson.jpg",
    image2:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/Team/dogs/rutvik.jpg",
    image2:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "/Team/dogs/pravin.jpg",
    image2:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "/Team/dogs/jiten.jpg",
    image2:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "/Team/dogs/hetal.jpg",
    image2:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Ourteam() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 mt-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
