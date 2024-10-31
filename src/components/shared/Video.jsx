"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoPlay } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { IconButton, Spinner } from "@material-tailwind/react";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import Image from "next/image";
import ReactPlayer from "react-player";

const Video = ({ thumbnail, thumbnailSize, video, thumbnailStyles }) => {
  const [openVideoModal, setVideoModal] = useState(false);

  // toggle video modal
  const handleVideoModal = () => setVideoModal((cur) => !cur);

  // video styles
  const styles = {
    thumbnail: {
      container: twMerge(
        `
          w-full h-auto aspect-video relative cursor-pointer rounded-xl overflow-hidden
          hover:opacity-85 transition-opacity duration-300 ease-out
        `,
        thumbnailStyles
      ),
      cover: `object-cover object-center`,
      icon: `
        w-20 h-20 rounded-full border-2 border-white bg-black/20 backdrop-blur
        absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        grid place-items-center text-3xl text-white
      `,
    },

    video: {
      container: ``,
      spinner: `h-8 w-8 absolute -z-[1]`,
    },
  };

  return (
    <>
      {/* thumbnail */}
      <figure className={styles.thumbnail.container} onClick={handleVideoModal}>
        {/* icon */}
        <div className={styles.thumbnail.icon}>
          <IoPlay />
        </div>
        {/* cover */}
        <Image src={thumbnail} alt="video thumbnail" fill size={thumbnailSize} className={styles.thumbnail.cover} />
      </figure>

      {/* video */}
      <Dialog size="xl" open={openVideoModal} handler={handleVideoModal} className="bg-transparent shadow-none">
        <DialogHeader onClick={handleVideoModal} className="justify-end">
          {/* close button */}
          <IconButton variant="text" size="sm" className="text-3xl text-white">
            <MdClose />
          </IconButton>
        </DialogHeader>

        <DialogBody className="mobile:w-full aspect-video p-0 rounded-xl overflow-hidden flex justify-center items-center">
          {/* youtube video player */}
          <ReactPlayer url={video} controls playing width="100%" height="100%" />
          {/* spinner */}
          <Spinner color="teal" className={styles.video.spinner} />
        </DialogBody>
      </Dialog>
    </>
  );
};

export default Video;
