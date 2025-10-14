export const metadata = {
  title: "About B.K.S. Iyengar | Founder of Iyengar Yoga | Yoga with Georgia",
  description:
    "Learn about B.K.S. Iyengar, the founder of Iyengar Yoga. Discover his early life, teaching legacy, and the profound influence on yoga worldwide, as shared through Georgia's teaching lineage.",
  keywords:
    "B.K.S. Iyengar, Iyengar Yoga, Iyengar teaching, yoga lineage, yoga history, Georgia Marnham teacher lineage",
}

export default function AboutBKSIyengarPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl text-brand-black mb-6">About B.K.S. Iyengar</h1>
            <p className="font-body text-lg text-brand-black/80 max-w-2xl mx-auto">
              Discover the life and legacy of B.K.S. Iyengar, the founder of Iyengar Yoga and one of the most
              influential yoga teachers of the modern era.
            </p>
          </header>

          <div className="space-y-12">
            {/* Portrait */}
            <div className="text-center">
              <img
                src="/bks-iyengar-authentic-portrait.png"
                alt="B.K.S. Iyengar in traditional prayer pose (namaste), showing the spiritual depth and reverence of the founder of Iyengar Yoga"
                className="w-64 h-80 object-cover rounded-lg mx-auto shadow-lg"
              />
            </div>

            {/* Early Life & Practice */}
            <section>
              <h2 className="font-heading text-3xl text-brand-black mb-6">Early Life & Practice</h2>
              <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
                <p>
                  Bellur Krishnamachar Sundararaja Iyengar was born on 14 December 1918 in the village of Bellur in
                  Karnataka, India. He was the 11th of 13 children born to Sri Krishnamachar and Seshamma. His family
                  was poor, and as a child, B.K.S. Iyengar was sickly, suffering from malaria, tuberculosis, typhoid,
                  and general malnutrition.
                </p>

                <p>
                  At the age of 16, he was invited by his brother-in-law, the renowned yoga teacher Sri T.
                  Krishnamacharya, to come to Mysore to improve his health through yoga practice. Under
                  Krishnamacharya's guidance, Iyengar began what would become a lifelong dedication to yoga.
                </p>

                <p>
                  Initially, Iyengar found the practice extremely challenging due to his poor health and lack of natural
                  flexibility. However, his determination and systematic approach to understanding each posture led to
                  remarkable progress. He began teaching yoga at the age of 18, initially to support himself
                  financially.
                </p>
              </div>
            </section>

            {/* First Pull Quote */}
            <div className="bg-brand-warm-gray/20 border-l-4 border-brand-orange p-6 rounded-r-lg">
              <blockquote className="font-body text-xl text-brand-black/90 italic text-center">
                "Yoga teaches us to cure what need not be endured and endure what cannot be cured."
              </blockquote>
              <cite className="block text-center mt-4 font-body text-sm text-brand-black/70">— B.K.S. Iyengar</cite>
            </div>

            {/* Teaching & Global Influence */}
            <section>
              <h2 className="font-heading text-3xl text-brand-black mb-6">Teaching & Global Influence</h2>
              <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
                <p>
                  In 1952, Iyengar met the famous violinist Yehudi Menuhin, who became his student and helped introduce
                  Iyengar's teachings to the Western world. This meeting marked the beginning of yoga's global spread
                  and Iyengar's international recognition.
                </p>

                <p>
                  Iyengar developed a unique method of yoga that emphasized precision, alignment, and the use of props
                  such as blocks, straps, and bolsters to help students achieve proper postures safely. His systematic
                  approach made yoga accessible to people of all ages and physical conditions.
                </p>

                <p>
                  He authored several influential books, including "Light on Yoga" (1966), which became known as the
                  "bible of yoga" and has been translated into numerous languages. His other notable works include
                  "Light on Pranayama," "Light on the Yoga Sutras of Patanjali," and "Light on Life."
                </p>

                <p>
                  In 1975, he established the Ramamani Iyengar Memorial Yoga Institute (RIMYI) in Pune, India, named
                  after his late wife. This institute became the world centre for Iyengar Yoga, attracting students from
                  around the globe.
                </p>
              </div>
            </section>

            {/* Second image */}
            <div className="text-center">
              <img
                src="/rimyi-institute-pune.jpg"
                alt="The courtyard of RIMYI (Ramamani Iyengar Memorial Yoga Institute) in Pune, India, founded by B.K.S. Iyengar, showing traditional yoga props, his memorial statue, and the peaceful garden where thousands of students have studied"
                className="w-full max-w-lg h-64 object-cover rounded-lg mx-auto shadow-lg"
              />
            </div>

            {/* Second Pull Quote */}
            <div className="bg-brand-warm-gray/20 border-l-4 border-brand-orange p-6 rounded-r-lg">
              <blockquote className="font-body text-xl text-brand-black/90 italic text-center">
                "Yoga does not just change the way we see things, it transforms the person who sees."
              </blockquote>
              <cite className="block text-center mt-4 font-body text-sm text-brand-black/70">— B.K.S. Iyengar</cite>
            </div>

            {/* Legacy */}
            <section>
              <h2 className="font-heading text-3xl text-brand-black mb-6">Legacy</h2>
              <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
                <p>
                  B.K.S. Iyengar practiced yoga for more than 75 years and taught for over 60 years. He continued
                  teaching and practicing until shortly before his death on 20 August 2014, at the age of 95. His
                  dedication to yoga was unwavering, and he practiced daily until the end of his life.
                </p>

                <p>
                  His method, known as Iyengar Yoga, is now practiced worldwide by millions of students. The Iyengar
                  method is characterised by its emphasis on precision, alignment, sequencing, and timing. It is also
                  known for its therapeutic applications and the use of props to make poses accessible to all students.
                </p>

                <p>
                  Iyengar received numerous honours during his lifetime, including the Padma Shri (1991), Padma Bhushan
                  (2002), and Padma Vibhushan (2014) from the Government of India. Time magazine named him one of the
                  100 most influential people in the world in 2004.
                </p>

                <p>
                  Today, his children Geeta and Prashant Iyengar, along with his granddaughter Abhijata Sridhar-Iyengar,
                  continue to teach at RIMYI and carry forward his legacy. Certified Iyengar teachers around the world
                  maintain the high standards and precise methodology that he established.
                </p>
              </div>
            </section>

            {/* Connection to Georgia */}
            <section className="bg-brand-warm-gray/10 rounded-lg p-8">
              <h2 className="font-heading text-3xl text-brand-black mb-6">Connection to Georgia</h2>
              <div className="space-y-6 font-body text-lg text-brand-black/90 leading-relaxed">
                <p>
                  Georgia Marnham has studied directly in the lineage of B.K.S. Iyengar, having traveled to the Ramamani
                  Iyengar Memorial Yoga Institute (RIMYI) in Pune, India, on several occasions. There, she studied with
                  B.K.S. Iyengar himself, as well as his daughter Geeta and son Prashant.
                </p>

                <p>
                  As a certified Level 3 Iyengar Yoga teacher, Georgia carries forward the precise methodology and
                  therapeutic approach that B.K.S. Iyengar developed. Her teaching reflects the core principles of
                  Iyengar Yoga: attention to alignment, intelligent use of props, and the understanding that yoga is
                  accessible to all bodies and all stages of life.
                </p>

                <p>
                  Through her classes in Portugal and online, Georgia shares not just the physical practice of Iyengar
                  Yoga, but also its deeper philosophy and transformative potential, honouring the legacy of this great
                  teacher while making it relevant for contemporary students.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
