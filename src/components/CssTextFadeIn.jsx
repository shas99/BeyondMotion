// // components/CssTextFadeIn.jsx
// import React from 'react';

// const CssTextFadeIn = ({ text, className }) => {
//   const letters = Array.from(text);

//   return (
//     <h1 className={`${className} flex`} style={{ overflow: 'hidden' }}>
//       {letters.map((letter, index) => (
//         <span
//           key={index}
//           className="inline-block animate-fadeIn" // Apply the base animation class
//           style={{
//             // CSS variable for sequential delay
//             '--i': index, 
//             // Inline style to use the custom property for delay
//             animationDelay: `calc(var(--i) * 0.05s)`, 
//             // Preserve space width
//             marginRight: letter === ' ' ? '0.25em' : '0',
//             // Initial state (optional, can also be handled by keyframes)
//             opacity: 0, 
//             transform: 'translateY(20px)'
//           }}
//         >
//           {letter}
//         </span>
//       ))}
//     </h1>
//   );
// };

// export default CssTextFadeIn;


// components/CssTextFadeIn.jsx
import React from "react";

const CssTextFadeIn = ({ text, className = "", style }) => {
  const letters = Array.from(text);

  return (
    <h1
      className={`
        ${className}
        flex
        flex-wrap
        justify-center
        max-w-full
        text-center
      `}
      style={{
        ...style,
        overflow: "hidden",
      }}
    >
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-fadeIn"
          style={{
            animationDelay: `${index * 0.05}s`,
            marginRight: letter === " " ? "0.25em" : "0",
            opacity: 0,
            transform: "translateY(20px)",
            whiteSpace: "pre",
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default CssTextFadeIn;
