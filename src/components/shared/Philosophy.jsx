import { Card, CardBody } from "@/app/material";
import Image from "next/image";

const Philosophy = ({ title, subtitle, icon }) => {
  return (
    <Card className="shadow-none border border-black/25">
      <CardBody className="grid place-items-center">
        <figure className="h-[80px] w-[80px] mobile:h-[60px] mobile:w-[60px] relative mb-8">
          <Image
            src={icon}
            alt="Yaseen Aftab Foundation's Gallery Photo"
            fill
            sizes="80px"
            className="object-cover object-center"
          />
        </figure>

        <h3 className="text-[40px] laptop:text-[32px] mobile:text-[22px] font-medium leading-none mb-2 text-nowrap text-center">
          {title}
        </h3>
        <h4 className="heading-04 mobile:!text-[12px] text-black/50 text-nowrap text-center">{subtitle}</h4>
      </CardBody>
    </Card>
  );
};

export default Philosophy;
