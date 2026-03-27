// import React from 'react';
// import { SiFigma, SiFramer } from 'react-icons/si';
// import './Specialize.css';

// const Specialize = () => {
//   return (
//     <section className="specialize-section py-5 position-relative">
//       <div className="specialize-bottom-border"></div>
//       <div className="custom-container">
//         <div className="row align-items-center mt-3 mt-md-5">

//           {/* Left Column: Orbiting Logos */}
//           <div className="col-12 col-md-6 mb-5 mb-md-0 d-flex justify-content-center align-items-center position-relative specialize-left-col">
//             {/* Wrapper with overflow:visible so absolute badges can bleed out */}
//             <div className="orbit-scene-wrapper">
//               <div className="orbit-scene">

//                 {/* SVG Orbit Rings — 3 same-size tilted ellipses, offset from each other like the Figma design */}
//                 <svg className="orbit-rings-svg" viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg">
//                   {/* Outer ring — widest */}
//                   <ellipse cx="300" cy="265" rx="230" ry="145"
//                     stroke="#CACDD6" strokeWidth="0.8" fill="none"
//                     transform="rotate(-25 300 265)" />
//                   {/* Middle ring */}
//                   <ellipse cx="275" cy="280" rx="210" ry="132"
//                     stroke="#CACDD6" strokeWidth="0.8" fill="none"
//                     transform="rotate(-25 275 280)" />
//                   {/* Inner ring */}
//                   <ellipse cx="255" cy="295" rx="188" ry="118"
//                     stroke="#CACDD6" strokeWidth="0.8" fill="none"
//                     transform="rotate(-25 255 295)" />
//                 </svg>

//                 {/* Adobe Illustrator — top-left */}
//                 <div className="orbit-icon-badge badge-ai">
//                   <div className="badge-inner badge-ai-inner">
//                     <span className="ai-text">Ai</span>
//                   </div>
//                 </div>

//                 {/* Figma — top-right (circle) */}
//                 <div className="orbit-icon-badge badge-figma">
//                   <div className="badge-inner badge-figma-inner">
//                     <SiFigma className="badge-svg-icon figma-icon" />
//                   </div>
//                 </div>

//                 {/* Adobe Photoshop — bottom-left */}
//                 <div className="orbit-icon-badge badge-ps">
//                   <div className="badge-inner badge-ps-inner">
//                     <span className="ps-text">Ps</span>
//                   </div>
//                 </div>

//                 {/* Framer — bottom-right (circle) */}
//                 <div className="orbit-icon-badge badge-framer">
//                   <div className="badge-inner badge-framer-inner">
//                     <SiFramer className="badge-svg-icon framer-icon" />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>


//           {/* Right Column: Specialize Cards */}
//           <div className="col-12 col-md-6 ps-md-5">
//             <h2 className="specialize-title mb-5 fw-bold text-dark">I specialize in</h2>

//             <div className="specialize-cards">

//               {/* Card 1 */}
//               <div className="spec-card card-design mb-4">
//                 {/* Background Shapes */}
//                 <div className="card-pattern card-1-pattern"></div>
//                 <div className="card-ellipse ellipse-2179"></div>
//                 <div className="card-ellipse ellipse-2180"></div>
//                 <div className="card-ellipse ellipse-2181"></div>

//                 <div className="card-content">
//                   <div className="card-number">1</div>
//                   <h3 className="card-heading card-heading-design">Design</h3>
//                   <p className="card-text card-text-design">
//                     I translate UI/UX designs into responsive, high-performing figma with precision and attention to detail.
//                   </p>
//                 </div>
//               </div>

//               {/* Card 2 */}
//               <div className="spec-card card-problem mb-4">
//                 <div className="card-pattern card-2-pattern"></div>
//                 <div className="card-ellipse ellipse-2179 card-2-ellipse-2179"></div>
//                 <div className="card-ellipse ellipse-2180 card-2-ellipse-2180"></div>
//                 <div className="card-ellipse ellipse-2181 card-2-ellipse-2181"></div>

//                 <div className="card-content">
//                   <div className="card-number card-number-2">2</div>
//                   <h3 className="card-heading card-heading-problem">Problem Solving</h3>
//                   <p className="card-text card-text-problem">
//                     My design approach is centered around solving real user problems.
//                   </p>
//                 </div>
//               </div>

//               {/* Card 3 */}
//               <div className="spec-card card-delivery">
//                 <div className="card-pattern card-3-pattern"></div>
//                 <div className="card-ellipse ellipse-2179"></div>
//                 <div className="card-ellipse ellipse-2180"></div>
//                 <div className="card-ellipse ellipse-2181"></div>

//                 <div className="card-content">
//                   <div className="card-number">3</div>
//                   <h3 className="card-heading card-heading-delivery">Timely Delivery &amp; Quality</h3>
//                   <p className="card-text card-text-delivery">
//                     I value both quality and time. Every project is delivered with a strong focus on detail, usability, and performance without missing deadlines.
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Specialize;




import React from 'react';
import { SiFramer } from 'react-icons/si';
import illustration from '../assets/illustrator.png';
import figma from '../assets/figma.png';
import photoshop from '../assets/photoshop.png';

import './Specialize.css';

const Specialize = () => {
  return (
    <section className="specialize-section">
      <div className="vertical-dashed-divider"></div>
      <div className="custom-container">
        <div className="specialize-wrapper">

          {/* Left Column: Elliptical Orbiting Scene */}
          <div className="orbit-area">
            <div className="orbit-scene">

              {/* Elliptical Rings based on Figma: 383x551 rotated -45deg */}
              <svg width="726" height="726" viewBox="0 0 726 726" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M135.824 200.358C173.085 163.097 228.596 151.066 288.29 161.82C347.983 172.574 411.808 206.107 465.594 259.893C519.38 313.68 552.914 377.505 563.668 437.198C574.422 496.892 562.391 552.403 525.13 589.664C487.869 626.925 432.358 638.955 372.664 628.201C312.972 617.448 249.146 583.914 195.36 530.128C141.573 476.341 108.04 412.516 97.2866 352.824C86.5326 293.13 98.5632 237.619 135.824 200.358Z" stroke="#EBECF0" />
                <path d="M168.09 168.091C205.351 130.831 260.862 118.799 320.557 129.553C380.249 140.307 444.074 173.84 497.861 227.627C551.647 281.413 585.181 345.238 595.934 404.931C606.688 464.625 594.657 520.136 557.396 557.397C520.135 594.658 464.625 606.689 404.931 595.935C345.238 585.181 281.413 551.647 227.626 497.861C173.84 444.074 140.307 380.249 129.553 320.557C118.799 260.863 130.83 205.352 168.09 168.091Z" stroke="#EBECF0" />
                <path d="M200.358 135.825C237.619 98.5637 293.13 86.5326 352.825 97.2866C412.517 108.04 476.342 141.573 530.128 195.36C583.915 249.146 617.448 312.972 628.202 372.664C638.956 432.359 626.925 487.869 589.664 525.13C552.403 562.391 496.892 574.422 437.198 563.668C377.506 552.914 313.68 519.38 259.894 465.594C206.108 411.808 172.574 347.983 161.821 288.29C151.067 228.596 163.097 173.086 200.358 135.825Z" stroke="#EBECF0" />
              </svg>

              {/* Icon Badges positioned along the elliptical paths */}
              <img src={illustration} alt="Illustrator" className="orbit-icon orbit-icon-ai" />

              <img src={photoshop} alt="Photoshop" className="orbit-icon orbit-icon-ps" />
              <img src={figma} alt="Figma" className="orbit-icon orbit-icon-figma" />

              <div className="orbit-badge framer-badge">
                <div className="badge-core"><SiFramer /></div>
              </div>
            </div>
          </div>

          {/* Right Column: Specialize Content */}
          <div className="content-area">
            <h2 className="specialize-title">I specialize in</h2>

            <div className="specialize-cards-stack">
              {/* Card 1 */}
              <div className="spec-card spec-card-design">
                <div className="card-decorations">
                  <div className="shape shape-arc-main"></div>
                  <div className="shape shape-arc-inner"></div>
                  <div className="shape shape-arc-upper"></div>
                </div>
                <div className="card-info">
                  <span className="card-index">1</span>
                  <h3 className="card-heading">Design</h3>
                  <p className="card-description">
                    I translate UI/UX designs into responsive, high-performing figma with precision and attention to detail.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="spec-card spec-card-problem">
                <div className="card-decorations">
                  <div className="shape shape-arc-main"></div>
                  <div className="shape shape-arc-inner"></div>
                  <div className="shape shape-arc-upper"></div>
                </div>
                <div className="card-info">
                  <span className="card-index card-index-p">2</span>
                  <h3 className="card-heading">Problem Solving</h3>
                  <p className="card-description description-p">
                    My design approach is centered around solving real user problems.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="spec-card spec-card-delivery">
                <div className="card-decorations">
                  <div className="shape shape-arc-main"></div>
                  <div className="shape shape-arc-inner"></div>
                  <div className="shape shape-arc-upper"></div>
                </div>
                <div className="card-info">
                  <span className="card-index">3</span>
                  <h3 className="card-heading">Timely Delivery & Quality</h3>
                  <p className="card-description">
                    I value both quality and time. Every project is delivered with a strong focus on detail, usability, and performance without missing deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-dashed-divider"></div>
    </section>
  );
};

export default Specialize;