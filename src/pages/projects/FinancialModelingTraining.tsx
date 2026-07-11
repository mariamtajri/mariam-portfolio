import { LineChart, Users, GraduationCap } from 'lucide-react';
import { comingSoon } from '../../assets';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

export default function FinancialModelingTraining() {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="Financial Modeling & Valuation Training"
        subtitle="Finance & Investment Club — Analyst Training Program"
        githubUrl=""
        features={[
          { icon: LineChart, title: "Financial Modeling", description: "Built models and valuation analyses" },
          { icon: GraduationCap, title: "Hands-On Training", description: "Workshops led by industry professionals" },
          { icon: Users, title: "Alumni Network", description: "Connected with 300+ global alumni" },
        ]}
      />

      <ProjectOverview
        paragraphs={[
          "I completed an analyst training program through the Finance & Investment Club, covering core skills in financial modeling, valuation, and business analysis.",
          "The program combined hands-on workshops with fireside chats and speaker events featuring industry professionals from investment banking, venture capital, and management consulting, and connected me with a network of 300+ global alumni."
        ]}
      />

      <TechStack technologies={["Financial Modeling", "Valuation", "Excel"]} />

      <TechnicalHighlights
        highlights={[
          "Built financial models and valuation analyses through hands-on workshops",
          "Engaged with 300+ global alumni through coffee chats and speaker events",
          "Learned directly from professionals in investment banking, VC, and consulting"
        ]}
      />
    </ProjectLayout>
  );
}