import { Component, MoveRight } from "lucide-react";
// import Doctors from "../../assets/illustrations/Doctors.svg";

// const UsecaseCard = () => {
//   return (
//     <div className="relative w-[360px] h-[385px] bg-white rounded-lg overflow-hidden">
//       <div className="h-9 bg-[#bdbcbc1a] rounded-[8px_8px_0px_0px] overflow-hidden absolute w-[360px] top-0 left-0">
//         <Component className="!absolute !w-4 !h-4 !top-2.5 !left-4" />
//         <div className="absolute top-[9px] left-10 [font-family:'Inter-Regular',Helvetica] font-normal text-[#039be5] text-sm tracking-[1.12px] leading-4 whitespace-nowrap">
//           Healthcare
//         </div>
//       </div>

//       <div className="absolute w-[360px] h-[348px] top-9 left-0">
//         <div className="h-[348px] absolute w-[360px] top-0 left-0">
//           <div className="flex-col w-[328px] gap-2 top-6 left-4 flex items-start relative">
//             <div className="justify-between self-stretch w-full flex-[0_0_auto] flex items-start relative">
//               <div className="relative w-fit mt-[-1.00px] [font-family:'Outfit-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[30px] whitespace-nowrap">
//                 Smart Triage
//               </div>

//               <div className="relative w-8 h-8 bg-[#039be5] rounded-[50px]">
//                 <MoveRight className="absolute w-3 h-3 top-2.5 left-2.5" />
//               </div>
//             </div>

//             <p className="relative w-[235px] [font-family:'Outfit-Regular',Helvetica] font-normal text-text-secondary text-base tracking-[0] leading-4">
//               Discover how machine learning models are reducing diagnosis time
//               by 40%.
//             </p>
//           </div>
//         </div>

//         <img
//           className="absolute w-[290px] h-[235px] top-[114px] left-8"
//           alt="Doctors bro"
//           src={Doctors}
//         />
//       </div>
//     </div>
//   );
// };

// export default UsecaseCard;

import React, { useState } from "react";

// Arrow Icon (SVG)
const Arrow = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const UsecaseCard = ({
  title,
  description,
  imageUrl,
  label,
  href = "#",
  color,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="w-[360px] min-h-[360px] border border-[var(--card-border)]  bg-white rounded-lg overflow-hidden transition-shadow duration-200 ease-in-out"
      style={{ cursor: isHovered ? "pointer" : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Gray Header */}
      <div className="flex items-center h-[36px] bg-[var(--card-label-bg)] gap-[8px]">
        <Component className="h-4 w-4 ml-4" color={color}></Component>
        <span className="card-label text-lg" style={{ color: color }}>
          {label}
        </span>
      </div>
      {/* Title and Arrow */}
      <div className="flex justify-between items-center px-4 mt-3 mx-4">
        <h2 className="card-title">{title}</h2>
        <div
          className={`w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-transform duration-300`}
          style={{ backgroundColor: color}}
        >
          <Arrow
            className="w-6 h-6 text-white"
            style={{
              transform: `rotate(${isHovered ? "0deg" : "-45deg"})`,
              transition: "transform 0.3s",
            }}
          />
        </div>
      </div>
      {/* Description Paragraph */}
      <p className="text-md font-normal mt-1 px-4 w-[300px]">{description}</p>
      {/* Illustration/Image (cropped bottom, centered, scales on hover) */}
      <div className="relative mt-6">
        <img
          src={imageUrl}
          alt="illustration"
          className={`absolute h-[240px] w-[240px] left-1/2 -translate-x-1/2 -translate-y-10 transition-transform duration-300 ${
            isHovered ? "scale-[1.02]" : ""
          }`}
          draggable={false}
        />
      </div>
    </a>
  );
};

export default UsecaseCard;
