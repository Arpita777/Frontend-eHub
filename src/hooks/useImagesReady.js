import { useEffect, useState } from "react";

export function useImagesReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const images = document.images;
    let loaded = 0;

    if (images.length === 0) {
      setReady(true);
      return;
    }

    const check = () => {
      loaded++;
      if (loaded === images.length) {
        setReady(true);
      }
    };

    Array.from(images).forEach((img) => {
      if (img.complete) check();
      else {
        img.addEventListener("load", check);
        img.addEventListener("error", check);
      }
    });
  }, []);

  return ready;
}
