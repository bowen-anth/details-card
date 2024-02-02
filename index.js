const membersTotal = document.querySelector(".members-total");
const membersOnline = document.querySelector(".members-online");

const randomizeMembers = () => {
  let totalMembers = Math.floor(Math.random() * 16000 + 8000);
  let percentageOnline = Math.random() * 10 + 15;
  let membersOnlineCount = Math.round((percentageOnline / 100) * totalMembers);

  membersTotal.textContent = (totalMembers / 1000).toFixed(1) + "k";
  membersOnline.textContent = membersOnlineCount;
};

randomizeMembers();
