let accounts = [
  {
    accountNo: 1001,
    customerName: "Rahul Sharma",
    accountType: "Savings",
    branchName: "Pune Main Branch",
    ifscCode: "TKAB0001234",
    mobileNo: "9876543210",
    email: "rahul@example.com",
    balance: 45000,
    status: "Active",
  },

  {
    accountNo: 1002,
    customerName: "priya",
    accountType: "current",
    branchName: "mumbai Main Branch",
    ifscCode: "TKAB0001264",
    mobileNo: "9876544210",
    email: "priya@example.com",
    balance: 50000,
    status: "Active",
  },

  {
    accountNo: 1003,
    customerName: "nikhil",
    accountType: "Savings",
    branchName: "jaipur Main Branch",
    ifscCode: "TKAB000122234",
    mobileNo: "9876549210",
    email: "nikhil@example.com",
    balance: 60000,
    status: "Active",
  },
  


  
  
];

let t = document.getElementById("body");
let editAccountNo = null;

function displayAccounts() {
  t.innerHTML = accounts
    .map((a) => {
      return `
        <tr>
          <td>${a.accountNo}</td>
          <td>${a.customerName}</td>
          <td>${a.accountType}</td>
          <td>${a.branchName}</td>
          <td>${a.ifscCode}</td>
          <td>${a.mobileNo}</td>
          <td>${a.email}</td>
          <td>${a.balance}</td>
          <td><span class="status">${a.status}</span></td>
          <td>
            <button class="action-btn delete-btn" type="button" onclick="deleteAccount('${a.accountNo}')">Delete</button>
            <button class="action-btn update-btn" type="button" onclick="updateAccount('${a.accountNo}')">Update</button>
          </td>
        </tr>
      `;
    })
    .join("");
}

function saveAccount() {
  let account = {
    accountNo: document.getElementById("accountNo").value,
    customerName: document.getElementById("customerName").value,
    accountType: document.getElementById("accountType").value,
    branchName: document.getElementById("branchName").value,
    ifscCode: document.getElementById("ifscCode").value,
    mobileNo: document.getElementById("mobileNo").value,
    email: document.getElementById("email").value,
    balance: document.getElementById("balance").value,
    status: document.getElementById("status").value,
  };

  if (editAccountNo == null) {
    accounts.push(account);
  } else {
    let index = accounts.findIndex((a) => a.accountNo == editAccountNo);
    if (index != -1) {
      accounts[index] = account;
    }
    editAccountNo = null;
  }

  displayAccounts();
  cleartable();
}

function deleteAccount(accountNo) {
  accounts = accounts.filter((a) => a.accountNo != accountNo);

  if (editAccountNo == accountNo) {
    editAccountNo = null;
    cleartable();
  }

  displayAccounts();
}

function updateAccount(accountNo) {
  let account = accounts.find((a) => a.accountNo == accountNo);

  if (account == undefined) {
    return;
  }

  editAccountNo = accountNo;

  document.getElementById("accountNo").value = account.accountNo;
  document.getElementById("customerName").value = account.customerName;
  document.getElementById("accountType").value = account.accountType;
  document.getElementById("branchName").value = account.branchName;
  document.getElementById("ifscCode").value = account.ifscCode;
  document.getElementById("mobileNo").value = account.mobileNo;
  document.getElementById("email").value = account.email;
  document.getElementById("balance").value = account.balance;
  document.getElementById("status").value = account.status;

}

function cleartable() {
  document.getElementById("accountNo").value = "";
  document.getElementById("customerName").value = "";
  document.getElementById("accountType").value = "";
  document.getElementById("branchName").value = "";
  document.getElementById("ifscCode").value = "";
  document.getElementById("mobileNo").value = "";
  document.getElementById("email").value = "";
  document.getElementById("balance").value = "";
  document.getElementById("status").value = "";
}

displayAccounts();
