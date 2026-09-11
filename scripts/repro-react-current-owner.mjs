/**
 * Feedback loop for: Cannot read properties of undefined (reading 'ReactCurrentOwner')
 * Expects `pnpm dev` on http://localhost:3000
 *
 * Exit 1 = bug present (RED)
 * Exit 0 = bug absent (GREEN)
 */
import { chromium } from "playwright"

const URL = process.env.REPRO_URL ?? "http://localhost:3000"
const WAIT_MS = Number(process.env.REPRO_WAIT_MS ?? 4500)

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()
const errors = []

page.on("pageerror", (err) => {
  errors.push(String(err?.message ?? err))
})
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text())
})

try {
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 120000 })
  // HomeClient delays World mount by 2s; wait past that + chunk load
  await page.waitForTimeout(WAIT_MS)
} finally {
  await browser.close()
}

const hit = errors.find((e) => e.includes("ReactCurrentOwner"))
if (hit) {
  console.error("RED: ReactCurrentOwner error present")
  console.error(hit)
  process.exit(1)
}

console.log("GREEN: no ReactCurrentOwner error")
if (errors.length) {
  console.log("Other errors:", errors.slice(0, 5).join("\n"))
}
process.exit(0)
