/* eslint-disable prettier/prettier */
"use client"
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import React from "react";
import { Snippet } from "@nextui-org/snippet";

import { HeartFilledIcon } from "@/components/icons";

export default function Page({ params }: { params: { font: string } }) {
  const [value, setValue] = React.useState("");

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <h1 className={`text-center text-7xl font-semibold my-20 uppercase -hue-rotate-30`}>
        Alexandria
      </h1>
      <section className="w-full flex items-center justify-center gap-4 my-8 md:my-5">
        <Button radius="lg" size="lg" startContent={<HeartFilledIcon className="text-danger" />} variant="flat">
          Download
        </Button>
        <Button radius="lg" size="lg" startContent={<HeartFilledIcon className="text-danger" />} variant="flat">
          Copy Link
        </Button>
           <Snippet
           checkIcon={<CheckIcon />}
           copyIcon={<CopyIcon />}
           variant="bordered"
         >
           npm install @nextui-org/react
         </Snippet>
        <Button radius="lg" size="lg" startContent={<HeartFilledIcon className="text-danger" />} variant="flat">
          Download
        </Button>
      </section>
        <section className="mt-5 w-full flex justify-center items-start gap-5">
          <Card className="w-full flex justify-center items-center shadow-none h-auto *:p-0 dark:bg-white/0">
            <CardBody className="w-full flex flex-col items-center justify-center gap-4 my-8 md:my-3 dark:bg-white/0">
              <Textarea
                className={`w-full p-3 max-md:w-full`}
                dir="rtl"
                maxLength={52}
                minRows={2}
                placeholder="استعمل تجربة الخطوط العربية"
                size="md"
                style={{ fontSize: "x-large" }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />

            </CardBody>
          </Card>
        </section>
        <section className="mt-5 w-full flex justify-center items-start gap-5 max-md:flex-col">

          <section className="w-2/3 flex flex-col justify-center items-center gap-5 p-0 max-md:w-full">
            <Card className="w-full shadow-none p-0 dark:bg-white/0">
              <CardBody className="flex justify-center items-start p-0 dark:bg-white/0 *:p-5 *:rounded-lg *:w-full *:text-center w-full gap-3 *:dark:border-foreground-100 *:border-1">
                <h1 className="text-4xl font-medium" dir="auto">
                  {value || `استعمل خطوط مجانية تماما عبر موقع خطوط`}
                </h1>
                <h1 className="text-4xl font-medium" dir="auto">
                  {value || `استعمل خطوط مجانية تماما عبر موقع خطوط`}
                </h1>
                <h1 className="text-4xl font-medium" dir="auto">
                  {value || `استعمل خطوط مجانية تماما عبر موقع خطوط`}
                </h1>
                <h1 className="text-4xl font-medium" dir="auto">
                  {value || `استعمل خطوط مجانية تماما عبر موقع خطوط`}
                </h1>
                <h1 className="text-4xl font-medium" dir="auto">
                  {value || `استعمل خطوط مجانية تماما عبر موقع خطوط`}
                </h1>

              </CardBody>
            </Card>
          </section>

          <Card className="w-1/3 shadow-none *:text-right dark:border-foreground-100 border-1 max-md:w-full">
            <CardBody>
              <h1 className="text-lg font-medium">تفاصيل الخط</h1>
              <h1>
                About fonts About fonts About fonts About fonts About fonts About
                fonts About fonts About fonts About fonts About fonts About fonts
                About fonts About fonts About fonts About fonts About fonts About
                fonts About fonts About fonts About fonts About fonts About fonts
              </h1>
            </CardBody>
            <CardBody>
              <h1 className="text-lg font-medium">تفاصيل صاحب الخط</h1>
              <h1>About fonts</h1>
            </CardBody>
          </Card>
        </section>
    </main>
  );
}











































export const CheckIcon = ({
  size,
  height,
  width,
  ...props
}:any) => {
  return (
    <svg
      fill="currentColor"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m2.394 13.742 4.743 3.62 7.616-8.704-1.506-1.316-6.384 7.296-3.257-2.486zm19.359-5.084-1.506-1.316-6.369 7.279-.753-.602-1.25 1.562 2.247 1.798z"/>
    </svg>

    
  );
};






const CopyIcon = ({ size, height, width, ...props }:any) => {
  return (
    <svg
      fill="none"
      height={height || 20}
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={width || 20}
      {...props}
    >
      <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z" />
    </svg>
  );
};
