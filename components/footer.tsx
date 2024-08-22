import { Link } from "@nextui-org/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3 mt-10">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://fb.com/mu7amm.ad"
        title="nextui.org homepage"
      >
        <span className="text-default-600">صنع بكل حب ❤️</span>
        <p className="text-primary">محمد</p>
      </Link>
    </footer>
  );
}
