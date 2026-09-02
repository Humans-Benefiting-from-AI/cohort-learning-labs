import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'next-env.d.ts',
      'design_handoff_site_redesign/designs/support.js',
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
]

export default config
