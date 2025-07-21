"use client";
import UsecaseCard from "../../ui/UsecaseCard";
import Doctor from "src/assets/illustrations/Doctors.svg";

const usecases = [
  {
    title: "Smart Triage",
    label: "Healthcare",
    description:
      "Discover how machine learning models are reducing diagnosis time.",
    imageUrl: {Doctor},
    href: "/use-case/healthcare",
  },
  {
    title: "AI Chatbot",
    label: "Customer Service",
    description:
      "Engage customers 24/7 with our intelligent conversational AI.",
    imageUrl: "src/assets/illustrations/Setup.svg",
    href: "/use-case/chatbot",
  },
  {
    title: "Predictive Analytics",
    label: "Operations",
    description:
      "Forecast trends and optimize operations proactively using data.",
    imageUrl: "/assets/illustrations/Analytics.svg",
    href: "/use-case/analytics",
  },
  {
    title: "Automated Reports",
    label: "Finance",
    description: "Generate real-time financial reports with one click.",
    imageUrl: "/assets/illustrations/Reports.svg",
    href: "/use-case/reports",
  },
  {
    title: "Smart Scheduling",
    label: "HR",
    description: "Optimize your team's calendar automatically.",
    imageUrl: "/assets/illustrations/Scheduling.svg",
    href: "/use-case/scheduling",
  },
];

const UseCases = () => {
  return (
    <section id="usecases" className="w-full bg-gray-100 py-10">
      <div className="max-w-[1140px] px-[10px] mx-auto">
        <div className="heading flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight">
            <span className="italic">
              Use Cases
            </span>
          </h2>
          <p className="mt-1 text-lg sm:text-md max-w-3xl mx-auto leading-snug">
            Demonstrating value one case at a time
          </p>
        </div>

        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Example placeholders for use case cards */}
          <UsecaseCard
            color="#039BE5"
            title="Smart Triage"
            label="Healthcare"
            description="Discover how machine learning models are reducing diagnosis."
            imageUrl="src\assets\illustrations\Doctors.svg"
          />
          <UsecaseCard
            color="#E3A500"
            title="AI Chatbot"
            label="Customer Service"
            description="Engage customers 24/7 with our intelligent conversational AI."
            imageUrl="src\assets\illustrations\Creator.svg"
          />
          <UsecaseCard
            color="#F55D33"
            title="Predictive Analytics"
            label="Operations"
            description="Forecast trends and optimize operations proactively using data."
            imageUrl="src\assets\illustrations\Setup.svg"
          />
        </div>
      </div>
    </section>
    // <div className="relative w-full max-w-screen-lg mx-auto">
    //   <Carousel
    //     opts={{ align: "start", loop: false }}
    //     className="overflow-hidden"
    //   >
    //     {/* Slide Track */}
    //     <CarouselContent className="-ml-4 flex">
    //       {usecases.map((uc, idx) => (
    //         <CarouselItem
    //           key={idx}
    //           className="pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
    //         >
    //           <UsecaseCard {...uc} />
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>

    //     {/* Controls Below */}
    //     <div className="flex justify-center gap-4 mt-6">
    //       <CarouselPrevious
    //         className="p-2 bg-white rounded-full shadow-lg"
    //         aria-label="Previous slide"
    //       >
    //         <MoveRight className="h-6 w-6 rotate-180 text-gray-700" />
    //       </CarouselPrevious>
    //       <CarouselNext
    //         className="p-2 bg-white rounded-full shadow-lg"
    //         aria-label="Next slide"
    //       >
    //         <MoveRight className="h-6 w-6 text-gray-700" />
    //       </CarouselNext>
    //     </div>
    //   </Carousel>
    // </div>
    // <div className="w-full max-w-screen-lg mx-auto">
    //   <Carousel opts={{ align: "start" }} className="overflow-hidden">
    //     <CarouselContent className="flex gap-6 px-4">
    //       {usecases.map((uc, idx) => (
    //         <CarouselItem
    //           key={idx}
    //           className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
    //         >
    //           <UsecaseCard {...uc} />
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>

    //     {/* Controls container below */}
    //     <div className="flex justify-center items-center gap-4 mt-6">
    //       <CarouselPrevious className="p-2 bg-white rounded-full shadow-lg">
    //         <MoveRight className="h-6 w-6 rotate-180 text-gray-700" />
    //       </CarouselPrevious>
    //       <CarouselNext className="p-2 bg-white rounded-full shadow-lg">
    //         <MoveRight className="h-6 w-6 text-gray-700" />
    //       </CarouselNext>
    //     </div>
    //   </Carousel>
    // </div>
  );
};

export default UseCases;
