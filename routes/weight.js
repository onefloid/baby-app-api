"use strict"

async function routes(fastify, opts) {
  fastify.get("/:baby_id/weight", async (req, reply) => {
    const connection = await fastify.mysql.getConnection()
    const [rows, fields] = await connection.query(
      "SELECT (UNIX_TIMESTAMP(`timestamp`) + 7200) * 1000 AS x, weight as y FROM weights WHERE baby_id=?",
      [req.params.baby_id]
    )
    connection.release()
    return rows
  })

  fastify.post("/:baby_id/weight", async (req, reply) => {
    const connection = await fastify.mysql.getConnection()

    try {
      await connection.query("INSERT INTO weights (baby_id, weight) VALUES (?, ?)", [req.params.baby_id, req.body.weight]);
      return { success: true };
    } catch (error) {
      return reply.code(500).send({ error: 'Database error' });
    } finally {
      connection.release();
    }
  })
}

module.exports = routes
