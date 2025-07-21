import TestimonialCard from "../../ui/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9b19e99?w=150",
      name: "Sarah Johnson",
      title: "Marketing Director",
      review:
        "This product completely transformed how we approach our marketing campaigns. The results exceeded our expectations and the team support was outstanding throughout the entire process.",
      rating: 5,
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      name: "Michael Chen",
      title: "Startup Founder",
      review:
        "Incredible value for money. The features are robust and the user interface is intuitive. Would definitely recommend to other entrepreneurs.",
      rating: 4.5,
    },
  ];

  return (
    <>
      <h1>Testimonials</h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatar={testimonial.avatar}
              name={testimonial.name}
              title={testimonial.title}
              review={testimonial.review}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
