import data from "./data.json" with { type: "json" };
const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const button = document.getElementById("submit");
const loginPage = document.getElementById("login");
const content = document.getElementById("content");
button.addEventListener("click", function () {
  let enteredName = inputName.value;
  let enteredPassword = inputPassword.value;
  checkName(enteredName, enteredPassword);
});

function getArrey(type = "name") {
  const ourArray = data.map((i) => i[type]);
  return ourArray;
}

function checkName(eName, ePass) {
  const nameArrey = getArrey("name");
  if (nameArrey.includes(eName) && ePass === "1234") {
    closeBtn.classList.remove("hidden!");
    const findIndex = nameArrey.indexOf(eName);
    console.log(findIndex, eName);
    loginPage.classList.add("hidden");
    content.innerHTML = "";
    const html = `
       <div class="w-full h-full overflow-hidden">
        <!-- Table Structure -->
        <table class="w-full border-collapse text-left">
          <tbody class="divide-y divide-[#E2E8F0]">
            <tr class="hover:bg-[#F8FAFC] transition-colors">
              <td
                class="px-6 py-3.5 font-medium text-[#475569] bg-[#F8FAFC] w-1/3 border-r border-[#E2E8F0] capitalize"
              >
                id
              </td>
              <td class="px-6 py-3.5 text-[#0F2942] font-semibold">${data[findIndex].id}</td>
            </tr>

            <tr class="hover:bg-[#F8FAFC] transition-colors">
              <td class="px-6 py-3.5 font-medium text-[#475569] bg-[#F8FAFC] border-r border-[#E2E8F0] capitalize">
                name
              </td>
              <td class="px-6 py-3.5 text-[#0F2942] font-semibold">${data[findIndex].name}</td>
            </tr>

            <tr class="hover:bg-[#F8FAFC] transition-colors">
              <td class="px-6 py-3.5 font-medium text-[#475569] bg-[#F8FAFC] border-r border-[#E2E8F0] capitalize">
                age
              </td>
              <td class="px-6 py-3.5 text-[#0F2942]">${data[findIndex].age}</td>
            </tr>

            <tr class="hover:bg-[#F8FAFC] transition-colors">
              <td class="px-6 py-3.5 font-medium text-[#475569] bg-[#F8FAFC] border-r border-[#E2E8F0] capitalize">
                role
              </td>
              <td class="px-6 py-3.5 text-[#2563EB] font-medium">${data[findIndex].role}</td>
            </tr>

            <tr class="hover:bg-[#F8FAFC] transition-colors">
              <td class="px-6 py-3.5 font-medium text-[#475569] bg-[#F8FAFC] border-r border-[#E2E8F0] capitalize">
                phone
              </td>
              <td class="px-6 py-3.5 text-[#475569] font-mono">${data[findIndex].phone}</td>
            </tr>

            <tr class="hover:bg-[#F8FAFC] transition-colors">
              <td class="px-6 py-3.5 font-medium text-[#475569] bg-[#F8FAFC] border-r border-[#E2E8F0] capitalize">
                address
              </td>
              <td class="px-6 py-3.5 text-[#475569]">${data[findIndex].address}</td>
            </tr>

            <tr class="hover:bg-[#F8FAFC] transition-colors">
              <td class="px-6 py-3.5 font-medium text-[#475569] bg-[#F8FAFC] border-r border-[#E2E8F0] capitalize">
                country
              </td>
              <td class="px-6 py-3.5 text-[#475569]">${data[findIndex].country}</td>
            </tr>

            <tr class="hover:bg-[#F8FAFC] transition-colors">
              <td class="px-6 py-3.5 font-medium text-[#475569] bg-[#F8FAFC] border-r border-[#E2E8F0] capitalize">
                salary
              </td>
              <td class="px-6 py-3.5 text-[#0F2942] font-semibold">$${data[findIndex].salary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    content.insertAdjacentHTML("beforeend", html);
    content.classList.remove("hidden");
  } else {
    console.log("Error: 404");
  }
}
const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", function () {
  content.classList.add("hidden");
  loginPage.classList.remove("hidden");
  closeBtn.classList.add("hidden!");
});
