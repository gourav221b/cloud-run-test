"use client";
import React from "react";
export default function Client() {
  return (
    <div>
      {process.env.NEXT_PUBLIC_VARIABLE}{" "}
      {process.env.NEXT_PUBLIC_CLIENT_VARIABLE}{" "}
      hello app
    </div>
  );
}
