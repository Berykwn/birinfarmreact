import React from "react";

export default function FormattedDate({ date }) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("id-ID", options);
    return <>{formattedDate}</>;
  }
  

