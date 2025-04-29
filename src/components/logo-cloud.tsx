import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between pt-10 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Cardano"
        src="/logo-cloud/cardano-transparent.png"
        className="h-18 max-sm:mx-auto sm:h-16 lg:h-24"
      />

      <svg
        height="21"
        width="131"
        fill="none"
        viewBox="0 0 131 21"
        xmlns="http://www.w3.org/2000/svg"
        className="h-18 scale-150 max-sm:mx-auto sm:h-16 lg:h-24"
      >
        <path
          className="max-sm:hidden"
          d="M69.0928 8.66406H130.176V12.4496H69.4597L69.0928 8.66406Z"
          fill="url(#paint0_linear_1812_19989)"
        />
        <path
          className="max-sm:hidden"
          d="M63.6802 4.88086H130.174V8.66638H69.0702L63.6802 4.88086Z"
          fill="url(#paint1_linear_1812_19989)"
        />
        <path
          className="max-sm:hidden"
          d="M69.4556 16.2363H130.172V20.0218H69.4556V16.2363Z"
          fill="url(#paint2_linear_1812_19989)"
        />
        <path
          className="max-sm:hidden"
          d="M69.4556 12.4531H130.172V16.2386H69.4556V12.4531Z"
          fill="url(#paint3_linear_1812_19989)"
        />
        <path
          d="M0 20.0245H3.16236V18.257C4.01847 19.2325 5.23566 20.4992 8.00783 20.4992C13.2697 20.4992 15.1595 15.5664 15.1595 12.637C15.1595 8.75825 12.3088 4.87955 7.9292 4.87955C6.32182 4.87955 4.63872 5.48524 3.44482 6.69951V0.5H0V20.0245ZM3.24099 12.5059C3.24099 10.3686 4.87458 8.10015 7.51862 8.10015C9.69675 8.10015 11.7176 9.81529 11.7176 12.6632C11.7176 15.511 9.82488 17.2815 7.57104 17.2815C5.55015 17.2815 3.2439 15.7498 3.2439 12.5059H3.24099Z"
          fill="#000000"
        />
        <path
          d="M30.4562 14.2728C30.561 13.7982 30.6629 13.1925 30.6629 12.5053C30.6629 8.81293 27.9403 4.87891 23.2258 4.87891C18.5114 4.87891 15.6577 8.60036 15.6577 12.7411C15.6577 16.8819 18.8725 20.4985 23.252 20.4985C26.6474 20.4985 29.3671 18.0438 30.197 15.4056H26.5687C25.9194 16.6198 24.7808 17.2779 23.252 17.2779C20.7885 17.2779 19.4432 15.2192 19.286 14.2699H30.4562V14.2728ZM19.1812 11.4511C19.8276 8.73431 21.8514 8.09951 23.2491 8.09951C25.0895 8.09951 26.7493 9.10121 27.1366 11.4511H19.1812Z"
          fill="#000000"
        />
        <path
          d="M46.2809 5.37976H43.1186V7.22593H43.0662C42.9613 7.01627 41.2258 4.87891 38.2964 4.87891C34.3042 4.87891 31.0923 8.1228 31.0923 12.6101C31.0923 17.4905 34.3828 20.4985 38.0897 20.4985C39.9038 20.4985 42.0295 19.523 43.1186 18.2039V20.0239H46.2809V5.37976ZM43.0167 12.6625C43.0167 15.3794 41.2025 17.2808 38.8177 17.2808C36.4328 17.2808 34.54 15.2483 34.54 12.7703C34.54 10.5805 35.9902 8.09951 38.8177 8.09951C40.8647 8.09951 43.0167 9.63119 43.0167 12.6625Z"
          fill="#000000"
        />
        <path
          d="M47.866 20.0288H51.3137V12.7198C51.3137 11.1619 51.3137 8.1015 54.0597 8.1015C56.1854 8.1015 56.9366 9.89525 56.9366 11.9016V20.0288H60.3844V12.7198C60.3844 11.7967 60.3582 10.3466 60.9027 9.47593C61.3948 8.63147 62.3296 8.10441 63.2876 8.10441C66.0102 8.10441 66.0102 11.06 66.0102 11.9045V20.0317H69.458V11.4823C69.458 9.31869 68.9396 7.92096 68.3689 7.15512C67.8506 6.41549 66.4499 4.88672 63.6254 4.88672C62.6149 4.88672 60.4892 4.99155 58.9867 7.18133C57.6384 5.07017 55.6175 4.88672 54.8401 4.88672C52.3533 4.88672 51.3661 6.15341 51.0807 6.62806H51.0283V5.38757H47.866V20.0317V20.0288Z"
          fill="#000000"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1812_19989"
            gradientUnits="userSpaceOnUse"
            x1="99.6361"
            x2="99.6361"
            y1="10.65"
            y2="14.8723"
          >
            <stop stopColor="#FF6B6B" />
            <stop offset="0.33" stopColor="#FE1414" />
            <stop offset="0.6" stopColor="#8E0900" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1812_19989"
            gradientUnits="userSpaceOnUse"
            x1="96.9287"
            x2="96.9287"
            y1="6.8668"
            y2="11.0891"
          >
            <stop stopColor="#BBDBFF" />
            <stop offset="0.33" stopColor="#139EDD" />
            <stop offset="0.6" stopColor="#B9F7EA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1812_19989"
            gradientUnits="userSpaceOnUse"
            x1="99.8154"
            x2="99.8154"
            y1="18.2223"
            y2="22.4446"
          >
            <stop stopColor="#BBFFCA" />
            <stop offset="0.33" stopColor="#48DD13" />
            <stop offset="0.6" stopColor="#008805" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1812_19989"
            gradientUnits="userSpaceOnUse"
            x1="99.8154"
            x2="99.8154"
            y1="14.4391"
            y2="18.6614"
          >
            <stop stopColor="#F1E869" />
            <stop offset="0.33" stopColor="#FEA514" />
            <stop offset="0.6" stopColor="#FF4539" />
          </linearGradient>
        </defs>
      </svg>
      <img
        alt="Bull"
        src="/logo-cloud/bull.webp"
        className="h-22 lg:h-30 scale-150 max-sm:mx-auto sm:h-20"
      />
      <img
        alt="Myria"
        src="/logo-cloud/myria.png"
        className="h-18 max-sm:mx-auto sm:h-16 lg:h-24"
      />
      <img
        alt="XAI"
        src="/logo-cloud/xai.jpg"
        className="h-18 scale-150 max-sm:mx-auto sm:h-16 lg:h-24"
      />
    </div>
  )
}
