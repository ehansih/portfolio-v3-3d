import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  { num: "01", name: "Silent Phone Detector", cat: "Android · Security", tools: "Kotlin, Android, HIBP API, Room DB", img: "/images/placeholder.webp", url: "https://github.com/ehansih/silent-phone-detector" },
  { num: "02", name: "Universal AI Gateway", cat: "AI · Python", tools: "Python, FastAPI, Claude, ChatGPT, Gemini", img: "/images/placeholder.webp", url: "https://github.com/ehansih/universal-ai-gateway" },
  { num: "03", name: "OpenCTI Report Generator", cat: "Threat Intel · Python", tools: "Python, OpenCTI, Claude AI, PDF", img: "/images/placeholder.webp", url: "https://github.com/ehansih/opencti-report-generator" },
  { num: "04", name: "TimeEcho Frontend", cat: "Web · TypeScript", tools: "Next.js 14, TypeScript, Tailwind", img: "/images/placeholder.webp", url: "https://github.com/ehansih/timeecho-frontend" },
  { num: "05", name: "MACP Protocol", cat: "Agents · Python", tools: "Python, Claude, ChatGPT, REST", img: "/images/placeholder.webp", url: "https://github.com/ehansih/macp-protocol" },
  { num: "06", name: "K8s Security", cat: "Cloud Security", tools: "Kubernetes, Docker, OpenShift", img: "/images/placeholder.webp", url: "https://github.com/ehansih/K8s_security" },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document.querySelector(".work-container")!.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }
    setTranslateX();
    let timeline = gsap.timeline({
      scrollTrigger: { trigger: ".work-section", start: "top top", end: `+=${translateX}`, scrub: true, pin: true, id: "work" },
    });
    timeline.to(".work-flex", { x: -translateX, ease: "none" });
    return () => { timeline.kill(); ScrollTrigger.getById("work")?.kill(); };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>
        <div className="work-flex">
          {projects.map((p, i) => (
            <div className="work-box" key={i}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{p.num}</h3>
                  <div>
                    <h4><a href={p.url} target="_blank" rel="noopener" style={{color:"inherit",textDecoration:"none"}}>{p.name}</a></h4>
                    <p>{p.cat}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{p.tools}</p>
              </div>
              <WorkImage image={p.img} alt={p.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
