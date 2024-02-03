// import logo from "../assets/logo.jpg";
export default function Home() {
  console.log("Home components rendeed");
  return (
    <main className="Home">
      <div className="summary">
        {/* <img className="picture" src={logo} alt="Olayuwa Timihin Ebenezer" /> */}

        <p>
          Hi, my name is <br /> <span className="name">Timilehin Olayuwa</span>{" "}
          <br /> <span className="meta">Meta </span>
          <span className="headline">
             Certified Creative front-end developer.
          </span>
        </p>
        <p>
          {" "}
          I am a highly skilled and certified Frontend Developer, whose
          expertise lies in <span className="skill">HTML, CSS,</span> and{" "}
          <span className="skill">JavaScript</span> to create dynamic
          interfaces. Specializing in <span className="skill">React.js</span>, I
          bring a wealth of <span className="skill">UI/UX</span> knowledge to
          enhance user engagement. I am proficient in{" "}
          <span className="skill">Version Control</span> and{" "}
          <span className="skill">Bootstrap</span> which keeps me at the
          forefront of technology. My confidence in my abilities allows me to
          contribute my skills effectively in innovative and collaborative
          frontend projects, where <span className="skill">UI/UX</span>,
          <span className="skill">Version Control</span>, and{" "}
          <span className="skill">Bootstrap</span>converge seamlessly in my
          toolkit
        </p>
        <div className="buttons">
          <button>Contact me</button>
          <button>Download my Resume</button>
        </div>
      </div>
    </main>
  );
}
