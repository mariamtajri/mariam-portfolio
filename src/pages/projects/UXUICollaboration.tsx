import { Palette, Code2, Users } from 'lucide-react';
import { comingSoon } from '../../assets';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

export default function UXUICollaboration() {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="UX/UI Design Collaboration"
        subtitle="Tech Collaborative — UX/UI Designer"
        githubUrl=""
        features={[
          { icon: Palette, title: "Figma Design", description: "Designed user-friendly interfaces" },
          { icon: Code2, title: "Dev Handoff", description: "Supported front-end implementation" },
          { icon: Users, title: "Team Collaboration", description: "Worked closely with developers" },
        ]}
      />

      <ProjectOverview
        paragraphs={[
          "As a UX/UI Designer with Tech Collaborative, I designed user-friendly interfaces in Figma for a range of internal and client-facing projects.",
          "I worked closely with developers throughout the process to ensure designs translated cleanly into front-end implementation, bridging the gap between visual design and functional code."
        ]}
      />

      <TechStack technologies={["Figma", "UX/UI Design"]} />

      <TechnicalHighlights
        highlights={[
          "Designed user interfaces using Figma",
          "Collaborated directly with developers on front-end implementation",
          "Balanced usability and visual design across multiple projects"
        ]}
      />
    </ProjectLayout>
  );
}