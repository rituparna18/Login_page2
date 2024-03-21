document.addEventListener("DOMContentLoaded", function () {
  // JavaScript code for creating the bar charts using Chart.js
  var ctx1 = document.getElementById("revenueByLocationChart").getContext("2d");

  var revenueByLocationChart = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: [
        "Location A",
        "Location B",
        "Location C",
        "Location C",
        "Location B",
        "Location C",
        "Location C",
      ],
      datasets: [
        {
          label: "Revenue",
          data: [10000, 15000, 12000, 15000, 120001, 5000, 12000, 29390], // Example revenue data for each location
          backgroundColor: [
            "rgb(65, 191, 153)", // Red
          ],
          borderColor: ["rgb(65, 191, 153)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y", // Rotate bars 90 degrees
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  });
  var ctx2 = document.getElementById("revenueByTypeChart").getContext("2d");
  var revenueByTypeChart = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: [
        "Type 1",
        "Type 2",
        "Type 3",
        "Type 1",
        "Type 2",
        "Type 3",
        "Type 4",
      ],
      datasets: [
        {
          label: "Revenue",
          data: [5000, 5000, 8000, 6000, 1234, 8000, 6000], // Example revenue data for each type
          backgroundColor: ["rgb(65, 191, 153)"],
          borderColor: ["rgb(65, 191, 153)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y", // Rotate bars 90 degrees
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    },
  });

  function createDataCard(container, value, label, pos) {
    var card = document.createElement("div");
    card.classList.add("data-card");

    if (pos) {
      card.classList.add("positive");
    } else {
      card.classList.add("negative");
    }

    var valueDiv = document.createElement("div");
    valueDiv.classList.add("value");
    valueDiv.textContent = value;
    if (pos) {
      valueDiv.style.color = "#41bf99";
    } else {
      valueDiv.style.color = "#FF7A7A";
    }
    card.appendChild(valueDiv);

    var labelDiv = document.createElement("div");
    labelDiv.classList.add("label");
    labelDiv.textContent = label;
    labelDiv.style.fontWeight = "bold";
    card.appendChild(labelDiv);

    container.appendChild(card);
  }

  // Example data for the data cards
  var metricsContainer = document.querySelector(".metrics-grid");

  createDataCard(metricsContainer, 1123000, "Total Revenue", true);
  createDataCard(metricsContainer, 100, "Total Job", true);
  createDataCard(metricsContainer, 150, "Tickets Created", true);
  createDataCard(metricsContainer, 500, "Jobs Completed", true);
  createDataCard(metricsContainer, 100, "Remaining jobs", true);
  createDataCard(metricsContainer, 50, "Incomplete Jobs", false);
  createDataCard(metricsContainer, 50, "Incomplete Jobs", false);
  createDataCard(metricsContainer, 50, "Incomplete Jobs", false);
});
