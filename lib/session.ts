/**
 * The illustrative session and the group norms, shared by the homepage and
 * /services so the two pages cannot drift apart.
 *
 * The homepage shows event and observation in separate columns and omits
 * moments marked `servicesOnly`. The session page prints them as one line.
 */

export interface SessionMoment {
  time: string
  event: string
  observation?: string
  accent?: boolean
  servicesOnly?: boolean
}

export const sessionMoments: SessionMoment[] = [
  {
    time: '00:12',
    event: 'Two members read the same paragraph in opposite ways.',
    observation: 'One found it manipulative. One found it moving.',
  },
  {
    time: '00:19',
    event: 'One of them apologises for disagreeing.',
    observation: 'The apology arrives before anyone objected.',
  },
  {
    time: '00:28',
    event: 'Nine seconds in which nobody speaks.',
    observation: 'The facilitator does not fill it.',
    accent: true,
  },
  {
    time: '00:37',
    event: 'Someone says what the room was circling.',
    observation: 'It is the person who had not spoken yet.',
  },
  {
    time: '00:44',
    event: 'Someone tells her what it was like to hear it from her, of all people.',
    servicesOnly: true,
  },
  {
    time: '01:14',
    event: 'The group stops and looks at what it just did.',
    observation: 'This is the part that does not happen alone.',
  },
]

export const homeSessionMoments = sessionMoments.filter((moment) => !moment.servicesOnly)

export function sessionLine(moment: SessionMoment): string {
  return moment.observation ? `${moment.event} ${moment.observation}` : moment.event
}

export const groupNorms = [
  'Speak for yourself, not for the room.',
  'Say what you felt, not whether it was justified.',
  'Check the story you are telling yourself about someone before you act on it.',
  'Ask before you give advice.',
  'Describe where something landed, not what it proves about the person.',
  'What is said here stays here. That one is not negotiable.',
]
