"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaCarBattery, FaPen, FaSailboat } from "react-icons/fa6";
import Image from "next/image";

const Timeline: React.FC = () => {
 
  return (
    <div className="p-10 mt-28">
      <h2 className="text-3xl text-center font-bold mb-8 text-red-600">Professional Experience</h2>
      <VerticalTimeline lineColor="var(--color-red-600)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-red-600 shadow-red-600 "
          iconClassName="bg-black"
          
          date="2023 - Present"
          icon={<FaPen  />}
        >
            <Image src="/file.png" width={100} height={100} alt="Simens Sa." className="rounded-full w-24 h-24 border-2 border-black"></Image>
            <h3 className="vertical-timeline-element-title text-black font-bold text-2xl mt-5">Fullstack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-semibold text-xl">Freelancer</h4>
            <ul className="list-disc ml-10 text-black">
                <li>Developed and deployed responsive web applications using React (front-end) and Node.js (back-end) to ensure a seamless user experience across devices.</li>
                <li>Utilized SQL and NoSQL databases (e.g., PostgreSQL, MongoDB) to manage and manipulate large datasets, optimizing queries and ensuring fast retrieval times.</li>
                <li>Worked on optimizing SEO for web applications, ensuring proper meta tags, page loading speed, and mobile usability for better user engagement and search ranking.</li>
                
                
            </ul>
            <div className="grid grid-cols-4 bg-blue-400">
                
            </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-red-600 shadow-red-600"
          iconClassName="bg-black"
          
          date="2023 - 2023"
          icon={<FaSailboat/>}
        >
            <Image src="/Novologo.png" width={100} height={100} alt="Simens Sa." className="rounded-full w-24 h-24 border-2 border-black p-1"></Image>
            <h3 className="vertical-timeline-element-title text-black font-bold text-2xl mt-5">Summer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-semibold text-xl">NOVA-SST</h4>
            <ul className="list-disc ml-10 text-black">
                <li>Part of a 3 person team at FCT-NOVA University.</li>
                <li>I contributed to a research project focused on developing a fully autonomous sailboat.</li>
                <li>We worked on integrating fuzzy control algorithms, the ESP32 microcontroller, and various sensors to enable
                autonomous navigation.</li>
                <li>My role involved collaborating on the design and implementation of control systems, troubleshooting sensor integration,
                and fine-tuning the boat’s responsiveness, increasing the accuracy of the sailboat movements by 10%.</li>
                
            </ul>
            <div className="grid grid-cols-4 bg-blue-400">
                
            </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-red-600 shadow-red-600"
          iconClassName="bg-black"
          
          date="2022 - 2022"
          icon={<FaCarBattery />}
        >
            <Image src="/siemens.jpg" width={100} height={100} alt="Simens Sa." className="rounded-full w-24 h-24 border-2 border-black p-2"></Image>
            <h3 className="vertical-timeline-element-title text-black font-bold text-2xl mt-5">Summer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-semibold text-xl">Siemens SA.</h4>
            <ul className="list-disc ml-10 text-black">
                <li>Part of a team of 4 members focused on quality control for electric vehicle chargers.</li>
                <li>Specifically responsible for drafting and ensuring the implementation of security protocols during the electrical testing
                phase of the chargers.</li>
                <li>Collaborated closely with engineering teams to develop and implement a robust safety protocol framework for electric
                vehicle chargers, leading to the identification of critical hazards that reduced incident reports by 30%.</li>
                <li>My work contributed to maintaining the reliability and safety of the products and decreased the number of accidents by
                approximately 65%.</li>
                
            </ul>
            <div className="grid grid-cols-4 bg-blue-400">
                
            </div>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
