"use client";
import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";
import { Card } from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

function CardCpop({ value }: any) {
  return (
    <Card className="flex flex-col gap-5 hover:border-l-8 border-b-8 border-spacing-5 hover:border-[#F4CE14] duration-100 hover:bg-green-500/20">
      <div className="flex justify-between items-start relative">
        <Button
          className="border-b-4 hover:bg-[#F4CE14] hover:border-[#14f4b1] z-20"
          color="default"
          radius="sm"
          size="lg"
          variant="solid"
        >
          Download
        </Button>
        <Link href={`/fontName`}>
          <h1 className="text-4xl font-medium" dir="auto">
            {value || `استعمل خطوط مجانية تماما عبر موقع خطوط`}
          </h1>
        </Link>
      </div>
      <Link href={`/fontName`}>
        <div className="flex justify-between">
          <p>امير</p>
          <p className="font-bold">2 اوزان</p>
        </div>
      </Link>
    </Card>
  );
}

export default function Home() {
  const [value, setValue] = React.useState("");

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <section className="w-3/4 grid.......... grid-cols-4 gap-4 mb-5 *:text-2xl *:font-medium hidden">
        <Button
          className="border-b-4 hover:bg-[#F4CE14] hover:border-[#14f4b1] w-full h-full p-2"
          color="default"
          radius="sm"
          variant="solid"
        >
          كوفي
        </Button>
        <Button
          className="border-b-4 hover:bg-[#F4CE14] hover:border-[#14f4b1] w-full h-full p-5"
          color="default"
          radius="sm"
          variant="solid"
        >
          نسخ
        </Button>
        <Button
          className="border-b-4 hover:bg-[#F4CE14] hover:border-[#14f4b1] w-full h-full p-5"
          color="default"
          radius="sm"
          variant="solid"
        >
          رقعة
        </Button>
        <Button
          className="border-b-4 hover:bg-[#F4CE14] hover:border-[#14f4b1] w-full h-full p-5"
          color="default"
          radius="sm"
          variant="solid"
        >
          ديوان
        </Button>
      </section>
      <h1 className="text-center text-6xl font-medium mt-20 pb-2">
        جميع الخطوط العربية
      </h1>
      <h1 className="text-center text-3xl mb-20">
        استعمل خطوط مجانية تماما عبر موقع خطوط
      </h1>
      <section className="w-full flex flex-col items-center justify-center gap-4 my-8 md:my-10">
        <Textarea
          className={`w-full p-3 *:*:text-5xl font-medium`}
          dir="rtl"
          maxLength={52}
          placeholder="استعمل تجربة الخطوط العربية"
          size="lg"
          style={{ fontSize: "x-large" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </section>
      <section
        className={clsx(
          "w-full flex flex-col gap-3 *:rounded-lg *:bg-default-100 *:p-6",
        )}
      >
        <CardCpop value={value} />
        <CardCpop value={value} />
        <CardCpop value={value} />
        <CardCpop value={value} />
        <CardCpop value={value} />
        <CardCpop value={value} />
        <CardCpop value={value} />
        <CardCpop value={value} />
      </section>
    </section>
  );
}
