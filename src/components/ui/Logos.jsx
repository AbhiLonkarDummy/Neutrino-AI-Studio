import logo1 from "../../assets/logos/logo1.svg";
import logo2 from "../../assets/logos/logo2.svg";
import logo3 from "../../assets/logos/logo3.svg";
import logo4 from "../../assets/logos/logo4.svg";
import logo5 from "../../assets/logos/logo5.svg";
import logo6 from "../../assets/logos/logo6.svg";

const CustomerLogos = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-8 items-center justify-items-center">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Company Logo ${index + 1}`}
          className="h-10 w-auto object-contain mx-auto"
        />
      ))}
    </div>
  );
};

export default CustomerLogos;
