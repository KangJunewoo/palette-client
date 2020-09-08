(() => {
  const debateClub = document.getElementById("debateClub");
  const munClub = document.getElementById("munClub");
  const rockClub = document.getElementById("rockClub");
  const sportsClub = document.getElementById("sportsClub");
  const webTab = document.getElementById("web");
  const mobileTab = document.getElementById("mobile");

  debateClub.onclick = () => {
    if (debateClub.classList.contains("selcted")) return;
    debateClub.classList.add("selected");
    munClub.classList.remove("selected");
    rockClub.classList.remove("selected");
    sportsClub.classList.remove("selected");
  };
  munClub.onclick = () => {
    if (munClub.classList.contains("selcted")) return;
    debateClub.classList.remove("selected");
    munClub.classList.add("selected");
    rockClub.classList.remove("selected");
    sportsClub.classList.remove("selected");
  };
  rockClub.onclick = () => {
    if (rockClub.classList.contains("selcted")) return;
    debateClub.classList.remove("selected");
    munClub.classList.remove("selected");
    rockClub.classList.add("selected");
    sportsClub.classList.remove("selected");
  };
  sportsClub.onclick = () => {
    if (sportsClub.classList.contains("selcted")) return;
    debateClub.classList.remove("selected");
    munClub.classList.remove("selected");
    rockClub.classList.remove("selected");
    sportsClub.classList.add("selected");
  };

  webTab.onclick = () => {
    if (webTab.classList.contains("selected")) return;
    webTab.classList.add("selected");
    mobileTab.classList.remove("selected");
  };
  mobileTab.onclick = () => {
    if (mobileTab.classList.contains("selected")) return;
    webTab.classList.remove("selected");
    mobileTab.classList.add("selected");
  };
})();
