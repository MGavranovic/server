import { SERVER_URL } from "../../../constants.ts";

async function useSendRandom() {
  const transport: WebTransport = new WebTransport(SERVER_URL);
  try {
    const r = await transport.ready;
    console.log("QUIC Transport READY => useSendRandom hook", r);
  } catch (error: unknown) {
    console.log("QUIC Transport ERROR => useSendRandom hook", error);
  }
}

// async function closeTransport(transport: WebTransport) {
//   try {
//     const tc = await transport.closed;
//     console.log("Transport closed", tc);
//   } catch (error) {
//     console.error(error);
//   }
// }

export default useSendRandom;
