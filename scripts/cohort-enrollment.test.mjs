/**
 * Runs the real cohort helpers (compiled from lib/cohorts.ts) against the
 * Tuesday and Thursday start instants. Wired into `npm run check`.
 */
import { spawnSync } from 'node:child_process'
import { mkdtempSync, rmSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const out = mkdtempSync(join(tmpdir(), 'cohort-enrollment-'))
const tsc = spawnSync(
  process.execPath,
  [
    'node_modules/typescript/lib/tsc.js',
    'lib/cohorts.ts',
    '--outDir',
    out,
    '--target',
    'es2022',
    '--module',
    'nodenext',
    '--moduleResolution',
    'nodenext',
    '--strict',
    '--skipLibCheck',
  ],
  { encoding: 'utf8' }
)

if (tsc.status !== 0) {
  console.error(tsc.stdout)
  console.error(tsc.stderr)
  process.exit(tsc.status ?? 1)
}

const require = createRequire(import.meta.url)
const {
  cohorts,
  enrollmentLabel,
  hasOpenEnrollment,
  isEnrollmentOpen,
  nextCohortsHeading,
  WAITLIST_HREF,
} = require(join(out, 'cohorts.js'))

const failures = []
const fail = (message) => failures.push(message)
const tuesday = cohorts.find((cohort) => cohort.id === 'tuesday-israel')
const thursday = cohorts.find((cohort) => cohort.id === 'thursday-eastern')
const beforeTuesday = Date.parse(tuesday.startsAt) - 1
const atTuesday = Date.parse(tuesday.startsAt)
const beforeThursday = Date.parse(thursday.startsAt) - 1
const atThursday = Date.parse(thursday.startsAt)

if (isEnrollmentOpen(tuesday.startsAt, beforeTuesday) !== true) {
  fail('tuesday cohort should be open one millisecond before it starts')
}
if (isEnrollmentOpen(tuesday.startsAt, atTuesday) !== false) {
  fail('tuesday cohort should be closed at its start instant')
}
if (isEnrollmentOpen(thursday.startsAt, atTuesday) !== true) {
  fail('thursday cohort should still be open when tuesday starts')
}
if (isEnrollmentOpen(thursday.startsAt, beforeThursday) !== true) {
  fail('thursday cohort should be open one millisecond before it starts')
}
if (isEnrollmentOpen(thursday.startsAt, atThursday) !== false) {
  fail('thursday cohort should be closed at its start instant')
}

if (enrollmentLabel(tuesday, beforeTuesday) !== 'Open') fail('open label should be Open')
if (enrollmentLabel(tuesday, atTuesday) !== 'Started') fail('closed label should be Started')
if (enrollmentLabel(thursday, atTuesday) !== 'Open') {
  fail('thursday label should stay Open after tuesday starts')
}
if (hasOpenEnrollment(beforeTuesday) !== true) fail('enrollment should be open before tuesday')
if (hasOpenEnrollment(atTuesday) !== true) fail('thursday should keep enrollment open')
if (hasOpenEnrollment(atThursday) !== false)
  fail('enrollment should be closed once both have started')

if (nextCohortsHeading(beforeTuesday) !== 'The next cohorts start in October 2026.') {
  fail(`both-open heading changed: ${nextCohortsHeading(beforeTuesday)}`)
}
if (nextCohortsHeading(atTuesday) !== 'The next cohort starts on 15 October 2026.') {
  fail(`one-open heading changed: ${nextCohortsHeading(atTuesday)}`)
}
if (nextCohortsHeading(atThursday) !== 'These cohorts have started.') {
  fail(`closed heading changed: ${nextCohortsHeading(atThursday)}`)
}

if (!WAITLIST_HREF.startsWith('mailto:elie@cohortlearninglabs.org?')) {
  fail('waitlist should be an email to Elie, not a new service')
}
if (!WAITLIST_HREF.includes('subject=Waitlist%20for%20the%20next%20round')) {
  fail('waitlist subject should name the next round without inventing a date')
}

rmSync(out, { recursive: true, force: true })

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log('Cohort enrollment checks passed.')
