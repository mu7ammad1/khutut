import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { HeartFilledIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <Button
        isExternal
        as={Link}
        className="text-sm font-normal text-default-600 bg-default-100"
        href={siteConfig.links.sponsor}
        startContent={<HeartFilledIcon className="text-danger" />}
        variant="flat"
      >
        Patreon
      </Button>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit text-2xl">خطوط</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
