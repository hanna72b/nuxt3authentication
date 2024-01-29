export default defineEventHandler(async (event) => {
  console.log("hi: ", event);
  const body = await readBody(event);

  console.log("body:", body);
  return {
    token: body.token,
  };
});
