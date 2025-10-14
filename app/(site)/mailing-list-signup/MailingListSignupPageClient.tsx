"use client"

import { useEffect } from "react"

export default function MailingListSignupPageClient() {
  useEffect(() => {
    // Fix page load scroll bug - always start at top
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Intro Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">Join Georgia's Mailing Lists</h1>
            <p className="font-body text-lg text-brand-black/80 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the classes and events that interest you most. Choose from Studio Classes in Portugal,
              Online Classes worldwide, or Retreats & Workshops in inspiring locations.
            </p>
          </header>

          <div className="signup-grid">
            {/* Studio Classes Mailing List */}
            <div className="signup-card">
              <h3>Studio Classes</h3>
              <p className="desc">Updates about Georgia's Iyengar Yoga studio classes in Colares, Portugal.</p>

              <div id="mc_embed_signup">
                <form
                  action="https://yogabahia.us12.list-manage.com/subscribe/post?u=de0660bc21e23598e85d57f41&amp;id=9625284825&amp;f_id=008cfbe8f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                      <input
                        type="text"
                        name="FNAME"
                        className="required"
                        id="mce-FNAME"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input
                        type="text"
                        name="LNAME"
                        className="required"
                        id="mce-LNAME"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input type="text" name="PHONE" id="mce-PHONE" placeholder="Phone (optional)" />
                    </div>
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                      <input type="text" name="b_de0660bc21e23598e85d57f41_9625284825" tabIndex={-1} defaultValue="" />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Online Classes Mailing List */}
            <div className="signup-card">
              <h3>Online Classes</h3>
              <p className="desc">Updates about Georgia's live Zoom Iyengar Yoga classes for students worldwide.</p>

              <div id="mc_embed_signup_online">
                <form
                  action="https://yogabahia.us12.list-manage.com/subscribe/post?u=de0660bc21e23598e85d57f41&amp;id=c65e6e3a0d&amp;f_id=00b3fbe8f0"
                  method="post"
                  id="mc-embedded-subscribe-form-online"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll_online">
                    <div className="mc-field-group">
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL-online"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input
                        type="text"
                        name="FNAME"
                        className="required"
                        id="mce-FNAME-online"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input
                        type="text"
                        name="LNAME"
                        className="required"
                        id="mce-LNAME-online"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input type="text" name="PHONE" id="mce-PHONE-online" placeholder="Phone (optional)" />
                    </div>
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                      <input type="text" name="b_de0660bc21e23598e85d57f41_c65e6e3a0d" tabIndex={-1} defaultValue="" />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe-online"
                        className="button"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Retreats & Workshops Mailing List - Centered in second row */}
            <div className="signup-card" style={{ gridColumn: "1 / -1", margin: "0 auto" }}>
              <h3>Retreats & Workshops</h3>
              <p className="desc">
                Updates about Georgia's Iyengar Yoga retreats in Portugal and international workshops.
              </p>

              <div id="mc_embed_signup_retreats">
                <form
                  action="https://yogabahia.us12.list-manage.com/subscribe/post?u=de0660bc21e23598e85d57f41&amp;id=c65e6e3a0d&amp;f_id=00b2fbe8f0"
                  method="post"
                  id="mc-embedded-subscribe-form-retreats"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll_retreats">
                    <div className="mc-field-group">
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL-retreats"
                        placeholder="Your Email Address"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input
                        type="text"
                        name="FNAME"
                        className="required"
                        id="mce-FNAME-retreats"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input
                        type="text"
                        name="LNAME"
                        className="required"
                        id="mce-LNAME-retreats"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="mc-field-group">
                      <input type="text" name="PHONE" id="mce-PHONE-retreats" placeholder="Phone (optional)" />
                    </div>
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                      <input type="text" name="b_de0660bc21e23598e85d57f41_c65e6e3a0d" tabIndex={-1} defaultValue="" />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe-retreats"
                        className="button"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .signup-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(280px, 1fr));
          gap: 28px;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .signup-grid { 
            grid-template-columns: 1fr; 
          }
        }
        .signup-card {
          max-width: 520px;
          width: 100%;
          padding: 20px;
          border: 1px solid #CDCDCB;
          border-radius: 16px;
          background: #fff;
          margin: 0 auto;
        }
        .signup-card h3 { 
          margin: 0 0 8px; 
          font-size: 1.3rem; 
          line-height: 1.3; 
          color: #000; 
          font-family: var(--font-heading);
        }
        .signup-card p.desc { 
          margin: 0 0 16px; 
          color: #6F6350; 
          font-size: 0.95rem;
          font-family: var(--font-body);
          line-height: 1.4;
        }

        /* Compact Mailchimp form */
        .mc-form, #mc-embedded-subscribe-form, #mc-embedded-subscribe-form-online, #mc-embedded-subscribe-form-retreats { 
          margin: 0; 
        }
        .mc-field-group { 
          margin-bottom: 12px; 
        }
        .mc-field-group label { 
          display: none; 
        }
        .mc-field-group input[type="text"],
        .mc-field-group input[type="email"] {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #CDCDCB;
          border-radius: 12px;
          outline: none;
          box-shadow: none;
          font-family: var(--font-body);
          font-size: 14px;
          background: #fff;
        }
        .mc-field-group input:focus { 
          border-color: #ED991A; 
          box-shadow: 0 0 0 2px rgba(237, 153, 26, 0.1);
        }
        .signup-card button,
        #mc-embedded-subscribe,
        #mc-embedded-subscribe-online,
        #mc-embedded-subscribe-retreats {
          background: #ED991A;
          color: #fff;
          border: 0;
          border-radius: 12px;
          padding: 14px 20px;
          cursor: pointer;
          width: 100%;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 15px;
          margin-top: 8px;
          transition: all 0.2s ease;
        }
        .signup-card button:hover,
        #mc-embedded-subscribe:hover,
        #mc-embedded-subscribe-online:hover,
        #mc-embedded-subscribe-retreats:hover {
          background: #F6D207;
          color: #000;
          transform: translateY(-1px);
        }
        /* Hide Mailchimp badge if present */
        .refferal_badge, 
        .referral_badge, 
        a[title*="Mailchimp"],
        .brandingLogo,
        .mc-referral,
        [data-name="BMC-panel"] {
          display: none !important;
        }
        /* Ensure no unwanted scrolling from Mailchimp elements */
        #mc_embed_signup,
        #mc_embed_signup_online,
        #mc_embed_signup_retreats {
          scroll-behavior: auto;
        }
      `}</style>
    </div>
  )
}
