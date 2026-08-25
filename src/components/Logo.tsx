"use client";

export default function Logo({ size = 46 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: "50%" }}
    >
      {/* Background white circle */}
      <circle cx="200" cy="200" r="198" fill="white" />

      {/* Outer circle - navy */}
      <circle cx="200" cy="200" r="190" stroke="#0F2B5C" strokeWidth="6" fill="none" />
      {/* Inner circle - orange */}
      <circle cx="200" cy="200" r="175" stroke="#F1691D" strokeWidth="3" fill="none" />

      {/* Africa continent silhouette - orange */}
      <path
        d="M195 55 C 170 52 148 65 140 82 C 132 99 128 118 130 138
           C 132 155 138 170 148 182 C 155 190 160 195 162 200
           C 163 204 160 212 155 218 C 148 228 142 242 140 255
           C 138 268 140 280 148 290 C 155 298 162 302 170 305
           C 178 308 185 310 192 310 C 196 310 198 308 200 305
           C 202 308 204 310 208 310 C 215 310 222 308 230 305
           C 238 302 245 298 252 290 C 260 280 262 268 260 255
           C 258 242 252 228 245 218 C 240 212 237 204 238 200
           C 240 195 245 190 252 182 C 262 170 268 155 270 138
           C 272 118 268 99 260 82 C 252 65 230 52 205 55
           C 202 55.5 198 55.5 195 55 Z"
        fill="#F1691D"
      />

      {/* Anubis/Jackal head - navy blue */}
      {/* Head shape */}
      <path
        d="M175 100 C 175 82 185 72 200 72 C 215 72 225 82 225 100
           L 222 120 C 220 132 214 138 200 138
           C 186 138 180 132 178 120 Z"
        fill="#0F2B5C"
      />
      {/* Snout */}
      <path
        d="M190 115 C 190 108 195 104 200 104 C 205 104 210 108 210 115
           L 208 128 C 206 132 203 134 200 134
           C 197 134 194 132 192 128 Z"
        fill="#F1691D"
      />
      {/* Eyes */}
      <ellipse cx="188" cy="98" rx="4" ry="3" fill="white" />
      <ellipse cx="212" cy="98" rx="4" ry="3" fill="white" />
      <ellipse cx="188" cy="98" rx="2" ry="2" fill="#0F2B5C" />
      <ellipse cx="212" cy="98" rx="2" ry="2" fill="#0F2B5C" />

      {/* Left ear */}
      <path
        d="M178 78 L170 48 L186 68 Z"
        fill="#0F2B5C"
      />
      {/* Right ear */}
      <path
        d="M222 78 L230 48 L214 68 Z"
        fill="#0F2B5C"
      />

      {/* Collar / pharaonic stripes */}
      <path
        d="M178 130 L172 150 C 172 150 176 156 184 156 L188 156"
        stroke="#0F2B5C"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M222 130 L228 150 C 228 150 224 156 216 156 L212 156"
        stroke="#0F2B5C"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Collar inner lines */}
      <path
        d="M183 134 L178 148"
        stroke="#FBF6EC"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M190 136 L187 148"
        stroke="#FBF6EC"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M217 134 L222 148"
        stroke="#FBF6EC"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M210 136 L213 148"
        stroke="#FBF6EC"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Graduation cap */}
      <path
        d="M178 68 L200 55 L222 68 L200 78 Z"
        fill="#0F2B5C"
      />
      <rect x="196" y="55" width="8" height="12" fill="#0F2B5C" rx="1" />
      {/* Tassel */}
      <circle cx="224" cy="62" r="3" fill="#0F2B5C" />
      <path
        d="M222 65 L226 72"
        stroke="#0F2B5C"
        strokeWidth="1.5"
      />

      {/* Gold decorative element at bottom of Africa */}
      <path
        d="M170 270 C 178 285 188 292 200 292 C 212 292 222 285 230 270"
        stroke="#F0B429"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M175 260 Q 185 275 200 278 Q 215 275 225 260"
        stroke="#F0B429"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* PharaonAcademia text */}
      <text
        x="200"
        y="345"
        textAnchor="middle"
        fontFamily="'Cinzel', serif"
        fontSize="26"
        fontWeight="700"
        fill="#0F2B5C"
      >
        Pharaon
        <tspan fill="#F1691D">Academia</tspan>
      </text>

      {/* Tagline banner */}
      <rect x="75" y="355" width="250" height="24" rx="4" fill="#0F2B5C" />
      <text
        x="200"
        y="372"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="11"
        fontWeight="600"
        fill="white"
        letterSpacing="1.5"
      >
        VOTRE CARRIÈRE CRÉATIVE COMMENCE ICI !
      </text>
    </svg>
  );
}
