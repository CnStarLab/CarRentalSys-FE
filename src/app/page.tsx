import Container from "@/components/Container";
import Search from "@/components/search";
import { Collapse, Tag } from "antd";
import Image from "next/image";
import P2PImage from "#/p2p.png";
import HurdDan from "#/hurdan.png";
import Complex from "#/complex.png";

const cards = [
  {
    title: "Хүнээс хүнд",
    description:
      "Машин түрээслэх,түрээслүүлэхэд заавал байгууллагад хандах шаардлагагүй.",
    image: P2PImage,
  },
  {
    title: "Цогц үйлчилгээ",
    description:
      "Машинаа түрээслүүлэх, түрээслэхэд хоёр талын бүртгэлийг баталгаажуулдаг.",
    image: HurdDan,
  },
  {
    title: "Хүнээс хүнд",
    description: "Машинаа хайхаас эхлээд түрээслээд дуусах хүртэл хамт байна.",
    image: Complex,
  },
];

const faq = [
  {
    label: "1",
    children: "2",
  },
  {
    label: "Title",
    children:
      "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
  },
  {
    label: "12",
    children: "12",
  },
  {
    label: "12",
    children: "12",
  },
  {
    label: "12",
    children: "12",
  },
  {
    label: "12",
    children: "12",
  },
];

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center p-24 gap-6">
        <Tag color="blue">Хүнээс хүнд зориулсан баталгаат систем</Tag>
        <div className="text-6xl">Mашин түрээсийн цогц систем</div>
        <div className="mb-10">
          Хэрэгтэй үедээ хүссэн машинаа түрээслэн амьдралаа хөнгөвчлөөрэй.
        </div>
        <Search />
        <div className="h-80 w-full bg-slate-300 here">image</div>
      </section>
      <section className="flex flex-col items-center p-24 gap-16">
        <div className="text-4xl">Яагаад RentRide гэж?</div>
        <div className="flex flex-nowrap gap-8 justify-evenly">
          {cards.map((card, key) => (
            <div
              key={key}
              className="max-w-96 flex flex-col items-center text-center gap-6"
            >
              <Image src={card.image} alt="p2p" />
              <div className="text-2xl">{card.title}</div>
              <div>{card.description}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center p-24 gap-16">
        <div className="text-4xl">Түгээмэл асуулт</div>
        <div className="flex flex-col gap-4">
          {faq.map((item, key) => (
            <Collapse
              style={{ width: "840px" }}
              key={key}
              items={[
                {
                  key: key,
                  label: item.label,
                  children: item.children,
                },
              ]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
