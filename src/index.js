export default {
  async fetch(request) {
    return new Response("License API is running!", {
      headers: {
        "content-type": "text/plain; charset=UTF-8"
      }
    });
  }
};
