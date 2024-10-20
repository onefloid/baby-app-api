"use strict"

const { test } = require("tap")
const { build } = require("../helper")

test("weight route", async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: "/1/weight"
  })

  const json = JSON.parse(res.payload)

  t.ok(json.constructor === Array)
  t.hasProps(json[0], ["x", "y"])
})
