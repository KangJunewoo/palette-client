(() => {
  const generalInfoButton = document.getElementById('general-info-button');
  const toolsButton = document.getElementById("tools-button");
  const pageAdminsButton = document.getElementById("page-admins-button");
  const inviteMembersButton = document.getElementById("invite-members-button");
  const generalInfo = document.getElementById('general-info');
  const tools = document.getElementById('tools');
  const pageAdmins = document.getElementById('page-admins');
  const inviteMembers = document.getElementById('invite-members');
  const next1 = document.getElementById('next1');
  const next2 = document.getElementById('next2');
  const next3 = document.getElementById('next3');


  generalInfoButton.onclick = () => {
    if (generalInfoButton.classList.contains("selcted")) return;
    generalInfoButton.classList.add("selected");
    toolsButton.classList.remove("selected");
    pageAdminsButton.classList.remove("selected");
    inviteMembersButton.classList.remove("selected");
    generalInfo.style.display='block';
    tools.style.display='none';
    pageAdmins.style.display='none';
    inviteMembers.style.display='none';
  };
  toolsButton.onclick = () => {
    if (toolsButton.classList.contains("selcted")) return;
    generalInfoButton.classList.remove("selected");
    toolsButton.classList.add("selected");
    pageAdminsButton.classList.remove("selected");
    inviteMembersButton.classList.remove("selected");
    generalInfo.style.display='none';
    tools.style.display='block';
    pageAdmins.style.display='none';
    inviteMembers.style.display='none';
  };
  pageAdminsButton.onclick = () => {
    if (pageAdminsButton.classList.contains("selcted")) return;
    generalInfoButton.classList.remove("selected");
    toolsButton.classList.remove("selected");
    pageAdminsButton.classList.add("selected");
    inviteMembersButton.classList.remove("selected");
    generalInfo.style.display='none';
    tools.style.display='none';
    pageAdmins.style.display='block';
    inviteMembers.style.display='none';
  };
  inviteMembersButton.onclick = () => {
    if (inviteMembersButton.classList.contains("selcted")) return;
    generalInfoButton.classList.remove("selected");
    toolsButton.classList.remove("selected");
    pageAdminsButton.classList.remove("selected");
    inviteMembersButton.classList.add("selected");
    generalInfo.style.display='none';
    tools.style.display='none';
    pageAdmins.style.display='none';
    inviteMembers.style.display='block';
  };

  next1.onclick = ()=> {
    if (toolsButton.classList.contains("selcted")) return;
    generalInfoButton.classList.remove("selected");
    toolsButton.classList.add("selected");
    pageAdminsButton.classList.remove("selected");
    inviteMembersButton.classList.remove("selected");
    generalInfo.style.display='none';
    tools.style.display='block';
    pageAdmins.style.display='none';
    inviteMembers.style.display='none';
  }

  next2.onclick = () => {
    if (pageAdminsButton.classList.contains("selcted")) return;
    generalInfoButton.classList.remove("selected");
    toolsButton.classList.remove("selected");
    pageAdminsButton.classList.add("selected");
    inviteMembersButton.classList.remove("selected");
    generalInfo.style.display='none';
    tools.style.display='none';
    pageAdmins.style.display='block';
    inviteMembers.style.display='none';
  }

  next3.onclick = () => {
    if (inviteMembersButton.classList.contains("selcted")) return;
    generalInfoButton.classList.remove("selected");
    toolsButton.classList.remove("selected");
    pageAdminsButton.classList.remove("selected");
    inviteMembersButton.classList.add("selected");
    generalInfo.style.display='none';
    tools.style.display='none';
    pageAdmins.style.display='none';
    inviteMembers.style.display='block';
  }
})();
