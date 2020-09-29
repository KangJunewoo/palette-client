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
  const c1 = document.getElementById('c1');
  const c2 = document.getElementById('c2');
  const c3 = document.getElementById('c3');
  const c4 = document.getElementById('c4');
  const c5 = document.getElementById('c5');
  const c6 = document.getElementById('c6');
  const c7 = document.getElementById('c7');
  const c8 = document.getElementById('c8');
  const c9 = document.getElementById('c9');
  const c10 = document.getElementById('c10');
  const c11 = document.getElementById('c11');
  const c12 = document.getElementById('c12');
  const c13 = document.getElementById('c13');
  const c14 = document.getElementById('c14');
  const c15 = document.getElementById('c15');
  const adminButton = document.getElementById('add-admin');


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

  const clubs = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15];
  const clubsOff = (clubs) =>{
    let i = 0;
    for(i = 0 ; i<15 ; i++){
      clubs[i].classList.remove('selected');
    }
  }
  c1.onclick = () => {
    clubsOff(clubs);
    c1.classList.add('selected');
  }
  c2.onclick = () => {
    clubsOff(clubs);
    c2.classList.add('selected');
  }
  c3.onclick = () => {
    clubsOff(clubs);
    c3.classList.add('selected');
  }
  c4.onclick = () => {
    clubsOff(clubs);
    c4.classList.add('selected');
  }
  c5.onclick = () => {
    clubsOff(clubs);
    c5.classList.add('selected');
  }
  c6.onclick = () => {
    clubsOff(clubs);
    c6.classList.add('selected');
  }
  c7.onclick = () => {
    clubsOff(clubs);
    c7.classList.add('selected');
  }
  c8.onclick = () => {
    clubsOff(clubs);
    c8.classList.add('selected');
  }
  c9.onclick = () => {
    clubsOff(clubs);
    c9.classList.add('selected');
  }
  c10.onclick = () => {
    clubsOff(clubs);
    c10.classList.add('selected');
  }
  c11.onclick = () => {
    clubsOff(clubs);
    c11.classList.add('selected');
  }
  c12.onclick = () => {
    clubsOff(clubs);
    c12.classList.add('selected');
  }
  c13.onclick = () => {
    clubsOff(clubs);
    c13.classList.add('selected');
  }
  c14.onclick = () => {
    clubsOff(clubs);
    c14.classList.add('selected');
  }
  c15.onclick = () => {
    clubsOff(clubs);
    c15.classList.add('selected');
  }

  let adminN = 3;
  adminButton.onclick = () =>{
    /*
    <div class="adminrole">
      <div class="admin">
        <h4>Admin 3</h4>
        <input class='short' type="text" placeholder='Enter e-mail'>
      </div>
      <div class="role">
        <h4>Role</h4>
        <select>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="moderator" selected>Moderator</option>
        </select>
      </div>
    </div>
    */
  }
  
})();
