import "moment/locale/bn";
import "moment/locale/en-gb";
import { Card, CardBody, CardFooter, CardHeader, Button } from "@/app/material";
import moment from "moment";
import Video from "./Video";
import { Link } from "@/i18n/routing";

const ProgramCard = ({ cover, video, title, slug, date, description, view, locale }) => {
  return (
    <Card className="w-full">
      <CardHeader color="blue-gray" className="relative">
        <Video thumbnail={cover} video={video} thumbnailSize="33vw" />
      </CardHeader>
      <CardBody>
        <h3 className="heading-03 !leading-normal line-clamp-1 mb-2">{title}</h3>
        <h4 className="heading-04 mb-4 text-black/50">{moment(date).locale(locale).format("LL")}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="paragraph text-justify-forced !line-clamp-4"
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={`/programs/${slug}`}>
          <Button>{view}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
