const url =
"https://api.thecatapi.com/v1/breeds?Key=30efcd09-04ec-4f32-932d-f3669ba46702";

export async function CatApp() {
  let result = await fetch(url).then(response => response.json());
  return result.breeds;
}