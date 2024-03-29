import { items } from "@/utils";
import { Button, Carousel, Col, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => {
  return (

    <div style={{
      background: "url(/images/bannerbackground.png)",
      objectFit:"cover"
    }} className="p-14">

    <Carousel
      className=" container mx-auto"
      effect="fade"
      draggable
      autoplay
      autoplaySpeed={5000}
      
    >
      {items.map((item) => (
        <div key={item.key}>
          <Row>
            <Col
              style={{ padding: "0 15px" }}
              lg={{
                span: 12,
              }}
            >
              <h1 className="text-3xl text-center sm:text-start sm:text-[55px] leading-[50px] sm:leading-[75px]">
                {item.title}
              </h1>
              <Typography.Paragraph
                className="text-center sm:text-start max-w-lg"
                strong
                style={{ fontSize: "16px", marginTop: "20px" }}
              >
                {item.content}
              </Typography.Paragraph>
              <Link href="/featured">
                <div className="text-center sm:text-start mt-3 sm:mt-5">
                  <button className="border-none cursor-pointer py-5 px-12 text-white font-semibold bg-gradient-to-r  from-blue-600 to-blue-300 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-600">
                    Buy Now
                  </button>
                </div>
              </Link>
            </Col>

            <Col
              lg={{
                span: 12,
              }}
              style={contentStyle}
            >
              <Image src={item.img} fill alt="drawing_image" />
            </Col>
          </Row>
        </div>
      ))}
    </Carousel>
    </div>
  );
};
export default Banner;
