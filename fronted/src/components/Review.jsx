import React from "react";
import { motion } from "framer-motion";
// Add to your page/layout
import '@/styles/globals.css';

import { FaLinkedin, FaInstagram, FaStar } from "react-icons/fa";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiOpencv, 
  SiNumpy, 
  SiScikitlearn,
  SiFastapi  // ✅ Real icon exists
} from "react-icons/si";

const reviews = [
  {
    content: "Deployed production-grade AI models with 99.8% accuracy. Transformed our ML pipeline with scalable inference engines.",
    name: "Rahul Yadav",
    href: "https://www.linkedin.com/in/rahul-yadav-42b260341/",
    imgSrc: "/assets/rahul.jpeg",
    company: "PixelForge AI",
    techStack: [SiTensorflow, SiNumpy],
    rating: 5
  },
  {
    content: "Lightning-fast computer vision pipeline processing 10K+ images/sec. Optimized YOLO models reduced inference time by 87%.",
    name: "Narendra Yadav",
    href: "https://www.linkedin.com/in/narendra-yadav-0ba95b341/",
    imgSrc: "/assets/narendra.jpeg",
    company: "NexaWave Vision",
    techStack: [SiOpencv, SiPytorch],
    rating: 5
  },
  {
    content: "Productionized NLP models with Transformers. Achieved state-of-the-art sentiment analysis with 95% F1-score.",
    name: "Lalit Kumawat",
    href: "https://www.linkedin.com/in/lalit-98b79a324/",
    imgSrc: "/assets/lalit.jpeg",
    company: "CodeCraft AI",
    techStack: [SiFastapi, SiScikitlearn],  // ✅ Fixed: SiFastapi instead of SiHuggingFace
    rating: 5
  },
  {
    content: "Built scalable ML inference at edge with TensorRT optimization. Reduced model size by 70%.",
    name: "Rohit Yadav",
    href: "https://www.linkedin.com/in/rohit-yadav-14b4411b2/",
    imgSrc: "/assets/rohit.jpeg",
    company: "BrightWeb ML",
    techStack: [SiTensorflow, SiPytorch],
    rating: 5
  },
  {
    content: "Architected MLOps pipeline with automated model retraining and A/B testing. Deployed 50+ models.",
    name: "Mukesh Lilawat",
    href: "https://www.linkedin.com/in/mukeshlilawat1/",
    imgSrc: "/assets/mukesh.jpeg",
    company: "TechMosaic AI",
    techStack: [SiNumpy, SiScikitlearn],
    rating: 5
  },
  {
    content: "Real-time object detection system processing 4K video streams. Custom YOLOv8 achieved 92 FPS.",
    name: "Dileep Yadav",
    href: "https://www.instagram.com/dileep_yadav7362/",
    imgSrc: "/assets/dilip.png",
    company: "Skyline Vision",
    techStack: [SiOpencv, SiPytorch],
    rating: 5,
    isInstagram: true,
  },
];

// Rest of your component stays exactly the same...
const Review = () => {
  // ... (keep all the JSX exactly as before)
};

export default Review;
