// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#:~:text=The%20Promise%20returned,request%20from%20completing.
// The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500.
// Instead, as soon as the server responds with headers, the Promise will resolve normally
// (with the ok property of the response set to false if the response isn’t in the range 200–299),
// and it will only reject on network failure or if anything prevented the request from completing.
//class httpResponse extends Response
function formatHttpErrorResponse(r: Response): string {
  let responseText = `${r.status} ${r.statusText}`;
  // r.headers.forEach((val, key) => {
  //   responseText += `\n${key} ${val}`;
  // });
  return responseText;
}
export async function httpRequest(uri: string): Promise<any> {
  let responseContent: string | null = null;
  try {
    const response = await fetch(uri);
    if (!response.ok) {
      throw new Error(formatHttpErrorResponse(response));
    } else responseContent = await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
  return responseContent;
}
