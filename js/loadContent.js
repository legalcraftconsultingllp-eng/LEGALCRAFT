
async function loadContent(){
  const res = await fetch('data/content.json');
  const data = await res.json();

  if(document.getElementById('heroTitle'))
    document.getElementById('heroTitle').innerText = data.heroTitle;

  if(document.getElementById('heroSubtitle'))
    document.getElementById('heroSubtitle').innerText = data.heroSubtitle;

  if(document.getElementById('aboutText'))
    document.getElementById('aboutText').innerText = data.about;

  if(document.getElementById('servicesList'))
    document.getElementById('servicesList').innerHTML =
      data.services.map(s=>`<li>${s}</li>`).join('');

  if(document.getElementById('teamList'))
    document.getElementById('teamList').innerHTML =
      data.team.map(t=>`<li><strong>${t.name}</strong> - ${t.role}</li>`).join('');
}
loadContent();
