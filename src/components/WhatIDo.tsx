import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>SECURITY</h3>
              <h4>Telecom & 5G Security</h4>
              <p>End-to-end 5G core security architecture, IMSI-catcher detection, vulnerability assessment and carrier-grade security product strategy for global operators.</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">5G Core</div>
                <div className="what-tags">IMSI Detection</div>
                <div className="what-tags">SS7</div>
                <div className="what-tags">VoLTE</div>
                <div className="what-tags">IMS</div>
                <div className="what-tags">OpenCTI</div>
                <div className="what-tags">AWS EKS</div>
                <div className="what-tags">OpenShift</div>
                <div className="what-tags">Kubernetes</div>
                <div className="what-tags">Android</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>STRATEGY</h3>
              <h4>Product & AI Strategy</h4>
              <p>Roadmap leadership, go-to-market execution, and AI-driven automation. Building universal gateways, multi-agent protocols, and threat intelligence pipelines.</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Product Roadmap</div>
                <div className="what-tags">GTM</div>
                <div className="what-tags">Claude AI</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">LLM Gateway</div>
                <div className="what-tags">Multi-Agent</div>
                <div className="what-tags">CTI</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
