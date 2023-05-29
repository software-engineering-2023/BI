document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the logged-in user's name from sessionStorage
  const username = sessionStorage.getItem("username");
  document.getElementById("username").textContent = username;

  // Function to fetch transaction history data from API or database
  function fetchTransactionHistory() {
    // Simulated data for demonstration
    return [
      { date: '2023-05-16', description: 'Deposit', amount: '$10000000.00' },
      { date: '2023-04-03', description: 'Withdrawal', amount: '$500000.00' },
      { date: '2023-02-15', description: 'Transfer', amount: '$200000.00' },
      { date: '2023-01-10', description: 'Loan', amount: '$20000.00' },
    ];
  }

  // Function to populate transaction history table
  function populateTransactionHistory() {
    const transactionTable = document.getElementById('transaction-table');
    const transactionRows = fetchTransactionHistory().map(transaction => `
      <tr>
        <td>${transaction.date}</td>
        <td>${transaction.description}</td>
        <td>${transaction.amount}</td>
      </tr>
    `).join('');

    transactionTable.innerHTML = transactionRows;
  }

  // Populate transaction history on page load
  populateTransactionHistory();

  // Open Account Functionality
  document.getElementById('open-account-btn').addEventListener('click', function() {
    window.location.href = 'open-account.html'; // Redirect to the open account page
  });

  // Sample array of existing accounts
  const accounts = [
    {
      name: "Tameem Ghleiw",
      email: "tameemglewo1@gmail.com",
      accountNumber: "29102002",
      balance: "11933500.00 USD"
    },
    {
      name: "Tameem Ghleiw",
      email: "tameemglewo1@gmail.com",
      accountNumber: "1241964",
      balance: "3972892.00 EUR"
    }
    // Add more accounts as needed
  ];

  // Function to check if an account number exists
  function isAccountExists(accountNumber) {
    return accounts.some(account => account.accountNumber === accountNumber);
  }

  // Function to delete an account
  function deleteAccount(accountNumber) {
    accounts.forEach((account, index) => {
      if (account.accountNumber === accountNumber) {
        accounts.splice(index, 1);
        return;
      }
    });
  }

  // Function to handle close account button click
  function handleAccountClosure() {
    const accountNumber = prompt("Enter Account Number:");

    if (!accountNumber) {
      return; // User cancelled the input
    }

    if (isAccountExists(accountNumber)) {
      deleteAccount(accountNumber);
      alert("Account deleted successfully.");
      // Remove the account from the screen
      const accountInfoContainer = document.getElementById("account-info-container");
      const accountDivs = accountInfoContainer.getElementsByClassName("account-info");
      Array.from(accountDivs).forEach(accountDiv => {
        const accountNumberElement = accountDiv.querySelector("p");
        if (accountNumberElement.textContent.includes(accountNumber)) {
          accountDiv.remove();
        }
      });
    } else {
      alert("Account not found. Please check the account number.");
    }
  }

  // Attach event listener to the close account button
  document.getElementById("close-account-btn").onclick = handleAccountClosure;

  // Function to format the currency
  function formatCurrency(amount) {
    // Format the amount here (e.g., add currency symbol, apply formatting rules)
    return amount;
  }

  // Function to retrieve the account information from the accounts array
  function getAccountInfo(accountNumber) {
    return accounts.find(account => account.accountNumber === accountNumber);
  }

  // Function to populate account information
  function populateAccountInformation() {
    const accountInfoContainer = document.getElementById("account-info-container");

    // Create elements for name and email
    const nameElement = document.createElement("p");
    const emailElement = document.createElement("p");
    nameElement.innerHTML = `<strong>Name:</strong> ${accounts[0].name}<br>`;
    emailElement.innerHTML = `<strong>Email:</strong> ${accounts[0].email}<br>`;
    accountInfoContainer.appendChild(nameElement);
    accountInfoContainer.appendChild(emailElement);

    // Loop through accounts to display account information
    accounts.forEach(account => {
      const accountDiv = document.createElement("div");
      accountDiv.classList.add("account-info");

      const accountNumberElement = document.createElement("p");
      accountNumberElement.innerHTML = `<strong>Account Number:</strong> ${account.accountNumber}`;

      const balanceElement = document.createElement("p");
      balanceElement.innerHTML = `<strong>Balance:</strong> ${account.balance}<br>`;

      accountDiv.appendChild(accountNumberElement);
      accountDiv.appendChild(balanceElement);
      accountInfoContainer.appendChild(accountDiv);
    });
  }

  // Call the populateAccountInformation function on page load
  populateAccountInformation();

  // Logout Account Functionality
  document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'Home.html'; // Redirect to the home page
  });
});
