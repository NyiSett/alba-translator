const API_BASE_URL = window.ALBA_TRANSLATOR_API || "http://127.0.0.1:8000";
async function translateText(message, source_language, target_language) {
  const response = await fetch(`${API_BASE_URL}/translate`, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({message,source_language,target_language})});
  if (!response.ok) throw new Error("Translation request failed");
  return response.json();
}
