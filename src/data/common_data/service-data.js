import icon_arrow_down from "@assets/images/icons/icon_arrow_down_right_white.svg";
import icon_gallary from "@assets/images/icons/icon_gallery.png";
import icon_browser from "@assets/images/icons/icon_browser.png";
import icon_merketing from "@assets/images/icons/icon_marketing.png";
import icon_comment from "@assets/images/icons/icon_comment.png";
import btn_icon from "@assets/images/icons/icon_arrow_up_right_white.svg";
import btn_icon_2 from "@assets/images/icons/icon_arrow_down_right_white.svg";
import icon_arrow from '@assets/images/icons/icon_arrow_down_right_dark.svg'
import icon_arrow_primary from '@assets/images/icons/icon_arrow_down_right_primary.svg'
import IconSvgOne from "@svg/icon-svg-1";
import IconSvgTwo from "@svg/icon-svg-2";
import IconSvgThere from "@svg/icon-svg-3";
import IconSvgFour from "@svg/icon-svg-4";
import IconSvgFive from "@svg/icon-svg-5";
import IconSvgSix from "@svg/icon-svg-6";
import IconSvgSeven from "@svg/icon-svg-7";
import icon_gallery from "@assets/images/icons/icon_gallery_2.png";
import BtnIcon from "@svg/btn-icon-1";
import ServiceIconOne from "@svg/service-icon-1";
import ServiceIconTwo from "@svg/service-icon-2";
import ServiceIconThere from "@svg/service-icon-3";
import ServiceIconFour from "@svg/service-icon-4";
import ServiceIconFive from "@svg/service-icon-5";
import ServiceIconSix from "@svg/service-icon-6";
import icon from "@assets/images/icons/icon_arrow_down_right_dark_2.svg";
import img_1 from "@assets/images/icons/icon_code_5.svg";
import img_2 from "@assets/images/icons/icon_house_2.svg";
import icon_grid from "@assets/images/icons/icon_grid_2.svg";
import icon_speaker from "@assets/images/icons/icon_speaker.svg";
import icon_camera from "@assets/images/icons/icon_camera_2.svg";
import icon_code_4 from "@assets/images/icons/icon_code_4.svg";
import icon_idea from "@assets/images/icons/icon_idea_3.svg";
import icon_cog from "@assets/images/icons/icon_cog.svg";
import icon_camera_2 from "@assets/images/icons/icon_camera_2.svg";
import shape_color_1 from "@assets/images/shapes/shape_color_1.svg";
import shape_color_2 from "@assets/images/shapes/shape_color_2.svg";
import shape_color_3 from "@assets/images/shapes/shape_color_3.svg";
import shape_color_4 from "@assets/images/shapes/shape_color_4.svg";
import shape_color_5 from "@assets/images/shapes/shape_color_5.svg";
import shape_color_6 from "@assets/images/shapes/shape_color_6.svg";
import shape_color_7 from "@assets/images/shapes/shape_color_7.svg";
import shape_color_8 from "@assets/images/shapes/shape_color_8.svg";
import shape_color_9 from "@assets/images/shapes/shape_color_5.svg";

//web development
import custom_solution from '@assets/images/icons/icon_grid.svg';
import support from '@assets/images/icons/icon_together_primary.svg';
import seo from '@assets/images/icons/icon_globe.svg';
import responsive_design from '@assets/images/icons/icon_design.svg';
import service_detail from '@assets/images/illustrations/Microsites-rafiki.svg';
import timely_delivery from '@assets/images/icons/icon_dart_board_primary.svg';
import team from "@assets/images/icons/icon_flexibility.svg"
import team_work from "@assets/images/icons/icon_uiux_team.svg";
import app from "@assets/images/illustrations/Interaction Design-amico.svg"
import uiux from "@assets/images/illustrations/Prototyping process-cuate.svg";
import user from "@assets/images/icons/icon_users _dark.svg"
import sales from "@assets/images/icons/icon_sales_dark.svg"
import collaboration from "@assets/images/icons/icon_development.svg"

const service_data = [
  //home-6 added service data
  {
    id: 'web-development',
    icon_svg: img_1,
    overlay_bg: shape_color_1,
    title: "Web Development",
    description: "Codersque Technologies offers expert web development services to create responsive and user-friendly websites that drive engagement and conversions. Our collaborative approach and skilled team ensure your website reflects your brand and meets your business goals. Contact us to discuss your web development project today!",
    btn_icon: icon,
    fullTitle: "Web Development",
    detailed: {
      heading: "Customized Web Solutions for Your Business",
      image: service_detail,
      description: ["Codersque Technologies offers expert web development services to create responsive and user-friendly websites that drive engagement and conversions. Our collaborative approach and skilled team ensure your website reflects your brand and meets your business goals.",
        "At Codersque Technologies, we believe in tailoring our web development services to suit your unique business needs. Whether you require a simple informative website or a complex e-commerce platform, we have the expertise to deliver solutions that align with your vision."],
      process: [
        {
          title: "Requirement Gathering",
          description: "Our team collaborates with you to understand your business goals and specific requirements for the website."
        },
        {
          title: "Design and Prototyping",
          description: "We create wireframes and prototypes to visualize the website layout and user interface."
        },
        {
          title: "Development",
          description: "Our skilled developers bring the designs to life, crafting a functional and high-performing website."
        }, {
          title: "Testing and QA",
          description: "We conduct rigorous testing to ensure the website is bug-free and performs optimally."
        }, {
          title: "Deployment",
          description: "Once approved, we deploy the website to a live server for public access."
        },
        {
          title: "Support and Maintenance",
          description: "We provide ongoing support and maintenance to keep your website running smoothly."
        }
      ],
      reason: [{
        icon: team,
        title: "Expert Team",
        description: "Our team of experienced web developers and designers are skilled in creating high-quality websites."
      }, {
        icon: custom_solution,
        title: "Custom Solutions",
        description: "We take the time to understand your business and deliver tailored solutions that meet your unique requirements."
      }, {
        icon: responsive_design,
        title: "Responsive Designs",
        description: "Our websites are optimized for all devices, ensuring a seamless user experience."
      }, {
        icon: seo,
        title: "SEO Optimization",
        description: "We implement SEO best practices to enhance your website's visibility on search engines."
      }, {
        icon: timely_delivery,
        title: "Timely Delivery",
        description: "We are committed to delivering projects on time and within budget."
      }, {
        icon: support,
        title: "Excellent Support",
        description: "Our dedicated support team is available to assist you at every step of the project and beyond."
      }]
    }
  },
  {
    id: 'ui-ux',
    overlay_bg: shape_color_2,
    icon_svg: img_2,
    title: "UX/UI Design",
    description: "At Codersque Technologies, our focus is on creating user-centric interfaces that enhance usability and make a lasting impact. With specialized expertise in UI/UX design, we deliver exceptional user experiences across various platforms and devices. Our design philosophy centers on blending visual appeal with practicality, resulting in interfaces that capture users' attention and drive meaningful interactions. Contact us to discuss your UI/UX project today!",
    btn_icon: icon,
    fullTitle: "UX/UI Design",
    detailed: {
      heading: "Creating Seamless User Experiences.",
      image: uiux,
      description: ["At Codersque Technologies, our focus is on creating user-centric interfaces that enhance usability and make a lasting impact. With specialized expertise in UI/UX design, we deliver exceptional user experiences across various platforms and devices. Our design philosophy centers on blending visual appeal with practicality, resulting in interfaces that capture users' attention and drive meaningful interactions.",
        "Driven by a user-centered approach, we meticulously study user behaviors and preferences, enabling us to develop intuitive and user-friendly designs. Our process includes the creation of detailed wireframes and interactive prototypes that vividly illustrate the user journey from start to finish. Moreover, our designs prioritize responsiveness, ensuring seamless adaptation to diverse screen sizes and devices. This commitment guarantees that every user enjoys a consistent and delightful experience, reflecting our dedication to delivering excellence in UI/UX design."
      ],
      process: [
        {
          title: "Research and Analysis",
          description: "We delve into market research and user insights to inform our design decisions."
        },
        {
          title: "Conceptualization",
          description: "Our designers create initial design concepts that align with your brand identity."
        },
        {
          title: "Design Iteration",
          description: "We collaborate with you to refine the design, ensuring it meets your expectations."
        }, {
          title: "Prototyping",
          description: "We develop interactive prototypes to test and validate the user experience.."
        }, {
          title: "Final Design",
          description: "The approved design is translated into pixel-perfect visuals ready for implementation."
        },
        {
          title: "Support and Maintenance",
          description: "We provide ongoing support and maintenance to keep your website running smoothly."
        }
      ],
      reason: [{
        icon: team_work,
        title: "Experienced Designers",
        description: "Our design team has a proven track record in crafting exceptional interfaces."
      }, {
        icon: user,
        title: "User-Centric Approach",
        description: "We prioritize user needs to create interfaces that delight and engage.."
      }, {
        icon: sales,
        title: "Branding Alignment",
        description: "Our designs seamlessly integrate with your brand identity and values."
      }, {
        icon: collaboration,
        title: "Collaborative Process",
        description: "We involve you throughout the design journey to ensure alignment with your vision."
      }, {
        icon: team,
        title: "Continuous Improvement",
        description: "We stay updated with the latest design trends and technologies."
      }, {
        icon: support,
        title: "Excellent Support",
        description: "Our dedicated support team is available to assist you at every step of the project and beyond."
      }]
    }
  },
  {
    id: 'app-development',
    overlay_bg: shape_color_3,
    icon_svg: icon_grid,
    title: "Mobile App Development",
    description: "Codersque Technologies offers expert mobile app development services for iOS and Android platforms. From idea to implementation, our skilled team delivers outstanding mobile experiences that align with your business goals. Contact us to discuss your mobile app development project today!",
    btn_icon: icon,
    fullTitle: "Mobile App Development",
    detailed: {
      heading: "Custom Mobile Solutions for Your Business",
      image: app,
      description: ["Codersque Technologies offers expert mobile app development services for iOS and Android platforms. From idea to implementation, our skilled team delivers outstanding mobile experiences that align with your business goals.",
        "At Codersque Technologies, we believe in tailoring our web development services to suit your unique business needs. Whether you require a simple informative website or a complex e-commerce platform, we have the expertise to deliver solutions that align with your vision."],
      process: [
        {
          title: "Idea Validation",
          description: "We help validate your app idea and define the project scope."
        },
        {
          title: "UX/UI Design",
          description: "Our designers create intuitive and visually appealing app interfaces."
        },
        {
          title: "Development",
          description: "Our skilled developers build your app with a focus on performance and security."
        }, {
          title: "Testing and QA",
          description: "We conduct rigorous testing to ensure the app is bug-free and performs optimally."
        }, {
          title: "Launch",
          description: "Once your app is ready, we assist in deploying it to app stores."
        },
        {
          title: "Support and Updates",
          description: "We provide ongoing support and updates to keep your app running smoothly."
        }
      ],
      reason: [{
        icon: team,
        title: "Platform Expertise",
        description: "Our developers are skilled in iOS and Android app development."
      }, {
        icon: custom_solution,
        title: "UI/UX Excellence",
        description: "We prioritize user experience to ensure user-friendly and engaging apps."
      }, {
        icon: responsive_design,
        title: "Scalable Solutions",
        description: "Our apps are designed to accommodate future business growth."
      }, {
        icon: seo,
        title: "Security",
        description: "We implement robust security measures to protect your app and user data."
      }, {
        icon: timely_delivery,
        title: "Timely Delivery",
        description: "We are committed to delivering projects on time and within budget."
      }, {
        icon: support,
        title: "Excellent Support",
        description: "Our dedicated support team is available to assist you at every step of the project and beyond."
      }]
    }
  },
  {
    id: 'custom-application-development',
    overlay_bg: shape_color_6,
    icon_svg: icon_code_4,
    title: "Custom Application Development",
    description: "Codersque Technologies provides custom application development services to address your unique business challenges. Our team crafts tailored software solutions that align with your goals and streamline your processes. Contact us to discuss your custom application development project today!",
    btn_icon: icon,
    fullTitle: "Custom Application Development",
    detailed: {
      heading: "Customized Solutions for Your Business",
      image: app,
      description: ["Codersque Technologies provides custom application development services to address your unique business challenges. Our team crafts tailored software solutions that align with your goals and streamline your processes.",
        "Our approach to custom application development is client-centric. We work closely with you to understand your business workflows and pain points. Our team then designs and develops scalable and efficient applications that improve productivity and enhance business outcomes."],
      process: [
        {
          title: "Requirement Gathering",
          description: "We conduct in-depth discussions to gather detailed requirements."
        },
        {
          title: "Design and Prototyping",
          description: "We create wireframes and prototypes to visualize the website layout and user interface."
        },
        {
          title: "Development",
          description: "Our skilled developers bring the designs to life, crafting a functional and high-performing website."
        }, {
          title: "Testing and QA",
          description: "We conduct rigorous testing to ensure the website is bug-free and performs optimally."
        }, {
          title: "Deployment",
          description: "Once approved, we deploy the website to a live server for public access."
        },
        {
          title: "Support and Maintenance",
          description: "We provide ongoing support and maintenance to keep your application running smoothly."
        }
      ],
      reason: [{
        icon: team,
        title: "Expert Team",
        description: "Our team of skilled developers has experience in diverse domains."
      }, {
        icon: custom_solution,
        title: "Business-Oriented Solutions",
        description: "We focus on delivering applications that align with your business goals."
      }, {
        icon: responsive_design,
        title: "Scalable Architecture",
        description: "Our solutions are designed to grow with your business."
      }, {
        icon: seo,
        title: "Seamless Integration",
        description: "We ensure smooth integration with existing systems and technologies."
      }, {
        icon: timely_delivery,
        title: "Timely Delivery",
        description: "We are committed to delivering projects on time and within budget."
      }, {
        icon: support,
        title: "Excellent Support",
        description: "Our dedicated support team is available to assist you at every step of the project and beyond."
      }]
    }
  },
  {
    id: 'erp-development',
    overlay_bg: shape_color_8,
    icon_svg: icon_cog,
    title: "ERP Development",
    description: "Codersque Technologies specializes in ERP development services that streamline business processes and enhance efficiency. Our tailored ERP solutions are designed to meet your specific needs and drive growth. Contact us to discuss your ERP development project today!",
    btn_icon: icon,
    fullTitle: "ERP Development",
    detailed: {
      heading: "Customized ERP Solutions for Your Business",
      image: app,
      description: ["Codersque Technologies specializes in ERP development services that streamline business processes and enhance efficiency. Our tailored ERP solutions are designed to meet your specific needs and drive growth.",
        "Our ERP development process is focused on understanding your business processes and delivering comprehensive solutions. We integrate various modules and features to create a centralized system that enhances collaboration and decision-making.<"],
      process: [
        {
          title: "Business Analysis",
          description: "We conduct a thorough analysis of your business requirements."
        },
        {
          title: "ERP Customization",
          description: "We tailor the ERP system to align with your specific needs."
        },
        {
          title: "Implementation",
          description: "Our team ensures smooth implementation and data migration."
        }, {
          title: "Testing and QA",
          description: "We conduct rigorous testing to ensure the app is bug-free and performs optimally."
        }, {
          title: "Training and Support",
          description: "We provide training and ongoing support to your team."
        }
      ],
      reason: [{
        icon: team,
        title: "Domain Expertise",
        description: "Our team has extensive experience in ERP development."
      }, {
        icon: custom_solution,
        title: "Scalable Solutions",
        description: "Our ERP systems can accommodate future business growth."
      }, {
        icon: responsive_design,
        title: "Integration Capabilities",
        description: "We ensure seamless integration with other business applications."
      }, {
        icon: seo,
        title: "Security",
        description: "We implement robust security measures to protect your app and user data."
      }, {
        icon: timely_delivery,
        title: "Timely Delivery",
        description: "We are committed to delivering projects on time and within budget."
      }, {
        icon: support,
        title: "Excellent Support",
        description: "Our dedicated support team is available to assist you at every step of the project and beyond."
      }]
    }
  },

];
export default service_data;
