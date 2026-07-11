import { Brain, Users, TrendingUp } from 'lucide-react';
import { comingSoon } from '../../assets';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

export default function AIFashionRecommendation() {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="AI Fashion Recommendation System"
        subtitle="Girls Who Code — Project Internship"
        githubUrl=""
        features={[
          { icon: Brain, title: "AI-Driven Logic", description: "Trend-based recommendation algorithms" },
          { icon: TrendingUp, title: "Data Analysis", description: "Analyzed user preference patterns" },
          { icon: Users, title: "Team Collaboration", description: "Worked alongside a development team" },
        ]}
      />

      <ProjectOverview
        paragraphs={[
          "As part of my role with Girls Who Code, I collaborated on the development of an AI-driven fashion recommendation system designed to suggest outfits and styles based on individual user preferences.",
          "My focus was on analyzing user preference data and helping shape the trend-based recommendation logic that powered the system's suggestions, working alongside a team to translate that analysis into functional product logic."
        ]}
      />

      <TechStack technologies={["AI/ML", "Data Analysis", "Python"]} />

      <TechnicalHighlights
        highlights={[
          "Analyzed user preference data to inform recommendation logic",
          "Supported development of trend-based suggestion algorithms",
          "Collaborated with a team on an AI-driven product feature"
        ]}
      />
    </ProjectLayout>
  );
}