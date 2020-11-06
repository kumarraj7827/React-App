import React from "react";

export default function Image1(props)
{
return(
<div className = "image">
{props.title}
{props.subtitle}
{props.imageUrl}
</div>
);

}