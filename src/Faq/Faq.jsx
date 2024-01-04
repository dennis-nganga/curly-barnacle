import "./Faq.css";

function Faq() {
  return (
    <>
      <div className="faq__wrapper">
        <div className="faq__app q1">
          <h4>What are your official Names? </h4>
          <p> Dennis K. Nganga </p>
        </div>
        <div className="faq__app q2">
          <h4>What do you hope to achieve in your career? </h4>
          <p>
            create products that are intuitive to use , work with great people
            and do this for as long as i can
          </p>
        </div>
        <div className="faq__app q3">
          <h4>What programming languages do you know? </h4>
          <p>
            Passionate about crafting code in Vanilla JavaScript and Python, and
            eager to explore the world of TypeScript(js) for even more dynamic
            and innovative programming adventures
          </p>
        </div>
        <div className="faq__app q4">
          <h4>What are you working on nowadays? </h4>
          <p>
            Currently building an website for 'Shairzs hair'.During my free time
            am contributing to open source projects that align with my intrests{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Faq;
