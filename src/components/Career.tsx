import "./styles/Career.css";

const careers = [
  { role: "Portfolio Manager", company: "Nokia · Noida, India", year: "2026", desc: "Leading product portfolio management for Nokia's 5G core security offerings. Driving strategy, roadmap and go-to-market for carrier-grade security products globally." },
  { role: "Domain Architect", company: "Nokia · Noida, India", year: "2025", desc: "Designing complex solutions for hybrid/public/private clouds for Nokia 5G core. Deep expertise in AWS EKS and OpenShift deployments at carrier scale." },
  { role: "Solutions Architect", company: "Nokia · Noida, India", year: "2022", desc: "Solution Architect for 5G core — SPOC for Sky UK programme. Security & vulnerability testing for cloud-native applications across public and hybrid clouds." },
  { role: "Distinguished Member of Technical Staff", company: "Mavenir · Delhi, India", year: "2020", desc: "Led VoLTE implementation for the Indian Army. DevOps/delivery lead for cloud containerisation using Docker & Kubernetes. RedHat OpenStack deployments." },
  { role: "SME – System Integration", company: "Nokia · India", year: "2017", desc: "Delivered multiple global projects — DPI solution integration with Nokia CMG, Rakuten VoLTE, ICE Norway E2E VoLTE UAT. Onsite UK support for 2 years." },
  { role: "Technical Lead", company: "Jio · Mumbai, India", year: "2016", desc: "Technical Lead for IMS-VoLTE Service Excellence across one of the world's largest mobile networks." },
  { role: "Senior Application Support Engineer", company: "Ericsson · Gurugram, India", year: "2010", desc: "Global support for Ericsson Charging System, prepaid IN. Deep SS7 and Diameter protocol expertise across all major telecom platforms." },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          {careers.map((c, i) => (
            <div className="career-info-box" key={i}>
              <div className="career-timeline">
                <div className="career-dot"></div>
              </div>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{c.role}</h4>
                  <h5>{c.company}</h5>
                </div>
                <h3>{c.year}</h3>
              </div>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
