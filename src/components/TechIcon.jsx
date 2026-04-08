const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TechIcon = ({ icon, color, alt, className, useDevicon }) => {
  if (useDevicon) {
    const deviconPaths = {
      github: `${DEVICON_CDN}/github/github-original.svg`,
      git: `${DEVICON_CDN}/git/git-original.svg`,
      azure: `${DEVICON_CDN}/azure/azure-original.svg`
    };
    const deviconPath = deviconPaths[useDevicon] || deviconPaths.github;
    return <img src={deviconPath} alt={alt} className={className} />;
  }
  const hex = color.replace("#", "");
  return (
    <img
      src={`https://cdn.simpleicons.org/${icon}/${hex}?viewbox=auto`}
      alt={alt}
      className={className}
    />
  );
};

export default TechIcon;
