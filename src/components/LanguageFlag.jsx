const UnitedStatesFlag = () => (
  <svg viewBox="0 0 28 20" className="h-5 w-7" aria-hidden="true">
    <rect width="28" height="20" fill="#fff" />
    {[0, 4, 8, 12, 16].map(y => (
      <rect key={y} y={y} width="28" height="2" fill="#b22234" />
    ))}
    <rect width="12" height="10.8" fill="#3c3b6e" />
    {[2, 6, 10].flatMap(x => [2, 5.4, 8.8].map(y => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="0.65" fill="#fff" />
    )))}
  </svg>
)

const BrazilFlag = () => (
  <svg viewBox="0 0 28 20" className="h-5 w-7" aria-hidden="true">
    <rect width="28" height="20" fill="#009b3a" />
    <path d="M14 2.2 25 10 14 17.8 3 10Z" fill="#ffdf00" />
    <circle cx="14" cy="10" r="4.5" fill="#002776" />
    <path d="M9.8 9.1c3.2-.9 6.7-.3 8.8 1.4" fill="none" stroke="#fff" strokeWidth="0.8" />
  </svg>
)

const LanguageFlag = ({ country }) => (
  country === 'us' ? <UnitedStatesFlag /> : <BrazilFlag />
)

export default LanguageFlag
