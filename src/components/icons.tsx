type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="180px"
      height="116px"
      viewBox="0 0 180 116"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <defs>
        <linearGradient
          x1="0%"
          y1="-1.08436166e-14%"
          x2="100%"
          y2="100%"
          id="linearGradient-5--zes986x-1">
          <stop stopColor="#F4A261" offset="0%" />
          <stop stopColor="#E76F51" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          id="linearGradient-5--zes986x-2">
          <stop stopColor="#2A9D8F" offset="0%" />
          <stop stopColor="#264653" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <g id="Group">
          <path
            d="M160,70 C160,48 142,30 120,30 C115,30 110,31 105,33 C100,13 82,0 62,0 C37,0 17,20 17,45 C17,49 18,54 19,58 C7,62 0,73 0,86 C0,103 13,116 30,116 L150,116 C167,116 180,103 180,86 C180,72 171,61 160,58 L160,70 Z"
            id="Path"
            fill="url(#linearGradient-5--zes986x-1)"
            fillRule="nonzero"
          />
          <path
            d="M75,20 L105,20 C111.666667,20 115,23.3333333 115,30 L115,60 C115,66.6666667 111.666667,70 105,70 L75,70 C68.3333333,70 65,66.6666667 65,60 L65,30 C65,23.3333333 68.3333333,20 75,20 Z"
            id="Path"
            fill="url(#linearGradient-5--zes986x-2)"
            fillRule="nonzero"
          />
          <path
            d="M72,35 L108,35 M72,45 L108,45 M72,55 L108,55"
            id="Shape"
            stroke="#FFFFFF"
            strokeWidth={2}
            fill="#000000"
            fillRule="nonzero"
            strokeLinecap="round"
          />
          <path
            d="M90,75 L90,105 L80,95 M90,105 L100,95"
            id="Shape"
            stroke="#2A9D8F"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}
