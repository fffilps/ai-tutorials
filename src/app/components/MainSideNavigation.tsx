"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxChevronDown, RxChevronUp } from "react-icons/rx";

type Props = {};

const MainSideNavigation = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState("Introduction");

  const tabSelection = (currentTab: string) => {
    setSelectedTab(currentTab);
  };

  let tutorialTabs = [
    {
      title: "Introduction",
      sections: [
        "What is a model?",
        "What is a prompt and how do I do it?",
        "What is a negative prompt",
        "Aspect Ratio and Aspect Ratio in Gen-AI",
        "Scales",
        "Sampler",
        "Steps",
        "VAE",
        "Clip Skip",
        "Seed",
      ],
    },
    { title: "Lesson 1" },
    { title: "Lesson 2" },
    { title: "Lesson 3" },
    { title: "Tutorial 1" },
  ];

  const resourceLinks = [{link:'https://microsoft.github.io/AI-For-Beginners/'}]

  return (
    <aside className="bg-gray-500 px-4 flex-col justify-evenly items-center h-full">
      <div className="flex justify-start items-center">
        <Image
          src={"/Ai-tutorial-Logos.gif"}
          alt="AI Tutorial Logo Animation"
          height={250}
          width={250}
        />
      </div>
      <div className="flex flex-col">
        <ol className="flex flex-col gap-1 justify-center items-start">
          {tutorialTabs.map((tab, index) => (
            <div
              onClick={() => tabSelection(tab.title)}
              className="rounded-md px-2 py-1"
              key={`${index}: ${tab}`}
            >
              {tab.title == selectedTab ? (
                <li className="bg-black text-white rounded-md px-2 py-1">
                  {tab.title}
                </li>
              ) : (
                <li className="hover:text-white hover:bg-black px-2 py-1 rounded-md">{tab.title}</li>
              )}
              {tab.title == selectedTab ? (<div><RxChevronUp /> 
              <ol className="flex flex-col gap-1">
                {tab.sections?.map((section, index) => (
                  <li className="text-sm list-disc py-1 hover:text-white hover:bg-black p-1 rounded" key={index}>{section}</li>
                ))}
              </ol>
              </div>
              )
              : <RxChevronDown />}
            </div>
          ))}
        </ol>
      </div>

      <div>
        Resources & Links
      </div>
    </aside>
  );
};

export default MainSideNavigation;
