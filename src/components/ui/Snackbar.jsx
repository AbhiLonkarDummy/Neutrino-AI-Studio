import { PartyPopper } from "lucide-react"; // Optional: use Heroicons/Lucide or any icon lib
const Snackbar = () => {
  return (
    // <div className="flex items-center gap-2 py-2 px-4 bg-[var(--brand-secondary-color)] rounded-full">
    //   <span className="flex text-sm items-center gap-1 my-[4px] ml-[4px] rounded-full bg-[var(--brand-primary-color)] px-4 py-2 text-white">
    //     <PartyPopper className="h-4 w-4" />
    //     What’s New!
    //   </span>
    //   <span className="text-[var(--brand-primary-color)] text-md  pr-4">
    //     Checkout our new Healthcare Use Case now!
    //   </span>
    // </div>
    <div className="flex items-center gap-1 sm:gap-2 py-2 px-2 sm:px-4 bg-[var(--brand-secondary-color)] rounded-full max-w-full overflow-hidden">
      <span className="flex text-xs sm:text-sm items-center gap-1 my-[2px] sm:my-[4px] ml-[2px] sm:ml-[4px] rounded-full bg-[var(--brand-primary-color)] px-2 sm:px-4 py-1 sm:py-2 text-white whitespace-nowrap flex-shrink-0">
        <PartyPopper className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
        What's New!
      </span>
      <span
        className="
    text-[var(--brand-primary-color)]
    text-xs sm:text-base
    pr-2 sm:pr-4
    leading-tight
    min-w-0 truncate
  "
      >
        Checkout our new Use Case now!
      </span>
    </div>
  );
};

export default Snackbar;
