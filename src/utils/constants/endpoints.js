// membuat variable api_key
const BASE_URL = "https://covid19.mathdro.id/api/";
// MEMBUAT variable endpoints (object)

const ENDPOINTS = {
    GLOBAL: `${BASE_URL}`,
    GAMBARS: `${BASE_URL}og`,
    INDO: `${BASE_URL}countries/indonesia`,
    GAMBAR: `${BASE_URL}countries/indonesia/og`
}
export default ENDPOINTS;