import { Avatar, Card } from "@/app/material";
import MuslimAvatar from "@/assets/avatar.png";
import Image from "next/image";

const Member = ({ avatar, name }) => {
  // member styles
  const styles = {
    container: `items-center gap-5 p-5 shadow-none border border-black/25`,

    name: `label text-center leading-snug text-black/75`,
  };

  return (
    <Card className={styles.container}>
      {/* avatar */}
      <figure className="h-[80px] w-[80px] mobile:h-[60px] mobile:w-[60px] rounded-full overflow-hidden relative">
        <Image
          src={avatar ? avatar.url : MuslimAvatar}
          alt="Yaseen Aftab Foundation's Gallery Photo"
          fill
          sizes="80px"
          className="object-cover object-center"
        />
      </figure>
      {/* name */}
      <h4 className={styles.name}>{name}</h4>
    </Card>
  );
};

export default Member;
