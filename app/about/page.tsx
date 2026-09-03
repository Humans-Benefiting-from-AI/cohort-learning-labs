import type { Metadata } from 'next'
import Image from 'next/image'
import ConsultationLink from '@/components/ConsultationLink'

export const metadata: Metadata = {
  title: 'Elie Schulman | Cohort Learning Labs',
  description:
    'For about two years, Elie Schulman sat in a group without speaking. That is why nobody in a Cohort Learning Labs group is hurried.',
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-rule bg-ground py-14 lg:pb-20 lg:pt-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">Elie Schulman</p>
            <div>
              <h1 className="max-w-[22ch] font-serif text-[44px] leading-[0.96] tracking-[-0.015em] text-ink min-[480px]:text-[56px] lg:text-[88px]">
                For about two years, I did not open my mouth.
              </h1>
              <p className="mt-8 font-sans text-[12.5px] tracking-[0.06em] text-faint">
                <a
                  href="https://18forty.org/podcast/elie-schulman-does-therapy-work-a-patients-journey/"
                  className="border-b border-rule pb-0.5 transition-colors duration-150 hover:text-accent-hover"
                >
                  Elie Schulman, in conversation with David Bashevkin · 18Forty
                </a>
              </p>
              <div className="mt-11 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <p className="max-w-[46ch] font-serif text-[19px] leading-[1.55] text-ink-soft lg:text-[23px]">
                  He was twenty-two, the youngest person in the room by thirty years, and he
                  went every Monday at 7:45 for two years without saying a word. The man who
                  facilitates your group knows exactly what the silent seat is like, because he
                  sat in it for a hundred sessions.
                </p>
                <p className="border-l border-rule pl-6 pt-1.5 font-sans text-[14px] leading-[1.75] text-muted">
                  This is why nobody in a Cohort Learning Labs group is hurried, called on, or
                  drawn out before they are ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">01 — In his own words</p>
            <div className="grid items-start gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
              <Image
                src="/images/elie-schulman.jpg"
                alt="Elie Schulman"
                width={712}
                height={1083}
                sizes="(min-width: 1024px) 280px, 100vw"
                className="h-auto w-full [filter:grayscale(0.15)]"
                priority
              />
              <div>
                <blockquote
                  cite="https://18forty.org/podcast/elie-schulman-does-therapy-work-a-patients-journey/"
                  className="max-w-[56ch] font-serif text-[26px] leading-[1.45] text-ink"
                >
                  “So me, for example, for about two years, I did not open my mouth. I went
                  dutifully every Monday morning at 7:45. I was a very anxious self-critical
                  person, and I would sit there, it’s 90 minute group, I would sit there for an
                  hour and 20 minutes, an hour and 25 minutes, and inevitably there was a
                  handful of people at the end of every session, one of two or three people that
                  would turn to me and say, ‘Elie, what’s going on?’ And I would just start
                  crying at the end.”
                </blockquote>
                <blockquote
                  cite="https://18forty.org/podcast/elie-schulman-does-therapy-work-a-patients-journey/"
                  className="mt-8 max-w-[56ch] border-l border-accent pl-6 font-serif text-[21px] leading-[1.62] text-ink-soft"
                >
                  “It was like I had just been spending an hour and 20 minutes just like
                  ruminating in my head, ‘Should I jump in now? Should I jump in? Oh, is that a
                  good thing to say? Is it not a good thing to say?’ Literally just doing that
                  for an hour. ‘Oh, somebody else jumped in before me.’”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule-dark bg-ink py-14 text-paper lg:py-24">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">02 — The way in</p>
            <div>
              <h2 className="max-w-[24ch] font-serif text-[36px] leading-[1.08] tracking-[-0.01em] text-paper lg:text-[52px]">
                Nobody dragged him out of it. Three of them kept asking.
              </h2>
              <blockquote
                cite="https://18forty.org/podcast/elie-schulman-does-therapy-work-a-patients-journey/"
                className="mt-8 max-w-[58ch] font-serif text-[21px] leading-[1.62] text-onink-strong"
              >
                “It was three people … who at the end of every group would say, ‘Elie, do you
                have anything to add about this,’ or, ‘What’s going on?’ That’s how for a period
                of time, I would just then spill my after the fact reactions.”
              </blockquote>
              <blockquote
                cite="https://18forty.org/podcast/elie-schulman-does-therapy-work-a-patients-journey/"
                className="mt-7 max-w-[58ch] font-serif text-[21px] leading-[1.62] text-onink"
              >
                “I would basically give a historical recollection of what I had experienced,
                which was my way in, and I would get various feedback and then the group would
                break for the week and then I’d repeat the same thing again next week. And until
                I got some familiarity with my own voice, which really took a lot of time. I
                mean, it took a lot of time.”
              </blockquote>
              <p className="mt-11 max-w-[52ch] font-sans text-[14px] leading-[1.8] text-accent-light">
                Two years of silence, then a way in that he found himself. The group did not fix
                him and did not rescue him. It stayed, week after week, and left the door open.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-ground">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">03 — What he took from it</p>
            <div>
              <p className="max-w-[50ch] font-serif text-[26px] font-medium leading-[1.4] text-ink lg:text-[30px]">
                He facilitates the way he needed to be facilitated.
              </p>
              <div className="mt-8 flex max-w-[66ch] flex-col gap-[22px] font-serif text-[19px] leading-[1.62] text-ink-soft lg:text-[21px]">
                <p>
                  The instruction he was given at the start was simple, and it is still the
                  instruction: put the thoughts and feelings you are having right now into
                  words. Someone speaks, something moves in you, you say it. That is the entire
                  method, and it takes as long as it takes.
                </p>
                <p>
                  He will not call on you, hurry you, or supply your sentence. He will not read
                  your silence out loud for you. Two years of anxious rumination taught him what
                  an impatient teacher costs a quiet person.
                </p>
              </div>
              <p className="mt-9 max-w-[46ch] border-l border-accent pl-6 font-serif text-[26px] italic leading-[1.4] text-ink">
                A bashful person cannot learn, nor can an impatient person teach.
              </p>
              <p className="mt-3 pl-[25px] font-sans text-[11px] uppercase tracking-[0.18em] text-faint">
                Pirkei Avot 2:6
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-rule bg-paper">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label">04 — Where the training comes from</p>
            <div className="grid gap-12 md:grid-cols-2 md:gap-14">
              <div className="border-t-2 border-ink pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
                  Five years · Louis Ormont
                </p>
                <h2 className="mt-4 font-serif text-[28px] leading-[1.22] text-ink lg:text-[30px]">
                  Monday mornings, 7:45, midtown, until Ormont died at 90.
                </h2>
                <p className="mt-4 font-serif text-[19px] leading-[1.6] text-ink-soft lg:text-[20px]">
                  A group of eighteen, most of whom had been with the same man for thirty or
                  forty years. Elie was twenty-two; the next youngest was in their mid-fifties.
                </p>
              </div>
              <div className="border-t-2 border-ink pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-accent">
                  Twelve more years
                </p>
                <h2 className="mt-4 font-serif text-[28px] leading-[1.22] text-ink lg:text-[30px]">
                  Six years with Michael Brook, then six with Sean Grover.
                </h2>
                <p className="mt-4 font-serif text-[19px] leading-[1.6] text-ink-soft lg:text-[20px]">
                  Both named by Joan Ormont as heirs to that work. Elie stayed in group
                  continuously until he moved to Israel, and is now bringing this work here at
                  scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-14 text-accent-on lg:py-[104px]">
        <div className="container-custom">
          <div className="rail">
            <p className="rail-label text-accent-pale">05 — Begin</p>
            <div>
              <h2 className="max-w-[22ch] font-serif text-[36px] leading-[1.05] tracking-[-0.015em] lg:text-[60px]">
                If it takes you two years to speak, that is allowed here.
              </h2>
              <p className="mt-7 max-w-[52ch] font-serif text-[19px] leading-[1.62] text-accent-prose lg:text-[21px]">
                Thirty minutes with Elie: what you are curious about, what keeps recurring, and
                which cohort is the right place to look at it.
              </p>
              <ConsultationLink className="mt-10 inline-block bg-accent-on px-[30px] py-4 font-sans text-[14px] font-medium text-accent transition-colors duration-150 hover:bg-[#efe6dd]">
                Schedule a 30-minute consultation
              </ConsultationLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
