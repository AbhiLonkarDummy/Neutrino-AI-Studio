import React from "react";
import { Star, StarHalf, Quote } from "lucide-react";

const TestimonialCard = ({
  avatar,
  name,
  title,
  review,
  rating = 5,
  className = "",
}) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-5 h-5 text-amber-500 fill-amber-500"
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-5 h-5 text-amber-500 fill-amber-500"
        />
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-slate-300" />
      );
    }

    return stars;
  };

  return (
    <figure
      className={`
      relative w-full max-w-[360px] mx-auto
      bg-white rounded-2xl shadow-sm
      border border-slate-100
      p-8 md:p-10
      ${className}
    `}
    >
      <Quote className="absolute top-8 left-8 w-16 h-16 text-slate-100" />

      <figcaption className="relative flex items-center gap-4 mb-6">
        <img
          src={avatar || "/api/placeholder/48/48"}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-offset-2 ring-slate-200"
          loading="lazy"
        />
        <div>
          <div className="font-semibold text-slate-900">{name}</div>
          <div className="mt-0.5 text-sm text-slate-600">{title}</div>
        </div>
      </figcaption>

      <blockquote>
        <div className="flex items-center gap-1 mb-4">
          {renderStars(rating)}
        </div>
        <p className="text-base leading-relaxed text-slate-700">“{review}”</p>
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;
