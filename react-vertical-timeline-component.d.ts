declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    layout?: '1-column-left' | '1-column' | '2-columns' | '1-column-right';
    lineColor?: string;
    children: React.ReactNode | React.ReactNode[];
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;

  export interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    className?: string;
    date?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconOnClick?: React.MouseEventHandler<HTMLElement>;
    position?: 'left' | 'right';
    style?: React.CSSProperties;
    visible?: boolean;
    contentStyle?: React.CSSProperties;      // Custom styles for the content box
    contentArrowStyle?: React.CSSProperties; // Custom styles for the arrow pointing to the icon
    iconStyle?: React.CSSProperties;         // Custom styles for the icon
  }

  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}