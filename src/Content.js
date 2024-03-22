// import images
import LogoSoS from "./assets/images/Hero/logo.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import sign from "./assets/images/projects/sign.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import support from "./assets/images/Hireme/support.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developen & SRE",
    firstName: "Software ",
    LastName: "of South",
    image: LogoSoS,
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: sign,
    project_content: [
      {
        title: "Ubro",
        image: project1,
        link: "https://www.ubronline.com",
      },
      {
        title: "Estudio Juridico CH",
        image: project2,
        link: "https://www.abogadoschyasociados.com/",
      },
      {
        title: "And More",
        image: project3,
        link: "https://www.github.com/dani54196",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: support,
    image2: support,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    social_media: [
      {
        text: "softwareofsouth@gmail.com",
        icon: GrMail,
        link: "mailto:softwareofsouth@gmail.com",
      },
      {
        text: "+54 9 11 5116-4446",
        icon: BsWhatsapp,
        link: "https://wa.me/+5491151164446",
      },
      {
        text: "softwareofsouth",
        icon: BsInstagram,
        link: "https://www.instagram.com/softwareofsouth/",
      },
      {
        text: "dani54196",
        icon: BsGithub,
        link: "https://github.com/dani54196",
      },
    ],
  },
};
