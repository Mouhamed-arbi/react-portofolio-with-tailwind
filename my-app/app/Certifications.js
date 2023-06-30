import { useState } from 'react';
import myCertifications from './MyCertifications.js';

const Certifications = () => {
  const [certifications] = useState(myCertifications);

  return (
    <div>
      <div className="v-carousel carousel">
        {certifications.map((certification, i) => (
          <div key={i} className="v-carousel-item">
            <div className="v-sheet" style={{ height: '100%', color: 'transparent' }}>
              <div className="d-flex fill-height justify-center align-center">
                <a href={certification.certificateURL} target="_blank" rel="noopener noreferrer">
                  <img
                    src={certification.image}
                    alt="Certification Image"
                    className="certification-image"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .certification-image {
          max-width: 20%;
          max-height: 20%;
          object-fit: contain;
          margin: auto;
          display: block;
          transition: transform 0.1s ease-in-out;
          transition-delay: 0.1s;
        }

        @media screen and (max-width: 600px) {
          .certification-image {
            max-width: 100%;
            max-height: 100%;
          }
        }

        .certification-image:hover {
          transform: scale(1.8);
          z-index: 9999;
        }

        @media screen and (max-width: 768px) {
          .certification-image {
            max-width: 100%;
            max-height: 100%;
          }
        }

        @media screen and (max-width: 1024px) {
          .certification-image {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Certifications;
