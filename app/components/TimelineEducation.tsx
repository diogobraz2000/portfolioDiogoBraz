"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaPen, FaSailboat } from "react-icons/fa6";
import Image from "next/image";

const TimelineEducation: React.FC = () => {
 
  return (
    <div className="p-10 mt-28">
      <h2 className="text-3xl text-center font-bold mb-8 text-red-600">Education</h2>
      <VerticalTimeline lineColor="var(--color-red-600)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work text-red-600 shadow-red-600 "
          iconClassName="bg-black"
          contentStyle={{ background: '#E0E0E0'}}
          contentArrowStyle={{ borderRight: '7px solid #DC2626' }}
          date="2023 - Present"
          icon={<FaPen  />}
        >
            <Image src="/Novologo.png" width={100} height={100} alt="Simens Sa." className="rounded-full w-24 h-24 border-2 border-black"></Image>
            <h3 className="vertical-timeline-element-title text-black font-bold text-2xl mt-5">Master in Robotics and Digital Systems</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-semibold text-xl">NOVA-SST</h4>
            <ul className="list-disc ml-10 text-black">
                <li>Gained a comprehensive understanding of interdisciplinary fields combining robotics, digital systems, AI, and control theory.</li>
                <li>Focused on developing cutting-edge solutions for autonomous systems, digital logic design, and advanced robotics applications.</li>
                <li>Learned robot perception techniques such as computer vision, sensor fusion, and machine learning to improve robotic capabilities.</li>
                <li>Applied advanced problem-solving skills to develop solutions for autonomous navigation, system optimization, and real-time control systems.</li>
            </ul>
            <div className="grid grid-cols-4 bg-blue-400">
                
            </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work text-red-600 shadow-red-600"
          iconClassName="bg-black"
          contentStyle={{ background: '#E0E0E0'}}
          contentArrowStyle={{ borderRight: '7px solid #DC2626' }}
          date="2019 - 2024"
          icon={<FaSailboat/>}
        >
            <Image src="/Novologo.png" width={100} height={100} alt="Simens Sa." className="rounded-full w-24 h-24 border-2 border-black p-1"></Image>
            <h3 className="vertical-timeline-element-title text-black font-bold text-2xl mt-5">Bachelor in Electrical and Computer Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle text-black font-semibold text-xl">NOVA-SST</h4>
            <ul className="list-disc ml-10 text-black">
                <li>Hands-on experience in programming and designing embedded systems using platforms like Arduino, Raspberry Pi, and FPGA.</li>
                <li>Built a strong foundation in software development, implementing algorithms and data structures for real-time systems.</li>
                <li>Designed and tested microcontroller-based systems to control robotics, automation, and sensor integration, bridging electrical hardware with software logic.</li>
                <li>Participated in the development of a smart home automation system, integrating sensors, actuators, and wireless protocols.</li>
                
            </ul>
            <div className="grid grid-cols-4 bg-blue-400">
                
            </div>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
};

export default TimelineEducation;
