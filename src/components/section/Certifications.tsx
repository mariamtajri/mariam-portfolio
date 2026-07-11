import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const coursework = [
    "Data Analytics",
    "Financial Accounting",
    "Managerial Accounting",
    "Statistics",
    "Business Writing",
    "Calculus",
    "Python",
    "C++",
  ];

  const technicalSkills = [
    "AI Research & Training",
    "Technical Writing",
    "Data Analysis",
    "UX/UI Design",
    "Communication",
    "Presentation",
  ];

  const languages = [
    "English",
    "Urdu",
    "Hindi",
  ];

  const renderPillGroup = (items: string[]) => (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <span
          key={index}
          className="px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300 hover:scale-105"
          style={{
            borderColor: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[200],
            color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500],
            backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.6)',
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <section id="certifications" className="py-12 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-12" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>
          Additional
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-center mb-4" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>
              Relevant Coursework
            </h3>
            {renderPillGroup(coursework)}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-center mb-4" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>
              Technical Skills
            </h3>
            {renderPillGroup(technicalSkills)}
          </div>

          <div>
            <h3 className="text-xl font-semibold text-center mb-4" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>
              Languages
            </h3>
            {renderPillGroup(languages)}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;