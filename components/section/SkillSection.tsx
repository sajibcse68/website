import Section from './section';

export default function SkillSection() {
  return (
    <Section title="SKILLS">
      <div className="md:flex text-sm">
        <div className="w-full">
          <>
            <span className="font-bold w-40">Core Technologies</span>: &nbsp;
            <p className="inline">
              JavaScript (10Y), React (7Y), TypeScript (5Y), Next.js (5Y),
              Webpack, Git – with a deep understanding of modern frontend
              development principles.
            </p>
          </>
        </div>
      </div>

      <div className="md:flex text-sm">
        <div className="w-full">
          <>
            <span className="font-bold w-40">State Management</span>: &nbsp;
            <p className="inline">
              Redux (+redux-saga), React Context, Vuex – architecting complex
              apps with efficient state/data flow strategies.
            </p>
          </>
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-full">
          <>
            <span className="font-bold w-40">Testing</span>: &nbsp;
            <p className="inline">
              Cypress, Jest, Puppeteer – ensuring code quality and robustness
              through comprehensive e2e/unit testing.
            </p>
          </>
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-full">
          <>
            <span className="font-bold w-40">UI/UX</span>: &nbsp;
            <p className="inline">
              Deliver pixel-perfect figma design implementation using CSS
              (Tailwind, styled-components, SCSS, Bootstrap, and Bulma).
            </p>
          </>
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-full">
          <>
            <span className="font-bold w-40">Data Visualization</span>: &nbsp;
            <p className="inline">
              Create engaging, interactive visualizations for large-scale
              datasets using D3.js.
            </p>
          </>
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-full">
          <>
            <span className="font-bold w-40">
              <span className="font-bold">Performance and SEO</span>:
            </span>
            : &nbsp;
            <p className="inline">
              Specialize in optimizing Next.js apps to enhance web performance,
              Core Web Vitals, and SEO rankings, achieving lightning-fast load
              times.
            </p>
          </>
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-full">
          <>
            <span className="font-bold w-40">Blockchain and Web3</span>: &nbsp;
            <p className="inline">
              Experience in building decentralized applications (dApps) using
              blockchain technologies, with hands-on experience in NFT apps,
              Web3 libraries, and exploring cutting-edge projects in the
              blockchain space.
            </p>
          </>
        </div>
      </div>
      <div className="md:flex text-sm">
        <div className="w-full">
          <>
            <span className="font-bold w-40">Additional Skills</span>: &nbsp;
            <p className="inline">
              Node.js, Vue.js, HTML5, SSR, Webflow, Prettier, WebSocket, Docker,
              RESTful/GraphQL/RPC APIs, AWS.
            </p>
          </>
        </div>
      </div>
    </Section>
  );
}
