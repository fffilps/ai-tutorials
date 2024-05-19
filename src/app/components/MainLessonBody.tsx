import Link from "next/link";
import React from "react";


type Props = {};

const MainLessonBody = (props: Props) => {
  const topics = [
    {
      topic: "What is a model?",
      description: "Models are the resources you're generating with. Using a different base model can drastically alter the style and composition of images, while adding additional resource can change the characters, concepts and objects.",
      tag: "#modelInfo",
    },
    {
      topic: "What is a prompt and how do I do it?",
      description: "what you'd like to generate.",
      tag: "#promptInfo",
    },
    {
      topic: "What is a negative prompt",
      description: "aspects you'd like to avoid in the negative prompt.",
      tag: "#negativePrompt",
    },
    {
      topic: "Aspect Ratio and Aspect Ratio in Gen-AI",
      description: "Information goes here.",
      tag: "#aspectRatio",
    },
    { topic: "Scales", description: "Controls how closely the image generation follows the text prompt.", tag: "#scales" },
    {
      topic: "Sampler",
      description: "Information goes here.",
      tag: "#sampler",
    },
    { topic: "Steps", description: "The number of iterations spent generating an image.", tag: "#steps" },
    { topic: "VAE", description: "These provide additional color and detail improvements.", tag: "#vae" },
    {
      topic: "Clip Skip",
      description: "Information goes here.",
      tag: "#clipSkip",
    },
    { topic: "Seed", description: "Information goes here.", tag: "#seed" },
  ];
  return (
    <div className="flex flex-col p-4 gap-4">
      <div>
        <h3 className="text-xl font-semibold">Things we will learn about:</h3>
        <ul>
          {topics.map((topic) => (
            <li className="text-lg underline" key={topic.topic}>
              <Link href={`${topic.tag}`}>{topic.topic}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        {topics.map((topic) => (
          <div id={topic.tag} className="flex flex-col py-2" key={topic.topic}>
            <div className="text-lg font-semibold underline">{topic.topic}</div>
            <div>{topic.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainLessonBody;
