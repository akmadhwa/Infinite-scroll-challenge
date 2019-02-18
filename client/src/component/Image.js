import React from "react";

export default function Image({ image }) {
  return <img src={image.urls.thumb} alt="" className="single-photo" />;
}
