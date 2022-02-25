import React from "react";

function SeeSharpGuideTitle() {
  const date = new Date();
  const subject = (date.getSeconds() % 2 === 0) ? "React" : "C#";
  const title =`${subject} 교과서 학습 가이드`;
  const titleStyles = {color: '#C0FFEE', textDecoration: "underline"};
  return (
    <header className="seesharp-guide-title">
      <h2 style={titleStyles}>{title}</h2>
    </header>
  )
}

export default SeeSharpGuideTitle;