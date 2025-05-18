import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

const aboutContent = [
  {
    title: "About Us",
    description:
      "QUBITEC,  We are a passionate team of digital experts dedicated to helping businesses thrive online. We believe in the power of smart strategy, creative storytelling, and performance-driven campaigns to build lasting brand success.",
  },
  {
    title: "What We Offer",
    description: (
      <ul>
        <li>Search Engine Optimization (SEO) – Rank higher and drive organic traffic</li>
        <li>Social Media Marketing – Build a strong and engaging social presence</li>
        <li>Content Marketing – Tell your brand story in a way that connects</li>
        <li>PPC & Paid Ads – Maximize ROI with targeted ad campaigns</li>
        <li>Email Marketing – Nurture leads and boost customer retention</li>
        <li>Web Strategy & Analytics – Make data-driven decisions for growth</li>
      </ul>
    ),
  },
  {
    title: "Our Mission",
    description:
      "To empower businesses of all sizes with innovative digital solutions that increase visibility, drive traffic, and generate measurable results.",
  },
  {
    title: "Our Vision",
    description:
      "To be a trusted digital growth partner, delivering impactful strategies that turn ideas into success stories.",
  },
  {
    title: "Our Values",
    description: (
      <ul>
        <li>Transparency: We keep communication open and honest</li>
        <li>Creativity: We think beyond the ordinary</li>
        <li>Results: We focus on what matters—performance and growth</li>
        <li>Partnership: Your success is our success</li>
      </ul>
    ),
  },
  {
    title: "Our Process",
    description: (
      <ul>
        <li>Discovery & Research – We learn about your brand and goals</li>
        <li>Strategy & Planning – We craft a tailored digital roadmap</li>
        <li>Execution – We bring campaigns to life with precision</li>
        <li>Optimization – We track, analyze, and improve continuously</li>
      </ul>
    ),
  },
  {
    title: "Why Choose Us?",
    description: (
      <ul>
        <li>Proven experience across industries</li>
        <li>Customized solutions for every client</li>
        <li>In-house creative and marketing team</li>
        <li>Commitment to quality and timely delivery</li>
        <li>Friendly, collaborative approach</li>
      </ul>
    ),
  },
  {
    title: "Meet the Team",
    description:
      "A group of strategists, designers, developers, and marketers who are passionate about driving results and building strong client relationships.",
  },
  {
    title: "Let’s Work Together",
    description:
      "Ready to grow your business online? Contact us today and let’s start crafting your digital success story.",
  },
];

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {aboutContent.map((section, i) => (
          <Row className="sec_sp" key={i}>
            <Col lg="5">
              <h3 className="color_sec py-4">{section.title}</h3>
            </Col>
            <Col lg="7">
              <div className="service_ py-4">
                <p className="service_desc">{section.description}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </HelmetProvider>
  );
};
