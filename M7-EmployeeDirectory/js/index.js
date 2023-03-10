import { employees } from "./employees-optional.js";
import Member from "./Member.js";

const searchInput = document.querySelector("#search-input");
const containerEl = document.querySelector(".container");
const selectedTeam = document.querySelector("#team-select");


const allMembers = employees.flatMap((team) => {
  return team.members.map((member) => {
    return new Member({
      team: team.team,
      name: member.name,
      title: member.title,
      bio: member.bio,
      image: member.image,
      social: member.social
    });
  });
});

// display all teams on the dropdown menu
function displayTeams() {
  const teams = employees.map((team) => team.team);
  selectedTeam.innerHTML += teams
    .map((team) => `<option value="${team}">${team}</option>`)
    .join(""); 
}

function displayMembers(members) {
  containerEl.innerHTML = members.map((member) => member.getHtml()).join("");
}

function filterMembersByTeam(members, team) {
  if (team === "all") {
    return members;
  } else {
    return members.filter((member) => member.team === team);
  }
}

function filterMembersByName(members, name) {
  return members.filter((member) =>
    member.name.toLowerCase().includes(name.toLowerCase())
  );
}

function displaySelectedTeam() {
  const team = selectedTeam.value;
  const filteredMembers = filterMembersByTeam(allMembers, team);
  displayMembers(filteredMembers);
}

function displayAllMembers() {
  displayMembers(allMembers);
}

function searchMembers() {
  const name = searchInput.value;
  const filteredMembers = filterMembersByName(allMembers, name);
  displayMembers(filteredMembers);
}

selectedTeam.addEventListener("change", displaySelectedTeam);
searchInput.addEventListener("input", searchMembers);

displayTeams();
displayAllMembers();