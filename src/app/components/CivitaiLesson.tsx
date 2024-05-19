"use client"
import React, { useEffect } from "react";
import { Civitai, Scheduler } from "civitai";

type Props = {};

const CivitaiLesson = (props: Props) => {

    useEffect(() => {
        console.log(response);
      }, []);


  const civitai = new Civitai({
    auth: process.env.NEXT_PUBLIC_CIVITAI_API_KEY!,
  });

  const input = {
    model: "urn:air:sd1:checkpoint:civitai:4201@130072",
    params: {
      prompt:
        "RAW photo, face portrait photo of 26 y.o woman, wearing black dress, happy face, hard shadows, cinematic shot, dramatic lighting",
      negativePrompt:
        "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3)",
      scheduler: Scheduler.EULER_A,
      steps: 20,
      cfgScale: 7,
      width: 512,
      height: 512,
      clipSkip: 2,
    },
    webhook: "http://localhost:3000/webhook",
  };

  const response = async () => await civitai.image.fromText(input, true);
  console.log(response)


  return <div>CivitaiLesson</div>;
};

export default CivitaiLesson;
