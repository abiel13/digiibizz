import { benefits } from "@/constants";
import React from "react";

const BenefitCard = ({ benefit }: { benefit: (typeof benefits)[0] }) => {
  return (
    <div className="text-center flex-col md:flex md:items-start md:text-left lg:block lg:text-center">
      <div className="md:flex-shrink-0 flex justify-center">
        <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-900">
          <benefit.Icon />
        </div>
      </div>

      <div className="mt-6 md:mt-0 lg:ml-0 lg:mt-6">
        <h3 className="text-base font-medium text-gray-900">{benefit.name}</h3>
        <p className="tex-sm mt-3 text-muted-foreground">
          {benefit.description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
