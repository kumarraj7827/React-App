import React from "react";
export default function Imagecomp(props) {
  return <div class="image1">
      {props.items.id}
      {props.items.publishDate}
      {props.items.title}
      {props.imageUrl}
      {props.description}
  </div>;
}
